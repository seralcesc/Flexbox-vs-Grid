// Cambia el tema según la preferencia del usuario
const checkboxInput = document.getElementById("checkbox-theme");

checkboxInput.checked =
  document.documentElement.getAttribute("data-theme") === "dark";

checkboxInput.addEventListener("change", (e) => {
  const tema = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", tema);
  localStorage.setItem("theme", tema);
});

//menu hamburguesa
const menuButtonEl = document.querySelector(".menu-button");
const navMenuEl = document.querySelector(".menu"); // Selecciona tu nav con clase .menu

if (menuButtonEl && navMenuEl) {
  menuButtonEl.addEventListener("click", () => {
    // Alternamos la clase unificada en el menú
    const isNowOpen = navMenuEl.classList.toggle("nav-open");

    // Sincronizamos el estado accesible ARIA
    menuButtonEl.setAttribute("aria-expanded", isNowOpen);
  });
}
