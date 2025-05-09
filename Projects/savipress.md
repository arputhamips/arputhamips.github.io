---
title: SAVIpress – Acupressure Foot Massager
date: May 2025
---


![Hero Render](/Assets/Projects/savipress/render_hero.jpg)

**Project:** SAVIpress – Intelligent Acupressure Footrest  
**Course:** SYSEN 5900 – M.Eng Consumer Product Design, Cornell University  
**Duration:** Fall 2024 – Spring 2025  
**Team Size:** 10 students (Mechanical + Systems Engineering)

### 🔧 My Role & Contributions
- Led mechanical system design, including CAD modeling and all FEA simulations using ANSYS
- Generated static and dynamic renderings in SolidWorks and KeyShot
- Developed the triangular inclined structure and spike layout for ergonomic and reflexology alignment
- Conducted stress, deformation, and fatigue analyses
- Coordinated electromechanical integration (vibration motors, heating pad)
- Participated in usability testing, branding, and final report/video production

---

## Origins: Empathy and Research

SAVIpress was inspired by observing students in lounges, libraries, and dorms—places where long study sessions limit foot movement.

Over 300+ observations and 40 interviews revealed common needs: *“I fidget a lot during long study hours.”* *“My feet go numb while working.”* *“I wish I had something to press against under my desk.”*

Our team aimed to create an acupressure foot device that provides tactile relief, improves circulation, and encourages subtle movement without disrupting focus.

---

## Ideation and Early Prototypes

We brainstormed multiple ideas:
- **ChefLens** – kitchen projection assistant
- **TwistTray** – modular fridge organizer
- ✅ **BalanceAcu / SAVIpress** – foot massager based on reflexology and mechanical springing

SAVIpress was chosen for its clear user need, ease of prototyping, and customization potential.

:::row
![Initial Sketch](/Assets/Projects/savipress/Initial%20Sketch.jpg)

The idea evolved from a simple rocker board into a fully integrated foot therapy device.
:::

---

## Design Zero → Final Form

We started with cardboard experiments to validate size and angle. We refined the incline to ~20° for ergonomic comfort. Each iteration enhanced usability and performance:

### Design 0: Cardboard (Prototype 0)

![Prototype 0 img.jpg](/Assets/Projects/savipress/Prototype%200%20img.jpg)

The first prototype was a low-fidelity cardboard model to test size, angle, and foot placement.

Users preferred a light springiness and multi-directional foot rolling. Rudimentary foam spikes needed more deformability for comfort. Excessive height under the desk restricted legroom—a key insight.

### Design 1: Acrylic & MDF (Prototype 1)

![PROTOTYPE 1 IMG.jpg](/Assets/Projects/savipress/PROTOTYPE%201%20IMG.jpg)

The second iteration used a laser-cut clear acrylic construction to reveal internal structure. We tested foam densities without adhesives. Foam was used here just as a dampener and the motion of the foot rest was actually reliant on a central hinge, which had evolved from the ball and socket join that we had initially envisioned.

### Design 2: MDF Concept
![Prototype 2.jpg](/Assets/Projects/savipress/Prototype%202.jpg)

The MDF concept stage involved detailed documentation and refinement of design parameters and user feedback integration, 

### Final Design: 3D Printed Functional Prototype
![final prototype.jpg](/Assets/Projects/savipress/Final%20Prototype.JPG)

The incline was lowered from 30° to 20° to reduce ankle pressure. Early users liked the rocking pad’s rebound. We also explored mechanical interfaces for seamless assembly.

The final version combined mechanical structure, haptic components, and ergonomic shaping.

A PLA triangular base provided angle and hollow cavities for wiring and airflow. The silicone pad was molded from EcoFlex 00-50 using a 3D-printed negative spike mold.

The footprint fit under desks, with rubber feet for grip. Screwless locking tabs allowed the pad to snap securely in place.

:::row
![Exploded CAD View](/Assets/Projects/savipress/exploded.png)
Our exploded CAD shows how the silicone pad, foam layer, vibration units, and triangular base interlock.
:::

---

### Design Philosophy and User Experience

SAVIpress centers on *invisible wellness*: supporting health and relaxation without disrupting users.

We prioritized **passive interaction**—benefit from simply resting feet. The silicone pad layout aligns with reflexology pressure zones. Spike tactile response was tuned via variable infill patterns.

**Plug-and-play simplicity** was key—no apps or Bluetooth, just tactile relief out of the box.

Materials evoke comfort: soft EcoFlex silicone, memory foam base. The device is quiet; vibration motors and heating elements minimize noise.

Psychologically, the design encourages subtle weight shifts and micro-movements to promote circulation without effort. This differentiates it from traditional footrests or massagers requiring active use.


![Innovative spike pads](/Assets/Projects/savipress/silicone_pad_render_macro.png)

---

### Iterative CAD Evolution

We modeled each design stage in SolidWorks, maintaining a master assembly with multiple configurations.

Components like foam support and heating pad chambers underwent five+ revisions.

Parametric sketches allowed rapid dimension adjustments based on feedback, e.g., fixing heel overhang with a single variable change.

