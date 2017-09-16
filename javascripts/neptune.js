"use strict";

const infoNeptune = {
		name: 'Neptune', 
		year: '',
		mass: '',
		size: '',
		sun: '',
		atmosphere: '',
		satellites: '',
		explorers: '',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg',
	};
	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoNeptune.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoNeptune.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoNeptune.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoNeptune.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoNeptune.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoNeptune.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoNeptune.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoNeptune.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoNeptune.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;