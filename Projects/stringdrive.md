---
title: StringDrive – String‑Actuated Smart Wheelchair Drive
date: September 2022
---

![Hero Image](/Assets/Projects/wheelchair/cadassembly.png)

**Project:** StringDrive – Patent‑Pending String‑Actuated Wheelchair  
**Institution:** College of Engineering Guindy (CEG)  
**Course:** B.E. Mechanical Engineering Capstone  
**Duration:** Mar – Sep 2022  
**Team Size:** 3 Members  

---

## Project Summary

StringDrive replaces conventional rigid‐shaft transmission with a **high‑strength Dyneema® string** system that delivers drive and steering torque through a lightweight pulley network.  
Key outcomes:

- **30 % weight reduction** compared with chain drives  
- Zero backlash → smoother wheelchair manoeuvring  
- Rapid string replacement (< 2 min) in the field  
- Filed **Indian Provisional Patent No. 202241XXXXX**

---

## Functional Capabilities

### Bidirectional Propulsion

![Propulsion CAD](/Assets/Projects/wheelchair/fullcad.png)

Twin pulley packs transmit torque from hand‑rim to drive wheels with a 1:1.4 ratio for effortless forward & reverse motion.

### Differential Steering

![Steering CAD](/Assets/Projects/wheelchair/freewheel.png)

An independent string loop on each wheel enables **tank‑turns** and tight indoor cornering (turning radius ≤ 0.6 m).

### Quick‑swap String Module

![Module Image](/Assets/Projects/wheelchair/wheelhub%20pulley.png)

Pre‑tensioned cassettes snap into the hub so damaged strings can be changed by the user without tools.

---

## Engineering Breakdown

![Pulley Detail](/Assets/Projects/wheelchair/freebody.png)


- **Material:** 7075‑T6 aluminium pulleys, hardened steel axle  
- Finite‑element analysis → FoS > 3 under 1.5 kN peak load  
- Custom jig ensured 0.2 mm pulley concentricity during TIG welding

---

## Powertrain & Control

![Electronics Layout](/Assets/Projects/wheelchair/methodology.png)

| Module | Spec |
| ------ | ---- |
| Motor assist | 24 V, 250 W hub motors (optional add‑on) |
| Controller | STM32F103 + dual BTS7960 bridges |
| Battery | 24 V × 12 Ah Li‑ion pack |
| Sensors | Quadrature encoders, 6‑DOF IMU |

---

## 🔍 Navigation & Assist Features

- **Hill‑hold**: IMU triggers electromagnetic brake on slopes > 5 °.  
- **Cruise assist**: maintains 3 km h⁻¹ on long corridors.  
- **BLE companion app** for caregiver override and diagnostics.

---

## Pattern Code Snippet

```cpp
void applyTorque(int pwm){
  analogWrite(LEFT_PWM,  pwm);
  analogWrite(RIGHT_PWM, pwm);
}
```

---

## Testing & Validation

:::row
![Field Test](/Assets/Projects/wheelchair/fabrication.png)
![Load Rig](/Assets/Projects/wheelchair/loadanalysysansys.png)
:::

- Endurance: 50 km continuous loop without string failure  
- Load test: survived 2 kN shock load – no pulley deformation  
- User trials with 5 volunteers confirmed **23 % reduction in push force**

---

## Future Scope

1. Integrate **regenerative braking** for downhill energy recovery  
2. Aluminium‑carbon hybrid pulleys to cut weight further  
3. ISO 7176‑8 durability certification  
4. Commercial pilot with rehab centre partners  

---

## Downloads

- [Full Project Report (PDF)](/Assets/Projects/stringdrive/StringDrive_Report.pdf)
