let first = document.querySelector("#first");
let last = document.querySelector("#last");
let number = document.querySelector("#number");
let select = document.querySelector("#sel");

first.oninput = function () {
  window.sessionStorage.setItem("first-name", first.value);
}
last.oninput = function () {
  window.sessionStorage.setItem("last-name", last.value);
}
number.oninput = function () {
  window.sessionStorage.setItem("phone-number", number.value);
}
select.oninput = function () {
  window.sessionStorage.setItem("selected", select.value);
}

first.value = window.sessionStorage.getItem("first-name");
last.value = window.sessionStorage.getItem("last-name");
number.value = window.sessionStorage.getItem("phone-number");
select.value = window.sessionStorage.getItem("selected");