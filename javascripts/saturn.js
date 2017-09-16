"use strict";

const infoSaturn = {
		name: 'Saturn', 
		year: '',
		mass: '',
		size: '',
		sun: '',
		atmosphere: '',
		satellites: '',
		explorers: '',
		url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg',
	};
	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoSaturn.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoSaturn.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoSaturn.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoSaturn.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoSaturn.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoSaturn.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoSaturn.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoSaturn.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoSaturn.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;