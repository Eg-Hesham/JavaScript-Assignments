let div = document.querySelector("div");

function countDown() {
  div.textContent -= 1;
  if (div.textContent === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 1000);