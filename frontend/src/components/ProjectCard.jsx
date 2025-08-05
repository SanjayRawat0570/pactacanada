const ProjectCard = ({ project }) => {
  if (!project || !project.title || !project.description) {
    return <p className="text-red-500">Invalid project data</p>;
  }

  return (
    <div className="bg-white rounded p-4 shadow-md">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p>{project.description}</p>
      <a className="text-blue-500" href={project.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
};



