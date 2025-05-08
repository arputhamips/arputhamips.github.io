---
title: SAVIpress – Acupressure Foot Massager
date: May 2025
---


![Hero Render](/Assets/Projects/savipress/herocad.png)

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

The concept of SAVIpress originated from observing student behavior in lounges, libraries, and dorms — settings where individuals were confined to long study sessions with little foot movement.

:::note
Over 300+ observational episodes and 40 interviews revealed a consistent need: *“I fidget a lot during long study hours”*, *“My feet go numb while working”*, and *“I wish I had something to press against under my desk.”*
:::

Inspired by both personal experience and user pain points, our team sought to develop an acupressure-based foot device that could provide tactile relief, improve circulation, and subtly encourage movement — all without disrupting the work environment.

---

## Ideation and Early Prototypes

Our early brainstorming included multiple ideas like:
- **ChefLens** – a kitchen projection assistant
- **TwistTray** – a modular fridge organizer
- ✅ **BalanceAcu / SAVIpress** – a foot massager built on reflexology and mechanical springing

We selected SAVIpress based on its **clear user need**, ease of prototyping, and strong potential for customization.

:::row
![Early Ideation Sketch](https://placehold.co/400x300?text=Concept+Sketch)
The selected idea evolved from a simple rocker board into a fully integrated foot therapy device.
:::

---

## Design Zero → Final Form

We began with cardboard experiments for size and angle, eventually refining the incline to ~20° for ergonomic comfort. Each iteration improved usability and performance:

1. **Design 0** – Cardboard rocker with basic spike texture
2. **Design 1** – MDF base with static incline and foam pad
3. **Final Design** – Triangular 3D-printed base, memory foam + EcoFlex pad, embedded vibration + heat

:::row
![Exploded CAD View](/Assets/Projects/savipress/exploded.png)
Our exploded CAD shows how the silicone pad, foam layer, vibration units, and triangular base interlock.
:::

### Design 0: Exploratory Cardboard Form

The first prototype was an extremely low-fidelity version made entirely out of cardboard. Our goal was to validate the rough size, angle, and potential layout of a foot interaction surface. We wanted to answer basic questions like: *Where would a user rest their foot naturally?* *How far back would their heel go?* *Does the incline angle create ankle strain or relief?*

What we learned was that users preferred a light springiness to the platform and wanted to press and roll their feet in multiple directions. We included rudimentary spikes cut from foam sheets and learned quickly that they needed to deform more for comfort. We also discovered that placing too much height under the table restricted legroom — a valuable insight we carried forward.

### Design 1: MDF Frame and Static Acrylic Top

Building on our cardboard insights, the second iteration used a laser-cut MDF base for structure, and a clear acrylic top to allow visibility into the internal configuration. This version experimented with the initial embedded foam concept. While this version lacked electronics, we designed slots and cavities for where they would eventually go.

The incline was adjusted from 30° to 20°, based on feedback that the original angle put too much pressure on the ankles. The foam layer was inserted without adhesives, so we could test multiple densities. Our early test users responded well to the idea of a rocking or floating pad that had some rebound when pressed.

We also began considering the mechanical interface between pad and frame — how would we lock components without creating visible seams?

### Final Design: Integrated Mechanical + Haptic System

This was the final version that incorporated everything — mechanical structure, haptic components, and ergonomic shaping. We used a PLA triangular base to provide both the angle and hollow cavities for wiring and airflow. The silicone pad was molded using EcoFlex 00-50 into a 3D-printed negative spike mold.

The base’s footprint was kept small enough to fit under a desk, and rubber feet were added to ensure grip on carpet and tile surfaces. We finalized screwless locking tabs that enabled the pad to snap securely into place.

:::row
![Exploded CAD View](https://placehold.co/400x300?text=Exploded+CAD)
Our exploded CAD shows how the silicone pad, foam layer, vibration units, and triangular base interlock.
:::

---

### Design Philosophy and User Experience

From the outset, SAVIpress was centered around a philosophy of *invisible wellness* — a device that supports health and relaxation without disrupting the user’s space or behavior. That meant keeping it low-profile, silent, and intuitive.

We focused on **passive interaction** — users should be able to benefit simply by resting their feet. The silicone pad layout was optimized using reflexology charts so that stimulation would align with pressure zones. The tactile response of each spike was tuned using variable infill patterns in the mold design.

We also emphasized **plug-and-play simplicity**. No apps, no Bluetooth syncing — just tactile relief right out of the box.

This philosophy extended to the sensory experience as well. We wanted the device to feel natural and inviting, not clinical or intrusive. The choice of materials, from the softness of the EcoFlex silicone to the memory foam base, was deliberate to evoke comfort and familiarity. The sound of the device in use was carefully minimized; vibration motors were selected for quiet operation, and the heating element was engineered to avoid any buzzing or humming.

Moreover, we considered the psychological aspect of foot massage. The design aimed to subtly encourage users to shift their weight and engage in micro-movements that promote circulation without conscious effort. This was a key differentiator from traditional footrests or massagers that require active manipulation.

---

### Iterative CAD Evolution

Each design stage was modeled and refined in SolidWorks. We maintained a single master assembly file with configurations for each version, allowing us to track part-level changes over time. Components like the foam support platform and the heating pad chamber went through at least five revisions each.

We built parametric sketches for the shell and pad outlines, allowing rapid adjustment of dimensions based on user feedback. For example, when testers complained about heel overhang, we simply adjusted one variable and regenerated the model.

Our CAD process was tightly coupled with our usability tests. Each Friday, we ran tests — and by Monday, the CAD was updated.

This iterative CAD approach enabled quick exploration of design alternatives without the need to start from scratch. For instance, early in the process, we experimented with different spike geometries: conical, pyramidal, and rounded tips. Each was modeled and simulated to assess stress concentrations and user comfort. The parametric nature of the sketches made it easy to swap these geometries in and out for evaluation.

We also integrated simulation data directly into the CAD environment. ANSYS results on stress and deflection informed subtle geometry changes, such as adding fillets to reduce stress risers or thickening walls where necessary. This synergy between CAD and simulation shortened the design cycle and increased confidence in the final product.

---

### Balancing Manufacturability and Ergonomics

Many design decisions stemmed from the tension between comfort and ease of manufacturing. Round contours were more ergonomic but harder to print without supports. Snap-fits made assembly easier, but created stress concentrations. We used fillets and reinforcement ribs wherever needed, and tested multiple orientations in Cura and PrusaSlicer to reduce print time and warping.

We also ensured that the silicone could be **cast in a single pour** without bubbles by designing escape vents in the mold geometry. That attention to detail allowed us to cast three pads in one night with near-zero failure rate.

Manufacturability considerations influenced not only the base but also the pad design. For example, the spike density and height were optimized to balance tactile effectiveness with ease of demolding. Too tall or closely spaced spikes risked tearing or trapped air pockets during silicone curing.

We also prioritized modularity in assembly. The snap-fit locking tabs were designed to be robust yet allow disassembly for maintenance or replacement of the silicone pad. This modular approach reduces waste and extends product lifespan.

Ergonomically, we studied foot anthropometry data to size the pad appropriately for a range of users. The incline angle was chosen to minimize ankle dorsiflexion while maximizing comfort, a balance achieved through iterative prototyping and user feedback.

Material selection also reflected this balance. PLA was chosen for the base due to its ease of printing and sufficient mechanical properties for the expected loads, while the silicone pad provided the necessary softness and flexibility.

---

### Engineering Practicality and Testing-Driven Design

Every element of the product was stress-tested. Using ANSYS, we confirmed that a person pressing 200 N on the pad wouldn’t deform the base more than 1.2 mm. Fatigue simulations suggested a lifespan exceeding 1 million cycles.

Perhaps more importantly, user feedback shaped small but meaningful tweaks: rounding the spike edges, adding vent holes for heat, tilting the front surface to make the pad easy to clean. None of these appeared in our first sketch — they came from a continuous loop of design → test → reflect → refine.

Thermal management was a key engineering challenge. The heating pad needed to maintain a comfortable temperature without overheating or causing discomfort. We designed airflow vents and incorporated a small rear-mounted fan to dissipate excess heat. Thermal simulations and physical testing confirmed stable temperature profiles during extended use.

Vibration motor placement was optimized to deliver even stimulation across the foot without creating hotspots or dead zones. We experimented with motor types and mounting strategies to minimize noise and maximize effectiveness.

The product was also subjected to real-world durability tests, including drop tests and repeated loading cycles, to ensure it could withstand daily use. The results informed reinforcement of critical areas and improvements in material bonding.

Overall, this testing-driven approach ensured that SAVIpress was not just a concept but a robust, user-validated product ready for scaling and manufacturing. It combined engineering rigor with empathy for the end-user, resulting in a device that is both practical and delightful to use.

---

## Engineering the Experience

Using SolidWorks, I designed the full assembly including mounting ribs, pad cutouts, and airflow vents. In ANSYS, I conducted:

- **Static Load Analysis:** 200 N simulated foot pressure
- **Factor of Safety:** FOS > 2.1 across all PLA sections
- **Fatigue Test:** 10-year life span under 2Hz foot rocking

![ANSYS Stress Analysis](https://placehold.co/800x400?text=ANSYS+Stress+Analysis)  
![Fatigue Life Result](https://placehold.co/800x400?text=Fatigue+Life+Analysis)

:::note
A key innovation was using a **spring-foam hybrid base** to absorb force while preserving foot stability.
:::

---

## Materials That Matter

We tested different silicones for tactile feedback and durability:
- EcoFlex 00-30 was too soft
- EcoFlex 00-50 struck the perfect balance for massaging yet yielding response

| Component | Material       | Why?                             |
|----------|----------------|----------------------------------|
| Pad Base | PLA             | Lightweight, strong, printable   |
| Foam     | Memory Foam     | Cushioned support for rocking    |
| Pad Top  | EcoFlex 00-50   | Durable & hygienic surface       |
| Spikes   | Rigid PLA       | Modularity and pressure transfer |

---

## Electronics & Integration

I worked with the EE team to integrate:
- 2 vibration motors (low + high setting)
- 1 PTC heating pad and rear-mounted air fan
- External switches for control

:::row
![Electronics Layout](https://placehold.co/400x300?text=Electronics+Schematic)
The electronics were embedded into the rear cavity and wired into the foam-pad sandwich layer.
:::

---

## User Testing and Insights

Over 30 students tried the prototype. We conducted:
- **Conjoint analysis** to prioritize features
- **Timed foot comfort tests** with motion sensors
- **Thermal perception ratings** with heating levels

:::warning
One common issue was overheating — solved by optimizing the fan output and switching from constant to pulse-width modulated heat control.
:::

![User Testing Heatmap](https://placehold.co/800x400?text=User+Testing+Heatmap)

---

## Final Prototype Showcase

- Inclined triangular form for under-desk comfort
- Modular silicone pad with embedded spike zones
- Plug-in electronics with toggles for vibration and heat
- Maintenance-friendly screwless base-locking

:::row
![Final Prototype - Front View](https://placehold.co/400x300?text=Final+Front+View)
![Final Prototype - Side View](https://placehold.co/400x300?text=Final+Side+View)
:::

---

## Brand and Future Vision

SAVIpress stands for:  
**Simple – Assisting – Vital – Innovative**

We created a full visual identity, from laser-engraved logos to a packaging prototype and video commercial.

### Next Steps:
- Apply for utility patent
- Migrate to injection-molded base
- Launch a crowdfunding campaign after fatigue testing

![SAVIpress Logo or Video](https://placehold.co/800x300?text=SAVI+Logo+or+Video)

---

## 📥 Downloads

- [Download Final Capstone Report (PDF)](../downloads/savipress-report.pdf)
- [Download Poster (PDF)](../downloads/savipress-poster.pdf)
- [Download FEA Demo Video (MP4)](../downloads/fea-demo.mp4)