Our CAD updates followed weekly usability tests, enabling fast design cycles.

We explored spike geometries—conical, pyramidal, rounded—and simulated stress and comfort. Fillets and wall thickness adjustments reduced stress risers per ANSYS data.

This CAD-simulation synergy shortened design time and boosted confidence.

---

### Balancing Manufacturability and Ergonomics

Comfort and manufacturability often conflicted. Rounded contours improved ergonomics but complicated printing.

Snap-fits eased assembly but introduced stress points. We used fillets and ribs for reinforcement and optimized print orientation to reduce warping.

Silicone casting was designed for a single pour without bubbles by adding escape vents. This allowed casting three pads overnight with near-zero failures.



![Silicone image](/Assets/Projects/savipress/Silicone%20Img.JPG)
![Silicone render](/Assets/Projects/savipress/silicone_pad_render.jpg)

Spike density and height balanced tactile effect and demolding ease. Too tall or dense spikes risked tearing or trapped air.

Modular snap-fit locking tabs enable disassembly for maintenance or pad replacement, reducing waste and extending lifespan.

Foot anthropometry data guided pad sizing. The 20° incline minimized ankle dorsiflexion while maximizing comfort.

PLA was chosen for the base due to printability and mechanical strength; silicone provided softness and flexibility.


![3d printed casing](/Assets/Projects/savipress/3d%20print.jpg)

---

### Engineering Practicality and Testing-Driven Design

We stress-tested every element. ANSYS showed 200 N foot pressure deformed the base less than 1.2 mm. Fatigue simulations projected over 1 million cycles lifespan.

User feedback drove refinements: rounded spike edges, vent holes for heat, angled front surface for easy cleaning.

Thermal management included airflow vents and a rear fan to maintain comfortable temperature without buzzing.

Vibration motors were placed to deliver even stimulation without hotspots or noise.

Durability tests (drop, repeated loading) informed reinforcement and material bonding improvements.

This testing-driven process ensured SAVIpress is a robust, user-validated product ready for scaling.

---

## Engineering the Experience

Using SolidWorks, I designed the full assembly with mounting ribs, pad cutouts, and airflow vents.

In ANSYS, I ran:

- **Static Load Analysis:** 200 N simulated foot pressure  
- **Factor of Safety:** FOS > 2.1 across PLA sections  
- **Fatigue Test:** 10-year lifespan at 2Hz foot rocking  

![Von Mises Stress](/Assets/Projects/savipress/Vonmisces.png)  
![Fatigue Simulation](/Assets/Projects/savipress/URES.png)

:::note
A key innovation was using a **spring-foam hybrid base** to absorb force while preserving foot stability.
:::

---

## Materials That Matter

We tested silicones for tactile feedback and durability:

- EcoFlex 00-30 was too soft  
- EcoFlex 00-50 balanced massaging effect and yielding response  

| Component | Material             | Purpose                         |
|-----------|----------------------|-------------------------------- |
| Pad Base  | PLA                  | Lightweight, strong, printable |
| Foam      | Memory Foam          | Cushioned support for rocking  |
| Pad Top   | EcoFlex 00-50        | Durable & hygienic surface     |
| Spikes    | Rigid PLA            | Modular pressure transfer      |


---

## Electronics & Integration

I collaborated with the EE team to integrate:

- 2 vibration motors (low + high settings)  
- 1 PTC heating pad and rear-mounted fan  
- External switches for control  

:::row
![Electronics Layout](/Assets/Projects/savipress/electronics.jpg)
Electronics embedded in rear cavity and wired into foam-pad sandwich layer.
:::

---

## User Testing and Insights

Over 30 students tested the prototype. We conducted:

- **Conjoint analysis** to prioritize features  
- **Timed foot comfort tests** with motion sensors  
- **Thermal perception ratings** with heating levels  

:::warning
Overheating was a common issue—resolved by optimizing fan output and switching to pulse-width modulated heat control.
:::

---

## Final Prototype Showcase

- Inclined triangular form fits under desks comfortably  
- Modular silicone pad with embedded spike zones  
- Plug-in electronics with toggles for vibration and heat  
- Maintenance-friendly screwless base locking  


![Side Profile](/Assets/Projects/savipress/profile.png)
![hero shot](/Assets/Projects/savipress/herocad.png)
![hero alternate](/Assets/Projects/savipress/perspective%202.png)

---

## Brand and Future Vision

SAVIpress stands for:  
**Simple – Assisting – Vital – Innovative**

We developed a full visual identity, from laser-engraved logos to packaging prototypes and video commercials.

### Next Steps:
- Apply for utility patent  
- Migrate to injection-molded base  
- Launch crowdfunding after fatigue testing  

![SAVI Logo](/Assets/Projects/savipress/SAVI%20LOGO.png)

---

## 📥 Downloads

- [Download Final Capstone Report (PDF)](../downloads/savipress-report.pdf)  
- [Download Poster (PDF)](../downloads/savipress-poster.pdf)  
- [Download FEA Demo Video (MP4)](../downloads/fea-demo.mp4)