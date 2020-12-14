---
title: 'Brake System Plausibility Device'
startDate: '2019-01-10'
endDate: '2020-03-15'
type: 'projects'
subtitle: 'A hardware-only automotive safety device'
tags: ['formula', 'control system', 'digital logic']
exists: true
---

The Brake System Plausibility Device (referred to as the BSPD) was another long term project I worked on with Queen's Formula as part of the <a href="projects/etc">**Electronic Throttle Control System**</a>.

What is the BSPD?
> The Brake System Plausibility device is a standalone, non-programmable safety device which integrates with the Electronic Throttle Control system to monitor and fault in unsafe driving conditions. It's purpose is primarily to detect faults in the wiring, by ensuring that all sensors are working within a normal operating range. Moreover, the BSPD will fault when both the Throttle and Brakes are active (> 10%) for more than 1 second. The only way to reset the system once the BSPD faults is to power cycle the car. 

In summary, the BSPD monitors the throttle and brake signals, and kills power to the car in unsafe conditions. 

A flowchart outlining the control system can be seen below. 

![Flowchart](/projects/bspd/flowchart.png)

*Note* - APPS refers to the Accelerator Pedal Position Sensor (Gas Pedal), BSE is the Brake System and TPS is the Throttle Position Sensor.  

In summary, if any of the sensor values aren't plausible - this likely indicates damaged wiring or mechanical components. If the throttle is open while the driver is braking *for more than 1 second* then this would indicate the throttle is broken. In both cases, power to the car would be killed. 

The first step in this project was to develop the circuitry, and use online simulation tools to validate it. 

The final schematic is below. 

![Schematic](/projects/bspd/schematic.png)
Similarly to the Electronic Throttle Control, a testbench was created to validate all the circuitry. 

![Testbench](/projects/bspd/testbench.jpg)

Next, a custom PCB was built and tested. 3 iterations of the board were built and tested. 

This is the final version of the board.

![PCB](/projects/bspd/pcb.png)

The last step with the project is to do final integration testing on the car. This means replicating these unsafe conditions and ensuring that the controller responds properly. Unfortunately, due to the COVID-19 pandemic, this final testing has not been completed yet. I look forward to completing this project on our car in the 2021-2022 school year. 