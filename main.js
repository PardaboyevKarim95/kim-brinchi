let elinput = document.querySelector(".form-input");
let elform = document.querySelector("form");
let elspan1 = document.querySelector(".list-span1");
let elspan2 = document.querySelector(".list-span2");
let elspan3 = document.querySelector(".list-span3");
let elspan4 = document.querySelector(".list-span4");

let piyoda = 3.6;
let velasiped = 21.1;
let moshina = 70;
let samalyot = 800;

elform.addEventListener("submit", function (tr) {
  tr.preventDefault();

  function piy(piyo) {
    let span1 = elspan1;
    let span2 = elspan2;
    let span3 = elspan3;
    let span4 = elspan4;

    let s = "0";

    let soat1 = Math.floor(+elinput.value / piyo);
    let minut = Math.floor(((+elinput.value / piyo) % 1) * 60);
    let secunt = Math.floor(((((+elinput.value / piyo) % 1) * 60) % 1) * 60);
    if (minut < 10) {
      minut = s + minut;
    }
    if (soat1 < 10) {
      soat1 = s + soat1;
    }

    if (secunt < 10) {
      secunt = s + secunt;
    }

    let opshi = soat1 + " : " + minut + " : " + secunt;

    if (piyo === piyoda) {
      span1.textContent = opshi;
    }
    if (piyo === velasiped) {
      span2.textContent = opshi;
    }

    if (piyo === moshina) {
      span3.textContent = opshi;
    }

    if (piyo === samalyot) {
      span4.textContent = opshi;
    }
    console.log(opshi);
  }

  piy(piyoda);
  piy(velasiped);
  piy(moshina);
  piy(samalyot);
});
