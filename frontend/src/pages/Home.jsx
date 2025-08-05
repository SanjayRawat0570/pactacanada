import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api/api';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(res => setProjects(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} link={p.link} />
        ))}
      </div>
    </div>
  );
};

export default Home;