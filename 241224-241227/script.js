const form = document.querySelector("form");
const word = document.getElementById("word");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = word.value;
  console.log(userValue);
  alert(userValue);
});

const title = document.querySelector("h1");
console.log(title);
title.style.color = "#02c13c";
