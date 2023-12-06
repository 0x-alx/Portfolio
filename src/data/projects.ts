import Project_1 from "../assets/project_1.png";
import Project_2 from "../assets/project_2.png";
import Project_3 from "../assets/project_3.png";

export const projects = [
    {
        name: "Portfolio MacOs Clone",
        description: "A MacOs clone made with React and TailwindCSS.",
        technos: ["React", "Typescript", "Tailwind"],
        img: Project_1,
        link: "https://recrute-un-alex.fr"
    },
    {
        name: "Chrome Extension",
        description: "A Chrome Extension connected to ChatGPT API. Ask ChatGPT by opening a new tab.",
        technos: ["HTML", "REST API", "Javasript"],
        img: Project_2,
    },
    {
        name: "Component library",
        description: "A component library made with React, Typescript and Storybook. Available on GCP.",
        technos: ["React", "Typescript", "Tailwind", "Storybook"],
        img: Project_3,
    },
];