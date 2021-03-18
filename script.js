//select all panels with Vanilla JS , also possible with querySelectorAll --> dont need Array.from then
const panels = Array.from(document.getElementsByClassName("panel"));

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivePanels();
    panel.classList.add("panel--active");
  });
});

removeActivePanels = () => {
  panels.forEach((panel) => {
    panel.classList.remove("panel--active");
  });
};
