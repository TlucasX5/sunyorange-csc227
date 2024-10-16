// Railroad Gate Crossing Simulation

// Objects: Train
//          Signal
//          Gate
//          Lights

//Relationships: The train moving alerts the signal control. Signal control turns on, turns on lights and closes gate based on speed of train. 
           
//Evolution: The train is a certain speed from the crossing that turnes on the signal control which then turns on the flashing lights and 
//           changes the gate position. Gate reopens after train passes through.



function positionTrain(train, move) {
    if (move === true) {
        train.distance =+ train.speed;
        train.move = true;
    }
  }

function signalControl(train, signal_control) {
    if (train.distance >= 5) {
        signal_control.status = "off";
    } else {
        signal_control.status = "on";
    }
}

  function gateControl(signal_control, gate, lights) {
    if (signal_control.state === "off") {
        gate.position = "open";
        lights.status = "off";
    } else {
        gate.position = "closed";
        lights.status = "on";
    }
  }


function main() {

    const train = {
        "speed" : 5,
        "distance" : 0,
        "move" : false
    };

    const gate = {
        "position" : "closed" 
    };

    const lights = {
        "status" : "off"
    };

    const signal_control = {
        "state"       : "off",
        "lights"      : lights,
        "train"       : train,
        "gate"        : gate
    };

    positionTrain(train, true);
    console.log(JSON.stringify(train, null, 2));

    signalControl(train, signal_control);
    console.log(JSON.stringify(signal_control, null, 2));
    console.log(JSON.stringify(train, null, 2));

    gateControl(signal_control, gate, lights);
    console.log(JSON.stringify(signal_control, null, 2));
    console.log(JSON.stringify(gate, null, 2));
    console.log(JSON.stringify(lights, null, 2));

    signal_control.status = "off";
}

main();


    