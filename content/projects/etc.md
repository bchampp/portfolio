---
title: 'Electronic Throttle Control'
startDate: '2018-10-01'
endDate: '2019-12-09'
type: 'projects'
subtitle: 'An Electronic Throttle Control System'
tags: ['c++', 'formula', 'control system']
exists: true
---

The Electronic Throttle Control (referred to as ETC) system was a long term project I worked on at Queen's Formula. The idea behind the project was to remove the mechanical linkage between the gas pedal and throttle body, and replace it with an electronic control system. 

I spent most of my second year focused on the required safety devices (see <a href="/projects/bspd">**Brake System Plausibility Device**</a>), and my third year on the actual control system discussed here. 

Some of the benefits of an Electronic Control System include: 
- Automatic Throttle Blipping (also referred to as "Rev Matching")
- Faster transient response times
- Fully customizable throttle response

## Control System
A flowchart outlining the control system can be seen below. 

![ETC Control System](/projects/etc/controlsystem.PNG)

In summary, when the driver actuates the gas pedal, the throttle body is actuated in response. If the driver actuates a shift (upshift or downshift), an interrupt service routine is performed to blip or cut the throttle based on different engine parameters (RPM, wheel speeds, traction...etc). 

## Testbench
The next step after designing the control system was to build a testbench to replicate the system. Since the system isn't yet connected to our car, the engine parameters were simulated and fed through a CAN Bus network. 

This is the schematic I designed for the testbench: 

![ETC Testbench Schematic](/projects/etc/testbench_schematic.png)

This is the testbench:

![ETC Control System](/projects/etc/testbench.PNG)

## Custom Controller 
After validating the control system and a baseline of our software on the testbench, the next step was integrating it into a custom printed circuit board (PCB). 
I worked with some other team members on the formula team while designing these boards. Two iterations of the board were made. 

![ETC PCBs](/projects/etc/pcbs.PNG)

## Summary
This project was one of most interesting and challenging things I worked on in my time on the Queen's Formula SAE Team. 
It took over 16 months of design, testing and refinement before being ready to integrate with our car. 
I learned a lot about control systems, circuitry and designing for safety in terms of both hardware and software.