// El juego selecciona numero al azar

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;

function chequearResultado() {
  intentos++;
  intento.textContent = intentos;
  let numeroIngresado = parseInt(numeroEntrada.value);
  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor introduce un número válido entre 1 y 100";
    mensaje.style.color = "black";
    return;
  }
  if (numeroIngresado === numeroAleatorio) {
    mensaje.textContent = "¡Felicitaciones! ¡Has adivinado el número!";
    mensaje.style.color = "green";
    numeroEntrada.didabled = true;
  } else if (numeroIngresado < numeroAleatorio) {
    mensaje.textContent =
      "¡Más alto! ¡El número es mayor a" + " " + `${numeroIngresado}`;
    mensaje.style.color = "orange";
  } else {
    mensaje.textContent =
      "¡Más bajo! ¡El número es menor a" + " " + `${numeroIngresado}`;
    mensaje.style.color = "blue";
  }
}
