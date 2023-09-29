const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAcriveClassList();
    panel.classList.add("active");
  });
});

function removeAcriveClassList() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
