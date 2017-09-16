"use strict";

console.log("here");

const myPlanets = require('./planetGenerator');
console.log(myPlanets);

let planetsDiv = document.getElementById("solar-system");

myPlanets.mercury(planetsDiv);
myPlanets.venus(planetsDiv);
myPlanets.earth(planetsDiv);
myPlanets.mars(planetsDiv);
myPlanets.jupiter(planetsDiv);
myPlanets.saturn(planetsDiv);
myPlanets.uranus(planetsDiv);
myPlanets.neptune(planetsDiv);
//console.log (myPlanets.earth(planetsDiv));
