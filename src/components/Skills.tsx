import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-block skills-section">
      <div className="section-heading"><div><span className="section-index">03</span><h2>SKILLS &amp;<br/><em>SIGNALS</em></h2></div><p>The technologies and tools I use to take ideas from the first sketch to a shipped product.</p></div>
      <div className="skill-grid">{skillCategories.map((cat, i) => <div className="skill-group" key={cat.name}><div className="skill-top"><span>0{i+1}</span><h3>{cat.name}</h3></div>{cat.skills.map((skill, j) => <div className="skill-line" key={skill}><span>{skill}</span><i><b style={{width: `${92-j*11-i*4}%`}} /></i></div>)}</div>)}</div>
    </section>
  );
}
