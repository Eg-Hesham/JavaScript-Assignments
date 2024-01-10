for (let i = 0; i < 5; i++) {
  let imgs = document.querySelectorAll("img")[i];
  if (imgs.hasAttribute("alt")) {
    imgs.setAttribute("alt", "Old")
  } else {
    imgs.setAttribute("alt", "Elzero New");
  }
}

