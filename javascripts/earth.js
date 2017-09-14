"use strict";

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

const earthDiv = document.getElementbyID('earth');

	const outputEarth = (infoEarth) => {
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
};
module.exports = outputEarth;