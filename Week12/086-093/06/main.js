let num = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
results = document.querySelector(".results");

form[0].onsubmit = function (e) {
  e.preventDefault();
  document.querySelectorAll(".box").forEach(e => e.remove());
  for (let i = 0; i < num.value; i++) {
      let myDiv = document.createElement(type.value);
      let myDivTxt = document.createTextNode(text.value);
      myDiv.appendChild(myDivTxt);
      myDiv.id = `id-${i + 1}`;
      myDiv.className = "box";
      myDiv.title = "Element";
      results.appendChild(myDiv);
  }
};
