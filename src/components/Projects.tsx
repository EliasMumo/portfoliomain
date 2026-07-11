import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-block">
      <div className="section-heading"><div><span className="section-index">02</span><h2>SELECTED<br/><em>WORKS</em></h2></div><p>A selection of products I&apos;ve designed and developed — from property platforms to mobile experiences.</p></div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
