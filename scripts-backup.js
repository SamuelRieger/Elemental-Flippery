let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var flips = 0;
var matches = 0;
//https://interestingengineering.com/real-life-use-every-element-periodic-table
//https://images-of-elements.com/all-elements.php
var elementList = [
	[
		[1, "H", "Hydrogen", "Hydrogen is an explosive gas and also the lightest element.", "Hydrogen makes up about 90% of atoms in the entire universe. The chemical is used heavily as both a gas and liquid fuel. Hydrogen was used as a main fuel for the space shuttle program by NASA as well as currently being used heavily by the petroleum and manufacturing industries."],
		[2, "He", "Helium", "Helium is an inert gas and the second-lightest element.", "Helium gas is commonly known to be lighter than air, which leads to its use in weather and party balloons. It is also used as an inert shield for arc welding and to pressurize liquid fuel tanks in rockets. Due to its wide recreational usage, natural sources of Helium are at risk for being completely depleted in the next decade, sparking fears for the scientific community."],
		[3, "Li", "Lithium", "Lithium is the lightest metal and is soft and reactive.", "Lithium is known most commonly to be used in batteries. It is also used in aluminum alloys, to make cookware more durable, and most surprisingly, as a mood stabilizer for bipolar disorder."],
		[4, "Be", "Beryllium", "Beryllium is a lightweight metal.", "This element is most commonly used as an alloying agent for copper. When combined, the resultant metal, beryllium copper, is used for springs and a variety of electrical applications. Due to its lightweight metal properties, it is used structurally in the aerospace industries."],
		[5, "B", "Boron", "Boron is a hard black solid.", "Boron is used in pyrotechnics. When burned, it gives off a green color in the flame. More common uses are in boric acid and borax. You can find boron in antiseptics, washing chemicals, ceramic glazes, and eye drops."],
		[6, "C", "Carbon", "Carbon can form different lattices like hard diamond or soft graphite.", "Carbon is the basis for the world's natural organic fuels such as natural gas, coal, and oil. Graphite, a strong molecular form of carbon is used for pencils, crucibles, and electrodes. Pure diamond is also entirely made out of carbon atoms. Another common application of the element is carbon nanotubes. Throughout all of its forms, Carbon's ability to form incredibly strong lattice elemental structures make it perfect for structural applications."],
		[7, "N", "Nitrogen", "Nitrogen is a colorless gas.", "78 percent of Earth's entire atmosphere is made up of nitrogen. The element is significant to the chemical industry as it is a key nutrient in fertilizers and a key component in nitric acid, nylon, and explosive materials. The Haber process is a famous method of reacting nitrogen with hydrogen to create ammonia."],
		[8, "O", "Oxygen", "Oxygen is a colorless gas.", "Oxygen is the most important element to human's survival. Pure oxygen is used to treat breathing problems and make spacecraft livable. Oxygen in industry is mainly used in the manufacturing of steel and other metal alloys."],
		[9, "F", "Fluorine", "Fluorine is a yellowish poison gas and the most reactive element.", "Fluorine is a common additive to drinking water and is used as a cleaning agent in toothpaste. In pop culture, hydrofluoric acid was used as a dissolving agent in the popular TV show \"Breaking Bad.\" The chemical can dissolve glass and is used mainly as an etching compound."],
		[10, "Ne", "Neon", "Neon is an inert gas.", "Neon is the fourth most abundant element in the entire universe. By far the most prominent use of the element is used in advertising signs. When enticed with electricity, the glass commonly glows, leading to its use in the respective sign industry as well as high-voltage indicators and lasers."],
	],
	[
		[11, "Na", "Sodium", "Sodium is a very reactive soft metal.", "Sodium is used in streetlights to produce yellow light as well as being a component in many compounds like table salt, soda ash, borax, and baking soda."],
		[12, "Mg", "Magnesium", "Magnesium is a lightweight metal.", "Magnesium finds many of its uses in medicine as Epsom salts, milk of magnesia, chloride, and citrate. Magnesium is also essential to both animal and plant life."],
		[13, "Al", "Aluminum", "Aluminum is a lightweight non-corroding metal.", "Aluminum is a soft and malleable metal that has uses in cans and fouls, utensils, airplane and automotive parts, and other structural applications."],
		[14, "Si", "Silicon", "Silicon is a hard metalloid.", "Silicon is used extensively in the semiconductor industry in solid-state electronics. For such applications, the silicon has to be doped with boron, gallium, phosphorus or arsenic."],
		[15, "P", "Phosphorus", "Phosphorus is a glowing white waxy solid.", "Phosphorus is the main nutrient for organic life through phosphate compounds. It is used in fertilizers to uphold the biological phosphorus cycle. It is also used in explosive and pyrotechnics."],
		[16, "S", "Sulfur", "Sulfur is a brittle yellow solid.", "Sulfur is used in gunpowder and other pyrotechnics, rubber manufacturing, and as an insecticide, fungicide, and fumigant. It can also be used to treat skin diseases, however, its prime use is in compound separation."],
		[17, "Cl", "Chlorine", "Chlorine is a greenish poison gas.", "Chlorine is used in water treatment and as an antiseptic. During the production of papers, plastics, solvents, and textiles, large amounts of chlorine are also used."],
		[18, "Ar", "Argon", "Argon is an inert gas.", "Argon is used in incandescent and fluorescent bulbs as a protective layer around the filament to keep oxygen from corroding it. It is also used as a protective shield in arc welding and semiconductor crystals."],
		[19, "K", "Potassium", "Potassium is a soft metal and is reactive.", "Potassium is mainly used in compounds. It is combined with chlorine to produce potassium chloride which is used in fertilizers. Potassium hydroxide is also used in soaps and cleaners."],
		[20, "Ca", "Calcium", "Calcium is a soft metal.", "Calcium is used to prepare thorium and uranium as a reducing agent. It is also used as an alloying agent in aluminum, copper, lead, and magnesium."],
	],
	[
		[21, "Sc", "Scandium", "Scandium is a soft lightweight metal.", "Used heavily in mercury vapor lamps, Scandium is a key element in stadium lights. Its radioactive isotope is also used as a tracing agent."],
		[22, "Ti", "Titanium", "Titanium is the strongest lightweight metal and is heat-resistant.", "Titanium is an incredibly strong metal used in alloys with aluminum, iron, and other metals. This strong metal is used in the aerospace industry as well as engines. It can maintain its strength in thermal extremes."],
		[23, "V", "Vanadium", "Vanadium is a hard metal.", "This element is used in jet engines and aircraft components. All of its uses require it to be combined with another metal or element, such as Vanadium-gallium tape used in magnets."],
		[24, "Cr", "Chromium", "Chromium is a hard shiny metal.", "Chromium is used in stainless steel as well as in the chrome plating process. Various chromium compounds are known for their vivid colors."],
		[25, "Mn", "Manganese", "Manganese is a hard metal.", "Manganese dioxide makes up about .14% of Earth's crust. It is used in glass to remove the green color present from iron compounds."],
		[26, "Fe", "Iron", "Iron is a medium-hard metal and has magnetic properties.", "Iron's prime use is in making steel. When steel is combined with chromium, it produces stainless steel which is resistant to corrosion."],
		[27, "Co", "Cobalt", "Cobalt is a hard metal and is magnetic.", "Cobalt is used mostly as a cancer treatment and in radiotherapy."],
		[28, "Ni", "Nickel", "Nickel is a medium-hard metal and is magnetic.", "Nickel is used in stainless steel and other anti-corrosion metal alloys. Other prominent uses include piping and tubing production as well as in the desalination process."],
		[29, "Cu", "Copper", "Copper is a colored metal that conducts heat and electricity well.", "Copper is one of the best conductors of electricity, which lends to its use in electronics and motors. The metal is also very thermally conductive, so it is used in radiators, A/C units, and heating systems."],
		[30, "Zn", "Zinc", "Zinc is a non-corroding metal.", "Zinc is used as an alloying agent in brass, nickel, silver and aluminum. Paints, rubbers, cosmetics, batteries, textiles, and inks also have a significant need for the element."],
	]
]

