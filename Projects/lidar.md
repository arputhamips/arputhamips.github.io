---
title: LiDAR-Based Sensor Modeling and Navigation in Fire Rescue
date: December 2024
---

# LiDAR-Based Sensor Modeling and Navigation in Fire Rescue

![Point Cloud Smoke](/Assets/Projects/lidar/pointcloud-w-smoke.png)

**Project:** Dynamic LiDAR Simulation for Fire Rescue Navigation  
**Course:** MAE 5810 – Robot Perception, Cornell University  
**Semester:** Fall 2024  
**Environment:** Simulated fire rescue scenario with real-world noise, dynamic targets, and environmental attenuation  

---

##  Overview

This project implements a 2D LiDAR simulation to evaluate **sensor performance under smoke, fog, and rain**—key challenges in fire rescue. The system simulates noise, reflectivity, and attenuation, creating real-time point cloud data that enables **fire and human detection** using trajectory planning and noise prioritization.

---

##  Core Features

- **Physics-Based Sensor Modeling**: Reflectivity, angle of incidence, and smoke-based attenuation.
- **Dynamic Obstacle Detection**: Human modeled with Bézier curve motion.
- **Scattering and Intensity Loss**: Maps used to simulate dense smoke and noisy returns.
- **Two-Phase Movement Plan**:
  - **Quick Scan**: Broad coverage of unknown space.
  - **Focused Observation**: Moves toward low-intensity (high smoke) regions.
- **Coverage Efficiency**: Maintained ~82% in scan phase, ~84% near the fire.
- **Early Fire Detection**: ~0.8s
- **Dynamic Human Detection**: ~1.5s after motion begins

---

##  Sensor Theory

```python
# Intensity model under attenuation
import numpy as np
def compute_intensity(I0, reflectivity, angle, k, distance):
    """
    Compute received LiDAR intensity considering reflectivity, angle of incidence, and attenuation.
    I0: emitted intensity
    reflectivity: surface reflectivity (0-1)
    angle: incidence angle in radians
    k: attenuation coefficient (e.g., due to smoke)
    distance: distance to target
    """
    return I0 * reflectivity * np.cos(angle) * np.exp(-k * distance)
```

```python
# Noisy range & intensity
import numpy as np
def add_sensor_noise(d, I, sigma_d=0.02, sigma_I=0.05):
    """
    Add Gaussian noise to range (d) and intensity (I) measurements.
    sigma_d: standard deviation for distance noise
    sigma_I: standard deviation for intensity noise
    """
    d_noisy = d + np.random.normal(0, sigma_d)
    I_noisy = I + np.random.normal(0, sigma_I)
    return d_noisy, I_noisy
```

### Key Plots:

- Surface reflectivity vs return strength
- Intensity vs incidence angle
- Attenuation vs distance

![Intensity Drop](/Assets/Projects/lidar/smoke-density.png)

---

##  Movement Strategy

:::note
The robot uses noisy point cloud analysis to prioritize low-intensity regions for closer observation.
:::

```python
def move_toward_high_smoke(sensor_position, target_position, step_size):
    """
    Move sensor toward the target (e.g., region with highest smoke density).
    sensor_position: current position (np.array)
    target_position: position to move toward (np.array)
    step_size: movement increment
    """
    direction = target_position - sensor_position
    normalized = direction / np.linalg.norm(direction)
    return sensor_position + step_size * normalized
```

## Dynamic Target Detection

Human target follows a Bézier curve:

```python
def bezier_curve(p0, p1, p2, u):
    """
    Quadratic Bézier curve calculation.
    p0, p1, p2: np.array control points
    u: parameter from 0 to 1
    """
    return (1 - u)**2 * p0 + 2 * (1 - u) * u * p1 + u**2 * p2

# Generate a trajectory
import numpy as np
trajectory = [bezier_curve(np.array([0,0]), np.array([1,2]), np.array([2,0]), u) for u in np.linspace(0, 1, 50)]
```

Tracked via temporal point cloud difference.

---

##  Environmental Effects

Three separate attenuation studies:

:::row
![Smoke Effect](/Assets/Projects/lidar/effectsofsmokendfog.png)
![Working Demo](/Assets/Projects/lidar/working.png)
:::

- **Smoke**: Dense noise cluster at fire zone.
- **Fog**: Uniform dimming.
- **Rain**: High-variance scatter from drops.

---

##  Results Summary

| Element       | Detection Time |
|:---------------|:----------------|
| Fire          | 0.8 sec        |
| Moving Human  | 1.5 sec        |

| Phase                  | Coverage Efficiency |
|------------------------|---------------------|
| Quick Scanning (4s)    | 80–82%              |
| Focused Observation    | 83–84%              |

---

##  Real-Time Sensor Update

The environment updates dynamically:

- Fire emits smoke radially
- Human moves from Room 2 to Room 1
- Point cloud changes over time

```python
def get_environment_at_time(t):
    """
    Return fire plume and human position based on simulation time t.
    Assumes generate_fire_cloud, bezier_curve, start, control, end, total_time are defined.
    """
    fire = generate_fire_cloud(t)
    u = t / total_time
    human = bezier_curve(start, control, end, u)
    return {'fire': fire, 'human': human}

def draw_environment_at_time(env, t):
    """
    Draw the current environment (fire and human) at time t.
    Assumes draw_point_cloud and matplotlib.pyplot as plt are available.
    """
    draw_point_cloud(env['fire'], color='orange')
    draw_point_cloud(env['human'], color='blue')
    import matplotlib.pyplot as plt
    plt.title(f"Environment at t={t:.1f}s")
```

---

##  Advanced Modeling Techniques

:::warning
Scattering coefficients and incidence angles must be tuned per surface and time.
:::

```python
import numpy as np
def scattering_coefficient_map(point, fire_center, base=0.3, max_scatter=0.7):
    """
    Compute scattering coefficient at a point based on distance to fire center.
    base: base scattering coefficient
    max_scatter: maximum additional scattering at fire center
    """
    distance = np.linalg.norm(point - fire_center)
    return base + max_scatter * np.exp(-distance)

def angle_of_incidence(ray_start, ray_end, surface_normal):
    """
    Calculate angle of incidence (degrees) between incoming ray and surface normal.
    ray_start: np.array, starting point of ray
    ray_end: np.array, end point of ray
    surface_normal: np.array, normal vector at surface
    """
    ray = ray_end - ray_start
    ray_norm = ray / np.linalg.norm(ray)
    surface_norm = surface_normal / np.linalg.norm(surface_normal)
    angle_rad = np.arccos(np.clip(np.dot(ray_norm, surface_norm), -1.0, 1.0))
    return angle_rad * 180 / np.pi
```

---

##  Future Work

- Integrate **RGB camera** for sensor fusion
- Use **Jetson Nano** for onboard SLAM (WAN used during tests)
- Upgrade to **multi-beam 3D LiDAR**
- Train ML models to classify fire/human in dynamic scenes

---

##  Downloads

- [Lidar Report (PDF)](/Assets/Projects/lidar/lidar-report.pdf)
- [Colab Notebook (PDF)](/Assets/Projects/lidar/FInal_Lidar.ipynb%20-%20Colab.pdf)