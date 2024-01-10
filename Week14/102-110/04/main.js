let div = document.querySelector("div");

function countDown() {
  div.textContent -= 1;
  if (div.textContent === "0") {
    window.open("https://elzero.org/", "_self");
  }
}

let counter = setInterval(countDown, 1000);