var group = localStorage.getItem("group");
var size = localStorage.getItem("size");
var difficulty = localStorage.getItem("difficulty");
parseInt(group);
parseInt(size);
parseInt(difficulty);

function generateGrid() {
	var gameSection = document.getElementsByClassName("memory-game")[0];
	
	var card = document.createElement("div");
	card.classList.add("memory-card");
	card.classList.add("memory-card-" + size);
	
	var front = document.createElement("div");
	front.classList.add("front-face");
	
	var back = document.createElement("img");
	back.classList.add("back-face");
	back.src = "cover.svg";
	back.alt = "Atomic Symbol";
	
	var tempRandomStorage = [0];
	var rand = 0;
	
	for (i = 0; i < ((2 * Math.floor((size*size) / 2)) / 2); i++){
		while (tempRandomStorage.includes(rand)){
			rand = Math.floor((Math.random() * 10) + 1);
		}
		if (((2 * Math.floor((size*size) / 2)) / 2) > 10){
			if (i == 9){
				tempRandomStorage = [0];
			}
		}
		tempRandomStorage.push(rand);
		if (difficulty == 1) {
			front.innerHTML = elementList[(group-1)][(rand-1)][1];
			card.dataset.framework = elementList[(group-1)][(rand-1)][2];
			card.appendChild(front);
			card.appendChild(back);
			gameSection.appendChild(card.cloneNode(true));
			gameSection.appendChild(card.cloneNode(true));
			
			document.getElementById('instructionHeading').innerHTML = "Element Symbols";
			document.getElementById('instructionText').innerHTML = "Click cards to reveal them. Match cards with the same element symbol.<br><br><b>Click anywhere to begin, good luck!</b>";
		}
		if (difficulty == 2) {
			front.innerHTML = elementList[(group-1)][(rand-1)][0];
			card.dataset.framework = elementList[(group-1)][(rand-1)][2];
			card.appendChild(front);
			card.appendChild(back);
			gameSection.appendChild(card.cloneNode(true));
			gameSection.appendChild(card.cloneNode(true));
			
			document.getElementById('instructionHeading').innerHTML = "Element Numbers";
			document.getElementById('instructionText').innerHTML = "Click cards to reveal them. Match cards with the same element number.<br><br><b>Click anywhere to begin, good luck!</b>";
		}
		if (difficulty == 3) {
			for (j = 0; j < 2; j++) {
				front.innerHTML = elementList[(group-1)][(rand-1)][j];
				card.dataset.framework = elementList[(group-1)][(rand-1)][2];
				card.appendChild(front);
				card.appendChild(back);
				gameSection.appendChild(card.cloneNode(true));
				card.removeChild(front);
			}
			document.getElementById('instructionHeading').innerHTML = "Mixed";
			document.getElementById('instructionText').innerHTML = "Click cards to reveal them. Match cards with their correlating element number and symbol.<br><br><b>Click anywhere to begin, good luck!</b>";
		}
		/*
		tempRandomStorage.push(rand);
		front.innerHTML = elementList[(group-1)][(rand-1)][1];
		card.dataset.framework = elementList[(group-1)][(rand-1)][2];
		card.appendChild(front);
		card.appendChild(back);
		gameSection.appendChild(card.cloneNode(true));
		gameSection.appendChild(card.cloneNode(true));
		*/
		if ((size % 2) == 1){
			if ((((2 * Math.floor((size*size) / 2)) / 2) - 1) == i){
				var cardBlank = document.createElement("div");
				cardBlank.classList.add("memory-card");
				cardBlank.classList.add("memory-card-" + size);
				front.innerHTML = "";
				cardBlank.appendChild(front);
				cardBlank.appendChild(back);
				cardBlank.dataset.framework = "blank";
				gameSection.appendChild(cardBlank);
			}
		}
	}
}

