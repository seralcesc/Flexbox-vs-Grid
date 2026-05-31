// Buscamos el checkbox mediante su ID correcto del nuevo HTML
const checkboxInput = document.getElementById("checkbox-theme");

// 1. Al cargar la página, comprobamos qué tema prefiere el usuario
const temaGuardado = localStorage.getItem("theme");

if (temaGuardado === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  checkboxInput.checked = false; // El interruptor va a la izquierda
} else {
  // Por defecto (o si guardó dark), se queda en modo oscuro
  document.documentElement.removeAttribute("data-theme");
  checkboxInput.checked = true; // El interruptor va a la derecha
}

// 2. Escuchamos cuando el interruptor cambia de posición
checkboxInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    // Si se marca (Derecha), activamos el Modo Oscuro
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    // Si se desmarca (Izquierda), activamos el Modo Claro
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
