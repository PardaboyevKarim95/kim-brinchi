let elform = document.querySelector("form");
let elinp = document.querySelector(".form-input");
let elpiyada = document.querySelector(".list-span1");
let elvelasiped = document.querySelector(".list-span2");
let elmoshina = document.querySelector(".list-span3");
let elsamalyot = document.querySelector(".list-span4");

function nam(yol, klametr) {
  let soat = Math.floor(yol / klametr);
  let min = Math.floor(((yol / klametr) % 1) * 60);
  let secunt = Math.floor(((((yol / klametr) % 1) * 60) % 1) * 60);
  let d = bbb(soat, min, secunt);
  // return console.log(!soat > 0);
  return d;
}

function bbb(a, b, s) {
  console.log(typeof a);
  if (!a > 0) {
    console.log(a, "true");

    a = "";
  } else {
    a = " soat: " + a;
  }
  if (!b > 0) {
    console.log(b, "true");

    b = "";
  } else {
    b = " minut: " + b;
  }
  if (!s > 0) {
    console.log(s, "true");

    s = "";
  } else {
    s = " secunt: " + s;
  }
  return a + b + s;
}

elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (isNaN(elinp.value)) {
    alert("Hato: raqam kiriting");
  } else if (elinp.value == 0) {
    alert("Hato: Noldan katta son kirting");
  }
  let piyoda = 3.6;
  let velasiped = 20.1;
  let moshina = 70;
  let samolyot = 800;
  let g = nam(+elinp.value, piyoda);
  elpiyada.textContent = g;
  elvelasiped.textContent = nam(+elinp.value.trim(), velasiped);
  elmoshina.textContent = nam(+elinp.value.trim(), moshina);
  elsamalyot.textContent = nam(+elinp.value.trim(), samolyot);
  elinp.value = "";
});
