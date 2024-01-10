let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let result = document.querySelector(".classes-list div");
var splited = add.value.split(" ");

add.onblur = function () {
  for (let i = 0; i < splited.length; i++) {
    splited = add.value.split(" ").sort();
    var span = document.createElement("span");
    var txt = document.createTextNode(splited[i]);
    span.append(txt);
    result.appendChild(span);
  }
};

remove.onblur = function () {
  for (let i = 0; i < splited.length; i++) {
    if (remove.value === document.querySelectorAll(".classes-list div span")[i].textContent) {
      document.querySelectorAll(".classes-list div span")[i].remove();
    }
  }
}; 

