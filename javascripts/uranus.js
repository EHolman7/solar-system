"use strict";

const infoUranus = {
		name: 'Uranus', 
		year: '',
		mass: '',
		size: '',
		sun: '',
		atmosphere: '',
		satellites: '',
		explorers: '',
		url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
	};
	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoUranus.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoUranus.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoUranus.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoUranus.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoUranus.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoUranus.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoUranus.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoUranus.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoUranus.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;