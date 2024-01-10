let div = document.querySelector("div");

function countDown() {
  div.textContent -= 1;
  if (div.textContent === "5") {
    window.open("https://elzero.org/", "_blank", "height=400, width=400, left= 300, top=200");
  }
  if (div.textContent === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 1000);