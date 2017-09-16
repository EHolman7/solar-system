"use strict";

const infoJupiter = {
		name: 'Jupiter', 
		year: '',
		mass: '',
		size: '',
		sun: '',
		atmosphere: '',
		satellites: '',
		explorers: '',
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg",
	};
	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoJupiter.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoJupiter.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoJupiter.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoJupiter.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoJupiter.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoJupiter.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoJupiter.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoJupiter.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoJupiter.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;