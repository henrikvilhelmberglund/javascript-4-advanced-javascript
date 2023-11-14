const KLM = {
  airline: "KLM",
  iataCode: "KL",
  bookings: [],
  // book: function () {};
  book(flightNumber, passenger) {
    console.log(
      `${passenger} har bokat en plats med ${this.airline} och flightnummer ${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passenger,
    });
  },
};

KLM.book(1178, "Michael Gustavsson");
KLM.book(1178, "Annika Gustavsson");
KLM.book(2278, "Bertil Jonsson");

const cityhopper = {
  airline: "KLM Cityhopper",
  iataCode: "WA",
  bookings: [],
};

const book = KLM.book;
// book(3322, "Claes Stjernlöf");

book.call(cityhopper, 3322, "Claes Stjernlöf");
book.call(KLM, 4569, "Ulf örnqvist");
console.log(KLM);

const finnair = {
  airline: "Finnair",
  iataCode: "AY",
  bookings: [],
};

book.call(finnair, 1111, "Lars Hansson");

// Exempel på omodern javascript
// Metoden apply...
const flightInfo = [4431, "Oscar Jacobsson"];
book.apply(finnair, flightInfo);

// Gör så här istället
book.call(cityhopper, ...flightInfo);

// Mer modern: metoden bind
// returnerar alltid en ny funktion
const bookWA = book.bind(cityhopper);
const bookKL = book.bind(KLM);
const bookAY = book.bind(finnair);

bookWA(1122, "Eva Larsson");
bookKL(3355, "Lina Eriksson");
bookAY(7788, "Erland Arvidsson");

// Skapa en "partial" application
// betyder att delar av argumenten redan är definierade/satta
const bookWA6498 = book.bind(cityhopper, 6498);
bookWA6498("Leif Gustavsson");
bookWA6498("Eva Gustavsson");

// Working with events
finnair.meals = 200;
// Metod
// finnair.addMeal = function (e) {
//   console.log(e);
//   console.log(this);
//   this.meals++;
//   console.log(this.meals);
// };

finnair.addMeal = () => {
  finnair.meals++;
  console.log(finnair.meals);
};

document.querySelector("#btn").addEventListener("click", finnair.addMeal);
// document.querySelector("#btn").addEventListener("click", (e) => console.log(e));
// document
//   .querySelector("#btn")
//   .addEventListener("click", finnair.addMeal.bind(finnair));
document.querySelector("#btn").addEventListener("click", finnair.addMeal);
document
  .querySelector("#btn")
  .addEventListener("click", () => finnair.addMeal());

// Partial application

const calculateVAT = (rate, value) => value + value * rate;

console.log("Inklusive moms: ", calculateVAT(0.25, 200));

// bad practice att duplicera
// const calculateGroceryVAT = (rate, value) => value + value * rate;
// console.log("Inklusive moms:", calculateGroceryVAT(0.12, 21.08));

// null för calculateVAT är arrow function
const groceryVAT = calculateVAT.bind(null, 0.12);
console.log("Livsmedel inklusive moms:", groceryVAT(21.08).toFixed(2));

// IIFE Immediately invoked function expression

(function () {
  var x = 10;
  console.log("IIFE is running")
})();

function test() {
  // Scopade till test, kan inte läcka ut
  const x = 10;
  let y;
}



(() => {console.log("IIFE is running inside an arrow function")})();