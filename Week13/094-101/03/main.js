let d = document.querySelector(".our-element");
let p = document.querySelector("p");

p.remove();

let start = document.createElement("div");
let startTxt = document.createTextNode("Start");
start.appendChild(startTxt);
start.className = "start";
start.title = "Start Element";
start.setAttribute("data-value", "Start");
d.before(start);

let end = document.createElement("div");
let endTxt = document.createTextNode("End");
end.appendChild(endTxt);
end.className = "end";
end.title = "End Element";
end.setAttribute("data-value", "End");
d.after(end);