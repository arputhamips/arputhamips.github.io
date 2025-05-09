---
title: Spin Wheel – High-Precision Scroll Controller
date: May 2025
---



> A modular, customizable scroll wheel engineered for precision, comfort, and adaptability across creative and professional workflows.

![Hero Render](/Assets/Projects/spinwheel/final-hero-render.png)

**Project:** Spin Wheel – High-Precision Scroll Controller  
**Course:** MAE 4630/5630 – Advanced Product Design, Cornell University  
**Duration:** Spring 2025  
**Team Size:** 2 students  

## Key Features and Vision

- **Magnetic Encoder (AS5600)** for ultra-smooth, high-resolution scrolling
- **Adjustable Electromagnetic Detents** for customizable tactile feedback
- **Capacitive Trackpad on Top** for gestures and media control
- **Low-Latency BLE + USB HID** connectivity
- **Dual Housing Options**: ABS (injection-molded) and CNC Aluminum

The Spin Wheel bridges the gap between low-cost scroll wheels and professional-grade peripherals. Designed with TRIZ principles, FEA-backed stress testing, and a user-centered approach, it adapts to the needs of designers, editors, gamers, and accessibility users.

---
## Design Evolution

### Design Concept

The inspiration stemmed from dissatisfaction with traditional mechanical scroll wheels — either they lacked smoothness or offered inconsistent tactile feedback. Online reviews and user interviews reinforced this pain point: users wanted **precision, feedback, and customizability**, all in a compact form factor.

We identified three core UX gaps: 1) mechanical detents lacked variability, 2) most scroll wheels were binary in feedback (on/off), and 3) gesture support was non-existent or rigidly defined. Spin Wheel was designed to challenge those constraints.

---

### Version 1 – Bearing-Based Prototype

:::row
![V1 Hero](/Assets/Projects/spinwheel/v1-hero.png)
Our first prototype featured a cylindrical body with a magnetic encoder mounted to a shaft rotating on bearings. Dual capacitive trackpads were positioned on the top and side for gesture control. The scroll interaction was smooth but lacked tactility and force feedback.
:::

Version 1 focused on mechanical feasibility and input recognition. We used a high-resolution AS5600 magnetic encoder fixed to a low-friction rotary shaft supported by a pair of precision bearings. This allowed smooth rotation with minimal play or wobble, which was ideal for raw data capture.

The dual capacitive trackpads—placed on the horizontal top and vertical edge—were evaluated for thumb vs. index finger operation. We ran usability tests with five users and determined that vertical positioning felt more natural for flick gestures but led to more accidental touches. The top-mounted pad was retained for Version 2.

Internally, the encoder data was processed by an nRF52840 microcontroller, which also handled BLE HID reporting. Though functional, the lack of detents or haptic response meant the user had no tactile sense of motion steps or mode changes. This version revealed a clear need for actuation-driven feedback.



#### Exploded View

![Exploded V1](/Assets/Projects/spinwheel/v1-exploded-render.png)

Internal structure included:
- AS5600 magnetic encoder (position sensing)
- Bearing-supported shaft
- Capacitive touch modules
- Custom BLE HID firmware with nRF52840
- No onboard actuation

The design was modular enough to allow shell swaps and electronics access. However, wire routing was cumbersome, and placing the trackpad above the shaft required running wires awkwardly around the encoder. This problem directly informed Version 2's redesign.

---

### Version 2 – BLDC Redesign & Internal Routing


![V2 Sketch](/Assets/Projects/spinwheel/v2-cad:sketch.png)

In Version 2, we transitioned to a hollow-shaft BLDC motor, allowing not only smooth rotation but **programmable force feedback** and **electromagnetic detents**. The trackpad was mounted directly above the shaft, with wires routed cleanly through the motor’s center channel.


This version marked a major engineering leap. We replaced the passive bearing shaft with a **hollow-shaft BLDC motor**, unlocking dynamic resistance and haptic effects. The encoder was repositioned beneath the motor to preserve tracking resolution while enabling actuation above it.

The hollow core of the motor enabled elegant cable management — wires for the capacitive trackpad passed directly through the shaft, minimizing clutter and allowing a cleaner, more compact layout. This dramatically improved serviceability and reliability.

Haptics were implemented via PWM torque pulses and variable duty cycles to simulate detents, spring-back modes, and even ratchet-like resistance. The BLDC also enabled on-the-fly mode switching, controlled via BLE commands or trackpad gestures.

To accommodate the motor and support structure, we widened the scroll surface slightly and added subtle curves to the housing for better thumb ergonomics. The user experience was significantly improved, especially in tasks like video editing and timeline scrubbing where tactile feedback enhanced precision.

Version 2’s modularity allowed for rapid iteration of firmware and mechanical haptic tuning, preparing the foundation for a commercial-grade prototype.

---

##  Engineering & Analysis

### Software Architecture

![Software Flow](/Assets/Projects/spinwheel/software-flow.png)

The firmware controls:
- Scrolling vs. gesture mode
- Haptic torque profile
- BLE HID reporting
- Trackpad state switching

---

### Schematic

![Circuit Schematic](/Assets/Projects/spinwheel/schematic.png)

- BLDC haptics driver
- AS5600 I2C interface
- Battery management circuit
- Capacitive sense and filtering logic

---

## Product Manufacturing & Embodiment

- **Injection-molded ABS:** lightweight, mass production
- **CNC aluminum housing:** premium feel, higher detent force, better thermal dissipation
- Modular architecture for upgradeability and repair

![V1 Render 2](/Assets/Projects/spinwheel/hero-render.jpg)

---

## 📈 Market, Pricing & Diffusion

- **ABS version:** $50 MSRP, $25 cost, NPV = $3.03M
- **Aluminum version:** $135 MSRP, $55 cost, NPV = $2.7M
- Projected sales: 1.2 million units

See poster data and PDS report for:
- CBC Survey + Utility Scores
- Bass Model Forecast
- Tooling and COGS breakdowns

---

## TRIZ + Design Tradeoffs

- **Precision vs. Speed:** Solved using firmware-controlled dynamic detents
- **Signal Interference:** Solved by shielding magnetic + capacitive zones
- **Durability vs. Adaptability:** Solved by modularity + contactless sensing
- **Touch + Scroll Integration:** Solved with dual-zone input surface

---

## 📂 Source Code

```cpp
#include <BLEHIDMouse.h>
BLEHIDMouse bleMouse;

void setup() {
  Serial.begin(115200);
  bleMouse.begin();
}

void loop() {
  int scrollDelta = getEncoderDelta();
  bleMouse.scroll(scrollDelta);
  delay(5);
}
```

> Full code: [Download `blehid_mouse.ino`](/Assets/Projects/spinwheel/blehid_mouse.ino)

---

## Downloads
- [Download Poster](/Assets/Projects/spinwheel/Group%2015-SpinWheel-poster.pdf)
- [PDS Report PDF](/Assets/Projects/spinwheel/PDS%20v1_Group%2015_SpinWheel.pdf)