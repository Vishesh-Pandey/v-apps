import React from "react";

function ProjectCard({ project }: any) {
  return (
    <div>
      <div key={project.id} className="bg-primary text-primary border p-2 m-2">
        <h1>{project.name}</h1>
        <h2>{project.description}</h2>
        <p>{project.language}</p>
        <p>Stars : {project.stargazers_count}</p>
        <a href={project.homepage} target="_blank">
          <button className="bg-secondary hover:bg-tertiary border p-2 rounded-sm mx-2">
            Visit Website
          </button>
        </a>
        <a href={project.html_url} target="_blank">
          <button className="bg-secondary hover:bg-tertiary border p-2 rounded-sm mx-2">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