generateGrid();
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  firstCard.getElementsByClassName("front-face")[0].style.background = ('orange');
  secondCard.getElementsByClassName("front-face")[0].style.background = ('orange');
  elementText();
  for (i = 0; i < 10; i++){
	  if (elementList[(group-1)][i].includes(firstCard.dataset.framework)){
		  document.getElementsByClassName("information")[0].classList.add('display');
		  document.getElementById('infoHeading').innerHTML = elementList[(group-1)][i][2] + " " + elementList[(group-1)][i][0];
		  document.getElementById('infoShortDescription').innerHTML = elementList[(group-1)][i][3];
		  document.getElementById('infoLongDescription').innerHTML = elementList[(group-1)][i][4];
		  document.getElementById('infoImage').src = "https://images-of-elements.com/t/" + (elementList[(group-1)][i][2]).toLowerCase() + ".png";
		  i = 10;
	  }
  }
  flips++;
  matches++;
  document.getElementById('flips').innerHTML = flips;
  document.getElementById('matches').innerHTML = matches;
  if(matches == ((2 * Math.floor((size*size) / 2)) / 2)){
	  document.getElementById('stats').innerHTML = "You completed the grid after <b>" + flips + "</b> pair flips in <b>" + document.getElementById('seconds').innerHTML + "." + document.getElementById('tens').innerHTML + "</b> seconds!";
	  //document.getElementById('popup').click();
	  showPUEnd();
	  stop();
	  reset();
  }

  resetBoard();
}

