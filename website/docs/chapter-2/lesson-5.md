---
title: Notable Humanoid Robots in History
sidebar_position: 5
---

## Description
This lesson provides a closer look at some of the most iconic and influential humanoid robots throughout history, examining their contributions, design philosophies, and the legacy they left in advancing the field.

## Objectives
- Identify specific humanoid robots that have made significant historical contributions.
- Understand the unique features and capabilities of each notable robot.
- Appreciate the context and impact of these robots on research and public perception.
- Recognize the diversity of approaches in humanoid robot development.

## Key Concepts
- **Wabot-1/2:** Pioneers in full-scale humanoid research.
- **ASIMO:** Honda's advanced mobility and interaction robot.
- **Atlas:** Boston Dynamics' highly dynamic and agile robot.
- **Robonaut:** NASA's dexterous space humanoid.
- **Sophia:** Hanson Robotics' social robot with human-like expressions.
- **Pepper:** SoftBank Robotics' empathetic companion robot.

## Explanation

This lesson builds upon the previous discussion of milestones by focusing on specific examples of humanoid robots that have left an indelible mark on the field. Each of these robots represents a unique approach or a significant leap in technology and capability.

### 1. Wabot Series (Waseda University, Japan - 1970s-1980s)
*   **Wabot-1 (1973):** Often considered the world's first full-scale humanoid robot. Its capabilities included walking, grasping objects with tactile sensors, and limited communication in Japanese. Wabot-1 demonstrated the feasibility of integrating various complex subsystems (locomotion, vision, manipulation, communication) into a single humanoid platform.
*   **Wabot-2 (1984):** An enhanced version primarily known for its ability to read musical scores, play an electronic organ with ten fingers, and accompany a human. This showcased early efforts in fine motor control and human-robot collaboration in artistic performance.

### 2. ASIMO (Honda, Japan - 2000 onwards)
*   **Advanced Step in Innovative Mobility:** ASIMO became a global icon for humanoid robotics. Its development focused on achieving human-like mobility, including stable walking, running, and navigating complex environments.
*   **Key Contributions:** ASIMO's ability to run, climb stairs, and interact with humans (e.g., carrying trays, understanding gestures, recognizing faces) demonstrated significant progress in dynamic balance control, real-time perception, and human-robot interaction. It was designed with the vision of assisting people in daily life.

### 3. Atlas (Boston Dynamics, USA - 2013 onwards)
*   **Dynamic Agility and Locomotion:** Atlas is renowned for its incredible athleticism and ability to perform complex, dynamic maneuvers like running, jumping, parkour, and even backflips. Its hydraulic actuation system provides immense power and flexibility.
*   **Key Contributions:** Atlas pushes the boundaries of whole-body control, dynamic balancing, and robust operation in unstructured environments. It's a testament to advancements in force control, perception, and advanced planning algorithms that allow it to react to unexpected disturbances.

### 4. Robonaut (NASA, USA - 1997 onwards)
*   **Dexterous Space Operations:** Robonaut is a series of dexterous humanoid robots developed by NASA primarily for assisting astronauts in space or performing tasks too dangerous for humans.
*   **Key Contributions:** Robonaut 2 (R2) became the first humanoid robot in space, launched to the International Space Station (ISS) in 2011. Its highly articulated arms and hands (with 42 degrees of freedom) allowed it to use standard astronaut tools, showcasing advanced manipulation capabilities in microgravity.

### 5. Sophia (Hanson Robotics, Hong Kong - 2016 onwards)
*   **Social Robotics and Expressiveness:** Sophia is a social humanoid robot designed to look and behave like a human, with the ability to display human-like facial expressions and engage in natural language conversations.
*   **Key Contributions:** While its intelligence is often debated and largely relies on pre-scripted responses and advanced natural language processing, Sophia represents significant strides in synthetic skin, expressive facial mechanics, and public engagement with social robots. It highlights the importance of appearance and interaction in fostering human connection with robots.

### 6. Pepper (SoftBank Robotics, France/Japan - 2014 onwards)
*   **Empathetic Companion Robot:** Pepper is a humanoid robot designed to interact with humans using natural communication, analyze emotions, and act as a companion or assistant.
*   **Key Contributions:** Pepper excels in human-robot interaction, particularly in understanding human emotions through voice tone and facial expressions, and responding empathetically. It has been deployed in various service roles, including retail, healthcare, and education, demonstrating commercial viability for social robots.

These robots, among many others, illustrate the continuous journey of humanoid robotics—a journey of persistent innovation, overcoming complex engineering and AI challenges, and slowly bringing the vision of human-like machines into reality.

## Example
ASIMO's ability to smoothly transition from walking to running and back, or to go up and down stairs, showcased its advanced real-time balance control. This meant its internal computer was constantly predicting its center of gravity and adjusting its joint angles to prevent falls, making its movements fluid and natural-looking.

```
# Conceptual ASIMO's dynamic motion
robot_state = { "position": [x,y,z], "orientation": [roll,pitch,yaw], "joint_angles": {...} }
goal_motion = "climb_stairs"

while not robot.reached_goal(goal_motion):
    # Sense current body state and environment
    sensor_data = robot.read_all_sensors()

    # AI calculates next desired joint positions for stable motion
    desired_joint_positions = robot.motion_planner.plan_step(goal_motion, sensor_data, robot_state)

    # Robot executes motion
    robot.actuate_joints(desired_joint_positions)

    # Continuous feedback and adjustment for balance
    if robot.is_losing_balance(sensor_data):
        robot.apply_balance_recovery()
```

## Exercise
1.  Choose one of the "Notable Humanoid Robots" from this lesson (excluding ASIMO) and describe its primary contribution to the field of robotics.
2.  Imagine a future scenario where Robonaut and Pepper work together. What kind of task would they be well-suited for, and how would their individual strengths complement each other?
