"use strict";

console.log("here");

const PlanetGenerator = require('./planetGenerator');
console.log(PlanetGenerator);

document.getElementById("earth").innerHTML = PlanetGenerator.earth();