function resetGameComplete() {
	document.getElementById('dismiss').click();
	cards.forEach(card => card.classList.add('flip'));
	  cards.forEach(card => card.getElementsByClassName("front-face")[0].style.background = ('orange'));
	  setTimeout(function() {
		  cards.forEach(card => card.getElementsByClassName("front-face")[0].style.background = ('#1C7CCC'));
		  setTimeout(function() {
			  cards.forEach(card => card.getElementsByClassName("front-face")[0].style.background = ('orange'));
			  setTimeout(function() {
				  cards.forEach(card => card.getElementsByClassName("front-face")[0].style.background = ('#1C7CCC'));
				  setTimeout(function() {
					  cards.forEach(card => card.classList.remove('flip'));
					  setTimeout(function() {
						  cards.forEach(card => card.classList.add('reset'));
						  setTimeout(function() {
							  cards.forEach(card => card.classList.remove('reset'));
							  cards.forEach(card => card.addEventListener('click', flipCard));
							  shuffle();
							  flips = 0;
							  matches = 0;
							  document.getElementById('flips').innerHTML = flips;
							  document.getElementById('matches').innerHTML = matches;
							  document.getElementsByClassName("information")[0].classList.remove('display');
							  start();
						  }, 3000);
					  }, 500);
				  }, 2000);
			  }, 1000);
		  }, 1000);
	  }, 1000);
	  resetBoard();
}



function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
	flips++;
	document.getElementById('flips').innerHTML = flips;

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
}

function elementText() {
	document.getElementById('popupText').innerHTML = firstCard.dataset.framework;
	document.getElementById('popupText').className = "animationText";
	document.getElementById('popupBox').className = "animationBox";
	setTimeout(function() {
		document.getElementById('popupText').className = "";
		document.getElementById('popupBox').className = "";
	}, 3000);
}

shuffle();

cards.forEach(card => card.addEventListener('click', flipCard));

// TIMER

var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var Interval;

function start() {
	clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function stop() {
	clearInterval(Interval);
}

function reset() {
	clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}

function startTimer () {
    tens++;
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
}


function hidePUStart() {
	document.getElementById("PUStart").style.display = "none";
	start();
}

function hidePUEnd() {
	document.getElementById("PUEnd").style.display = "none";
}

function showPUEnd() {
	document.getElementById("PUEnd").style.display = "block";
}

hidePUEnd();