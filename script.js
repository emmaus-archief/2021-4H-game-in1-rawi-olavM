/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

// speler data
var spelerX = 200; // x-positie van speler
var spelerY = 600; // y-positie van speler
var spelerYsnelheid = 0; // snelheid waarmee speler beweegt in R richting, voor springen
var spelerYgravity = 0.5; // hoeveel elke 50e seconde bij de snelheid komt vanwege de zwaartekracht
var spelerYvloer = 650; // hoogte van de vloer waar speler niet doorheen kan
var spelerYplafond = 80;
var arenarandlinks = 20;
var arenarandrechts = 200;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var UP_KEY = 38;
var SHIFT_LEFT = 16;
var DASH_RIGHT = 96;
var DASH_LEFT = 16;

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("skyblue");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function (x, y) {

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function (x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function (x, y) {
  fill(253, 184, 19);
  rect(x, y, 50, 50);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {

};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function () {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function () {
  if (keyIsDown(LEFT_KEY)) {
    spelerX = spelerX - 3;
  };
  if (keyIsDown(RIGHT_KEY)) {
    spelerX = spelerX + 3;
  };
  // dash als je enter klikt 
  if (keyIsDown(DASH_RIGHT)) {
    spelerX = spelerX + 20;
  
  };
  if (keyIsDown(DASH_LEFT)){
    spelerX = spelerX - 20;
  }
  // zorg dat speler omhoog gaat als je op UP drukt
  // speler gaat harder omhoog dan dat hij zakt door de zwaartekracht
  if (keyIsDown(UP_KEY)) {
    spelerYsnelheid = -10;
  };
  
  // zorg dat de speler beweegt met de snelheid
  spelerY = spelerY + spelerYsnelheid;

  // zorg dat speler steed minder hard stijgt of harder valt
  spelerYsnelheid = spelerYsnelheid + spelerYgravity;

  // zorg dat speler niet door grond zakt
  if (spelerY > spelerYvloer) {
    spelerY = spelerYvloer;
    spelerYsnelheid = 0;
  }
};

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function () {

  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();

      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }

      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
