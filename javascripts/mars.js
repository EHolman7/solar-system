"use strict";

const infoMars = {
		name: 'Mars', 
		year: '1659',
		mass: '6.39 x 10^23 kg',
		size: '4,212 miles in diameter',
		sun: '141.6 million miles',
		atmosphere: '95.32% Carbon Dioxide, 2.7% Nitrogen, 1.6% Argon, 0.13% Carbon Monoxide',
		satellites: 'Phobos and Deimos',
		explorers: 'Matt Damon',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg',
	};
	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoMars.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoMars.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoMars.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoMars.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoMars.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoMars.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoMars.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoMars.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoMars.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;