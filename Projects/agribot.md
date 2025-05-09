---
title: AgriBot – Autonomous Agricultural Smart Bot
date: June 2023
---


![Hero Image](/Assets/Projects/agribot/hero.jpg)

**Project:** AgriBot – Design and Automation of an Agricultural Smart Bot  
**Institution:** College of Engineering Guindy, Anna University  
**Course:** Final Year B.E Mechanical Engineering Capstone Project  
**Duration:** Jan – May 2023  
**Team Size:** 4 Members  

---

##  Project Summary

AgriBot is a **multi-action autonomous agricultural robot** capable of performing four major tasks: **ploughing, seeding, watering, and fertilising**. Originally designed as a manual unit, our project successfully converted it into an **electric-drive, IoT-integrated, GPS-guided bot**, optimised for Indian field conditions.

- Electric drivetrain with **differential steering**
- Arduino Mega + GPS + Motor driver integration
- CAD-based reengineering and fabrication of the chassis, clamps, and drive mounts
- Custom laser-cut steel hubs and welded assemblies
- Software-enabled grid pattern navigation for seed sowing

---

##  Functional Capabilities

### Tillage

![Disc Harrow CAD](/Assets/Projects/agribot/till.png)

The front-mounted **disc harrow** breaks up compacted soil and prepares the bed for planting.

### Ploughing

![Plough CAD](/Assets/Projects/agribot/plough.png)

A **central claw plough tool** follows the harrow to aerate and turn over soil. Constructed from heavy metal for high durability.

### Seeding

![Seeder CAD](/Assets/Projects/agribot/seeder.png)

A rotary dibbler-style seeder places seeds at consistent depth and spacing. Accurate furrow creation leads to improved germination rates.

### Irrigation

An integrated **25L irrigation tank** and nozzle array hydrates each seed location after sowing. Operated automatically in tandem with GPS-based path following.
![before drivetrain Prototype](/Assets/Projects/agribot/full-assy.png)

---

##  Engineering Breakdown

### CAD + Mechanical Design

:::row
![Full CAD parts](/Assets/Projects/agribot/parts.jpg)
![Wheel Hub](/Assets/Projects/agribot/wheel-hub.png)
:::

We modeled all structural and mounting components in SolidWorks. Key mechanical decisions included:

- 40:1 geared e-bike motors for high torque output
- Custom B-frame design with 1” and 2.5” MS tubes
- Wheel hubs laser-cut from 4mm steel, press-fitted and welded


![full Prototype](/Assets/Projects/agribot/full-proto.png)
---

##  Powertrain & IoT System

![Electronics Layout](/Assets/Projects/agribot/laser-cut-parts.png)

- **Motors:** 2× 250W MY1016Z2 geared DC motors
- **Motor Drivers:** BTS7960 43A H-Bridge
- **Control:** Arduino Mega + GPS
- **Power Supply:** 720W AC SMPS + Buck converter (24V to 5V)

The Arduino reads GPS data and controls the motor through direction and PWM values. A path generation algorithm written in C handles field coverage.

---

## 🔍 Navigation, Mapping & Autonomy Enhancements

To expand beyond basic GPS path following, AgriBot was designed for future integration with more advanced autonomy and mapping technologies:

### SLAM & Mapping

- The system is SLAM-ready, with provisions for integrating a **depth camera and IMU** stack.
- The project explored using **RGB-D data for point cloud generation** and map building.
- Obstacle detection was performed using a **laptop running SLAM over WAN**, since a Raspberry Pi 4 with sufficient GPU power could not be sourced at the time.

### RTK GPS

- The GPS navigation module is upgradable to support **RTK-GPS**, enabling centimeter-level field resolution and row alignment — vital for precision farming.

![RTK MODULE](https://www.sparkfun.com/media/catalog/product/cache/6481a7e801770ff450b11f3cf63d7638/1/6/16481-SparkFun_GPS-RTK-SMA_Breakout_-_ZED-F9P__Qwiic_-01a.jpg)

### OpenStreetMap Integration

- We explored using **OpenStreetMap overlays** to geofence farm boundaries and define row start/end zones for ploughing and watering tasks.

![OPEN STREET MAPS](https://www.adci.com/hs-fs/hubfs/Blog%20Images/Open%20Source%20Map.jpg?width=1600&name=Open%20Source%20Map.jpg)

### Path Planning Algorithm

- Path planning logic follows a **coverage pattern generation algorithm** similar to the open-source reference:  
  [rodriguesrenato/coverage-path-planning](https://github.com/rodriguesrenato/coverage-path-planning)
- This enabled optimized, non-overlapping row traversal, especially for large rectangular or irregular plots.

### Future Extension Points

- SLAM stack using ORB-SLAM2 + RealSense camera
- Replace WAN-linked laptop with onboard compute via Jetson Nano or similar
- Add safety protocols to pause motion on obstacle detection mid-run

---

##  Pattern Code and Autonomy

```cpp
void forward() {
  digitalWrite(LM1, HIGH);
  digitalWrite(LM2, LOW);
  digitalWrite(RM1, HIGH);
  digitalWrite(RM2, LOW);
  analogWrite(ENA, 150);
  analogWrite(ENB, 150);
}
```

> Code snippets for movement patterns and turns were deployed to the Arduino via Arduino IDE. Pattern generation API was planned for cloud hosting.

---

##  Testing & Field Validation

:::row
![Field Testing 1](/Assets/Projects/agribot/field-testing.png)
![Assembled Bot](/Assets/Projects/agribot/assembled.png)
:::

The bot was tested in both **loose soil and rough terrain**. Steering accuracy and drive torque met expectations. GPS navigation was functional with room for enhancement through improved sensors and calibration.

---

##  Future Scope

1. Add **gyroscope + IMU** for terrain stabilization  
2. Integrate **computer vision cameras** for obstacle detection  
3. Enable **automatic docking** and battery recharge  
4. Modularise tools for quick attachment swapping

---

##  Downloads

- [Project Report PDF](/Assets/Projects/agribot/Agribot.pdf)