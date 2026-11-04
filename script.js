const projects = [...document.querySelectorAll(".project")];

for (const project of projects) {
  const link = project.querySelector(".project-button");
  const name = project.dataset.project;

  link.addEventListener("click", (event) => {
    if (project.classList.contains("is-open")) return;

    event.preventDefault();

    for (const other of projects) {
      other.classList.remove("is-open");
      const otherLink = other.querySelector(".project-button");
      otherLink.setAttribute("aria-expanded", "false");
      otherLink.setAttribute("aria-label", `Expandir o projeto ${other.dataset.project}`);
    }

    project.classList.add("is-open");
    link.setAttribute("aria-expanded", "true");
    link.setAttribute("aria-label", `Abrir o projeto ${name}`);
  });
}
