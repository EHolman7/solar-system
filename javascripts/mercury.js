"use strict";

const infoMercury = {
		name: 'Mercury', 
		year: 'one of the earliest records of Mercury comes from the Sumerians around 3,000 BC.',
		mass: '3.285 x 10^23 kg',
		size: '3,031 miles in diameter',
		sun: '35.98 million miles',
		atmosphere: 'contains small amounts of hydrogen, helium, and oxygen. It also has even tinier amounts of sodium, potassium, calcium, and magnesium ',
		satellites: 'no natural satellites',
		explorers: 'United States Mariner 10',
		url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg',
	};

	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoMercury.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoMercury.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoMercury.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoMercury.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoMercury.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoMercury.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoMercury.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoMercury.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoMercury.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;