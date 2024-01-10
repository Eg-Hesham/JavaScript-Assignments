let popup = document.querySelector("div");
let exit = document.querySelector("button");

setTimeout(function () {
  popup.style.display = "block";
}, 5000)

exit.onclick = function () {
  popup.style.display = "none";
}