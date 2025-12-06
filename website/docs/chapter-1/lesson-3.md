---
title: Types of Physical AI
sidebar_position: 3
---

## Description
This lesson categorizes and explains various types of Physical AI, showcasing the diverse ways AI systems are embodied to interact with the physical world, from industrial robots to autonomous vehicles.

## Objectives
- Understand the primary classifications of Physical AI systems.
- Identify examples of Physical AI across different applications.
- Differentiate between different levels of autonomy in Physical AI.
- Recognize the benefits and challenges associated with each type of Physical AI.

## Key Concepts
- **Industrial Robots:** Automated machines used in manufacturing.
- **Service Robots:** Robots assisting humans in non-industrial settings.
- **Autonomous Mobile Robots (AMRs):** Robots that navigate environments independently.
- **Human-Robot Collaboration (HRC):** Robots working alongside humans in shared workspaces.
- **Swarm Robotics:** Multiple simple robots coordinating to achieve complex tasks.

## Explanation

### 1. Industrial Robots
These are perhaps the most common and oldest form of Physical AI. Industrial robots are typically found in factories and manufacturing plants, performing repetitive, high-precision tasks such as assembly, welding, painting, and packaging. While they operate in the physical world, their "AI" often refers to sophisticated control systems that allow precise, programmable movements and adaptations to varying workpieces. Modern industrial robots are increasingly integrating machine learning for improved adaptability and error detection.

### 2. Service Robots
Service robots are designed to assist humans outside of industrial environments. They can be found in a wide array of sectors:
*   **Professional Service Robots:** Used in hospitals (e.g., surgical assistants, delivery robots), agriculture (e.g., harvesting robots), logistics (e.g., warehouse robots), and exploration (e.g., drones, underwater vehicles).
*   **Personal/Domestic Service Robots:** Found in homes (e.g., robotic vacuum cleaners, lawnmowers), or providing companionship.
These robots often require more advanced perception and navigation capabilities than their industrial counterparts due to the less structured and more dynamic nature of their environments.

### 3. Autonomous Mobile Robots (AMRs)
AMRs are a subset of service robots characterized by their ability to understand their environment and navigate independently. Unlike Automated Guided Vehicles (AGVs) which follow fixed paths (like lines on the floor), AMRs use sensors (cameras, LiDAR) and AI algorithms to build maps, detect obstacles, and plan optimal routes in real-time. Examples include self-driving cars, delivery robots, and autonomous drones used for inspection. The AI in AMRs is critical for complex decision-making, object recognition, and path planning.

### 4. Human-Robot Collaboration (HRC) Robots (Cobots)
Cobots are designed to work interactively and safely with humans in shared workspaces. They differ from traditional industrial robots, which are typically caged off from human workers. Cobots often have built-in safety features, such as force and torque sensors, that allow them to detect human presence and stop or reduce speed to prevent accidents. Their AI enables them to interpret human intentions, learn from demonstrations, and adapt their movements for seamless teamwork.

### 5. Swarm Robotics
This type of Physical AI involves multiple simple robots that work together as a collective system. Inspired by natural phenomena like ant colonies or bird flocks, swarm robots exhibit emergent behavior – complex collective behaviors arising from the interactions of many simple agents following basic rules. The AI in each robot is relatively simple, but the collective intelligence allows the swarm to achieve tasks that a single robot could not, such as environmental mapping, search and rescue, or distributed sensing.

## Example
A hospital uses an AMR (Autonomous Mobile Robot) to deliver medicines to patient rooms. The robot autonomously navigates hallways, avoids people and other moving objects, and takes elevators. Its AI recognizes room numbers and safely delivers the medication, demonstrating its ability to perceive, navigate, and interact in a complex, dynamic environment.

```
# Scenario: Hospital AMR for medicine delivery
1. AMR receives delivery order for "Room 405, Patient A".
2. Onboard AI processes hospital map and current sensor data (LiDAR, cameras).
3. AMR navigates corridors, dynamically rerouting to avoid nurses and visitors.
4. Uses facial recognition (AI) to identify authorized personnel for medicine handover.
5. Safely returns to charging station, optimizing its route for efficiency.
```

## Exercise
1.  Describe a scenario where a traditional industrial robot would be more suitable than a cobot, and explain why.
2.  How does an Autonomous Mobile Robot (AMR) differ fundamentally from an Automated Guided Vehicle (AGV) in terms of intelligence and navigation?
