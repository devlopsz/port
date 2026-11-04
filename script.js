const projects = [...document.querySelectorAll(".project")];

for (const project of projects) {
  const toggle = project.querySelector(".project-square");
  const link = project.querySelector(".project-link");

  toggle.addEventListener("click", () => {
    const opening = !project.classList.contains("is-open");

    for (const other of projects) {
      other.classList.remove("is-open");
      other.querySelector(".project-square").setAttribute("aria-expanded", "false");
      other.querySelector(".project-link").tabIndex = -1;
    }

    if (opening) {
      project.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      link.tabIndex = 0;
    }
  });

  link.tabIndex = -1;
}
