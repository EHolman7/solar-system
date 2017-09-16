"use strict";
console.log('hey');
	

const infoEarth = {
		name: 'Earth', 
		year: '2017 years ago',
		mass: '5.972 x 10^24 kg',
		size: '7,926 miles in diameter',
		sun: '92.96 million miles',
		atmosphere: '78% nitrogen, 21% oxygen, 1% argon',
		satellites: 'Moon',
		explorers: 'People',
		url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg',
	};


	
const outputTo = (domELement) => {
	let newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox">`;
		newPlanet += `<div class="planetName hidden">${infoEarth.name}</div>`;
		newPlanet += `<img class="planetImage" src="${infoEarth.url}">`;
		newPlanet += `<div class="planetYear">Year of discovery: ${infoEarth.year}</div>`;
		newPlanet += `<div class="planetMass">Mass: ${infoEarth.mass}</div>`;
		newPlanet += `<div class="planetSize">Size: ${infoEarth.size}</div>`;
		newPlanet += `<div class="planetSun">Distance from Sun: ${infoEarth.sun}</div>`;
		newPlanet += `<div class="planetAtmosphere">Atmosphere: ${infoEarth.atmosphere}</div>`;
		newPlanet += `<div class="planetSatellites">Satellites: ${infoEarth.satellites}</div>`;
		newPlanet += `<div class="planetExplorers">Explorers: ${infoEarth.explorers}</div>`;
		newPlanet += `</div>`;

	domELement.innerHTML += newPlanet;
};


module.exports = outputTo;