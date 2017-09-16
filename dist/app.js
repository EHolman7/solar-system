(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log('hey');
	

const earthDiv = document.getElementById('earth');

	let outputEarth = () => {
		const infoEarth = [{
		name: 'Earth', 
		year: '2017 years ago',
		mass: '5.972 x 10^24 kg',
		size: '7,926 miles in diameter',
		sun: '92.96 million miles',
		atmosphere: '78% nitrogen, 21% oxygen, 1% argon',
		satellites: 'Moon',
		explorers: 'People',
		image: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg',
	}];
		console.log("infoEarth", infoEarth);
	let planetString = '';
	for (var i=0; i< infoEarth.length; i++){
		var newPlanet = '';
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`;
		newPlanet += `<div class="planetName hidden">${infoEarth[i].name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoEarth[i].url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoEarth[i].year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoEarth[i].mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoEarth[i].size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoEarth[i].sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoEarth[i].atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoEarth[i].satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoEarth[i].explorers}</div>`;
		newPlanet += `</div>`;
		planetString += newPlanet;
	}
	console.log(planetString);
	writeToDom(planetString);

};
function writeToDom(strang){
	earthDiv.innerHTML = strang;
}
	//return "";

module.exports = outputEarth;
},{}],2:[function(require,module,exports){
"use strict";

console.log("here");

const PlanetGenerator = require('./planetGenerator');
console.log(PlanetGenerator);

document.getElementById("earth").innerHTML = PlanetGenerator.earth();
},{"./planetGenerator":3}],3:[function(require,module,exports){
"use strict";

const earth = require('./earth');
console.log(earth);

const planetGenerator = {
	earth
};

module.exports = planetGenerator;
},{"./earth":1}]},{},[2]);
