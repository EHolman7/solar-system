"use strict";

const infoVenus = {
		name: 'Venus', 
		year: 'Since Venus is so bright and noticable in the sky, it was probably seen by the first groups of humans ',
		mass: '4.867 x 10^24 kg',
		size: '7,521 miles in diameter',
		sun: '67.69 million miles',
		atmosphere: 'primarily of carbon dioxide ',
		satellites: 'no natural satellites',
		explorers: 'United States Mariner 10, Russian Venera 9',
		url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg',
	};
	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoVenus.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoVenus.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoVenus.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoVenus.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoVenus.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoVenus.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoVenus.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoVenus.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoVenus.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;