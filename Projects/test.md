---
title: High-Precision Bluetooth Scroll Wheel
date: May 2025
---

A compact, ergonomic input device designed for seamless interaction across creative and professional applications.

- Magnetic encoder (AS5600)
- Hollow-shaft BLDC motor
- nRF52840 Bluetooth HID

## Key Features

- Haptic detents with adjustable torque
- Capacitive touchpad on top
- Modular 3D-printed enclosure

:::note
This project is currently under development and will soon be submitted for provisional patent.
:::

## Images

![Exploded View](https://placehold.co/600x400?text=Exploded+View)
![Mounted Assembly](https://placehold.co/600x400?text=Mounted+Assembly)

## Technical Breakdown

:::row
![Schematic](https://placehold.co/400x300?text=Schematic)

The internal circuit uses an AS5600 magnetic encoder positioned on the axis of a custom 3D-printed hollow shaft. Firmware running on the nRF52840 chip reads encoder values at 400 Hz and transmits scroll events via BLE.
:::

:::warning
Ensure shielding is added around the motor driver to prevent Bluetooth signal interference.
:::

:::row
![Firmware Flow](https://placehold.co/400x300?text=Firmware+Flow)

The firmware architecture supports real-time haptic profile switching using BLE characteristics. Users can dynamically toggle between smooth, detented, or spring-loaded feedback modes.
:::

## Downloads

- [Download the project report](../downloads/scrollwheel-report.pdf)

## Related Links

- [GitHub Repository](https://github.com/your-repo)
- [Demo Video](https://youtu.be/example)