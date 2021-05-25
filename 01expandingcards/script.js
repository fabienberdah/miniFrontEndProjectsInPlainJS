const panels = document.querySelectorAll(".panel");

const removeActiveClasses = () =>
  panels.forEach((panel) => panel.classList.remove("active"));

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log("clickede");
    removeActiveClasses();
    panel.classList.add("active");
  });
});
