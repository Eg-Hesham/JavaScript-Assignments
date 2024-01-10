let inp = document.querySelector("[name = 'dollar']");
let d = document.querySelector(".result");
inp.onchange = function () {
   let n = inp.value;
   n < 0 ?
    n = 0 : 
    d.textContent = `{${n}} USD Dollar = {${(n * 15.6).toFixed(2)}} Egyptian Pound`;
    document.body.form.appendChild(d);
}

