import type { Project } from "@/lib/data";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const linked = project.url !== "#";
  const Tag = linked ? "a" : "article";
  const attrs = linked ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Tag className={`project-card project-${index + 1}`} {...attrs}>
      <div className="project-shot">
        <Image src={project.screenshot} alt={`${project.title} website preview`} fill sizes="(max-width: 800px) 100vw, 50vw" />
        <div className="browser-bar"><span /><span /><span /><small>{linked ? new URL(project.url).hostname : "concept project"}</small></div>
      </div>
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <div><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.title}</h3><p>{project.description}</p></div>
        {linked && <span className="visit"><HiArrowUpRight /></span>}
      </div>
    </Tag>
  );
}
