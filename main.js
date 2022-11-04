let botones = [];
let X = [];
let O = [];
const salir = document.createElement("button");
salir.classList.add("hola");
salir.type = "button";
salir.innerText = "Salir";
salir.addEventListener("click", () => {
  location.reload();
});

const limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", () => {
  location.reload();
});

const div = document.getElementById("ganar");
for (let i = 0; i < 9; i++) {
  let x = i.toString();
  botones[i] = document.getElementById(x);
}

const ganar = () => {
  if (X.includes(0) && X.includes(4) && X.includes(8)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (X.includes(2) && X.includes(4) && X.includes(6)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (X.includes(0) && X.includes(1) && X.includes(2)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (X.includes(3) && X.includes(4) && X.includes(5)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (X.includes(6) && X.includes(7) && X.includes(6)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (X.includes(0) && X.includes(3) && X.includes(6)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (X.includes(1) && X.includes(4) && X.includes(7)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (X.includes(2) && X.includes(5) && X.includes(8)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las X";
    div.append(salir);
    return true;
  } else if (O.includes(0) && O.includes(4) && O.includes(8)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (O.includes(2) && O.includes(4) && O.includes(6)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (O.includes(0) && O.includes(1) && O.includes(2)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (O.includes(3) && O.includes(4) && O.includes(5)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (O.includes(6) && O.includes(7) && O.includes(6)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (O.includes(0) && O.includes(3) && O.includes(6)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (O.includes(1) && O.includes(4) && O.includes(7)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (O.includes(2) && O.includes(5) && O.includes(8)) {
    div.style.display = "flex";
    div.innerHTML = "Ganan las O";
    div.append(salir);
    return true;
  } else if (count === 9) {
    div.style.display = "flex";
    div.innerHTML = "El resultado es empate!";
    div.append(salir);
    return true;
  } else {
    return false;
  }
};

let count = 0;
for (let i = 0; i < 9; i++) {
  let b = false;
  botones[i].addEventListener("click", () => {
    b = ganar();
    if (b === true) {
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else if (count % 2 === 0 && !O.includes(i) && !X.includes(i)) {
      botones[i].innerHTML = "X";
      X.push(i);
      count++;
      console.log(count);
      b = ganar();
    } else if (count % 2 === 1 && !O.includes(i) && !X.includes(i)) {
      botones[i].innerHTML = "O";
      O.push(i);
      count++;
      console.log(count);
      b = ganar();
    }
  });
}

console.log("hila");
