let d = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let art = document.querySelector("article");
let sec = document.querySelector("section");

d.onclick = function () {
  console.log(d.nodeName);
}
span.onclick = function () {
  console.log(span.nodeName);
}
p.onclick = function () {
  console.log(p.nodeName);
}
art.onclick = function () {
  console.log(art.nodeName);
}
sec.onclick = function () {
  console.log(sec.nodeName);
}