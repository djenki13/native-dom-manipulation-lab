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
const main = document.querySelector(".main");
const newBlog = document.createElement("div");
const text = document.createElement("h2");
const blogBody = document.createElement("p");
newBlog.setAttribute("class","blog-post-Austin");
text.textContent = newLi.textContent;
text.style.color = "black";
blogBody.textContent = "Howdy y'all, we love Austin!";
newBlog.appendChild(text);
newBlog.appendChild(paragraph);
main.appendChild(BlogBody);

  // Part 8
  const quoteTitle = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  quoteTitle.addEventListener("click", (e) => {
    randomQuote();
  })

  // Part 9
const blogPost = document.querySelectorAll(".blog-post");
for (let i=0; i < blogPost.length; i++) {
  blogPost[i].addEventListener("mouseout", (e) => {
    blogPost[i].classList.toggle("purple");
  });
  blogPost[i].addEventListener("mouseenter", (e) => {
    blogPost[i].classList.toggle("red");
  });
}
})