# Flight Control Simulator

Built in React + Three.js. It is composed of a control panel for initialization, three-part simulation, and Monte Carlo test runner.

**Control Panel:** Dashboard that allows user to generate flight path by providing an array of [timeToTrigger, 6-DOF delta] pairs.

**Prediction Panel:** Three.js canvas that consumes initialization data from control panel, and displays predicted flight path.
**Simulator Panel:** Three.js canvas that consumes initialization data from control panel, and simulates flight path. The simulation applies predefined noise scenarios to the path projection to simulate unexpected forces that can cause object to deviate from path. The simulation then exposes updated path position coordinates for consumption.
**Feedback Panel:** Three.js canvas that consumes simulation data, and displays actual flight path.

**Possibility Simulator Panel:** Test logic that runs Monte Carlo on the three-part simulation. The test logic applies randomly-generated noise scenarios (within defined range) for thousands of times and graphs the results.
