// Efecto de fade-in al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  const contenedor = document.querySelector(".contenedor");
  contenedor.style.opacity = 0;
  setTimeout(function() {
    contenedor.style.opacity = 1;
  }, 500);
});

// Efecto de typewriter en el texto
const texto = document.querySelectorAll("p");
texto.forEach(function(parrafo) {
  parrafo.innerHTML = parrafo.textContent.split("").map(function(letra) {
    return letra + " ";
  }).join("");
  parrafo.style.textShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
});

// Efecto de hover en la imagen
const imagen = document.querySelector(".foto");
imagen.addEventListener("mouseover", function() {
  imagen.style.transform = "scale(1.1)";
  imagen.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
});
imagen.addEventListener("mouseout", function() {
  imagen.style.transform = "scale(1)";
  imagen.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
});

// Efecto de cuenta regresiva
const cuentaRegresiva = document.createElement("p");
cuentaRegresiva.textContent = "Días hasta nuestro aniversario: ";
const aniversario = new Date("2025-02-14"); // Cambia la fecha a tu aniversario
const actual = new Date();
const diferencia = aniversario.getTime() - actual.getTime();
const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
cuentaRegresiva.textContent += dias;
document.querySelector(".contenedor").appendChild(cuentaRegresiva);
