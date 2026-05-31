const checkboxInput = document.getElementById("checkbox-theme");

checkboxInput.checked =
  document.documentElement.getAttribute("data-theme") === "dark";

checkboxInput.addEventListener("change", (e) => {
  const tema = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", tema);
  localStorage.setItem("theme", tema);
});
