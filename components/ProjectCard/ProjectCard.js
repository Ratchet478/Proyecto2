import "./ProjectCard.css";

export const ProjectCard = (project) => {
    const ProjectCard = document.createElement("div");
    ProjectCard.classList.add("project-card");
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    ProjectCard.appendChild(img);
    const header = document.createElement("div");
    header.classList.add("header");
    const title = document.createElement("h2");
    title.textContent = project.title;
    header.appendChild(title);
    const linkContainer = document.createElement("div");
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    const githubIcon = document.createElement("i");
    githubIcon.className = "fab fa-github";
    githubLink.appendChild(githubIcon);
    linkContainer.appendChild(githubLink);
    if (project.link) {
        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        const linkIcon = document.createElement("i");
        linkIcon.className = "fas fa-link";
        projectLink.appendChild(linkIcon);
        linkContainer.appendChild(projectLink);
    }

    header.appendChild(linkContainer);
    ProjectCard.appendChild(header);
    const detail = document.createElement("div");
    detail.className = "detail";

    const description = document.createElement("p");
    description.textContent = project.description;
    detail.appendChild(description);

    const tech = document.createElement("p");
    tech.className = "tech";
    tech.textContent = project.tech.join(" - ");
    detail.appendChild(tech);

    ProjectCard.appendChild(detail);
    return ProjectCard.outerHTML;
};