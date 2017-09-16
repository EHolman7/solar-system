(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

console.log("here");

const myPlanets = require('./planetGenerator');
console.log(myPlanets);

let planetsDiv = document.getElementById("solar-system");

myPlanets.mercury(planetsDiv);
myPlanets.venus(planetsDiv);
myPlanets.earth(planetsDiv);
myPlanets.mars(planetsDiv);
myPlanets.jupiter(planetsDiv);
myPlanets.saturn(planetsDiv);
myPlanets.uranus(planetsDiv);
myPlanets.neptune(planetsDiv);
//console.log (myPlanets.earth(planetsDiv));

},{"./planetGenerator":7}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
"use strict";

const mercury = require('./mercury');
const venus = require('./venus');
const earth = require('./earth');
const mars = require('./mars');
const jupiter = require('./jupiter');
const saturn = require('./saturn');
const uranus = require('./uranus');
const neptune = require('./neptune');

const planetGenerator = {
	mercury, venus, earth, mars, jupiter, saturn, uranus, neptune
};

module.exports = planetGenerator;
},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./saturn":8,"./uranus":9,"./venus":10}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}]},{},[3]);
