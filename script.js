let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitle = document.querySelector("#main-title");
mainTitle.textContent = "DOM Toretto";

  // Part 2
const body = document.querySelector("body");
body.style.backgroundColor("green");

  // Part 3
const favThingsList = document.querySelector("#favorite-things");
const favThingsLast = favThingsList.lastElementChild;
console.log(favThingsLast);
favThingsList.removeChild(favThingsLast);

  // Part 4
const specialTitles = document.querySelectorAll(".special-title");
specialTitles.forEach((element) => {
  element.style.fontSize = "2rem"
});

  // Part 5
const pastRaces = document.querySelector("#past-races");
pastRaces.removeChild(pastRaces.children[3]);

  // Part 6
const newLi = document.createElement("li");
newLi.innerHTML = "Austin";
pastRaces.append(newLi);

  // Part 7



  // Part 8


  // Part 9
})