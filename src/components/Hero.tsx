import { HiArrowDown, HiOutlineCode, HiOutlineDeviceMobile, HiOutlineSparkles } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-glow" />
      <div className="eyebrow"><span className="status-dot" /> Available for selected projects <span className="index">01 / 05</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">Creative technologist · Nairobi, Kenya</p>
          <h1>ELIAS <span>MUMO</span></h1>
          <p className="hero-role">I turn ambitious ideas into <em>useful digital experiences.</em></p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <HiArrowDown /></a>
            <a className="text-link" href="/curriculumvitae.pdf" download>Download CV <span>↗</span></a>
          </div>
        </div>
        <div className="signal-card" aria-label="Developer disciplines">
          <div className="orb"><span>EM</span></div>
          <div className="signal-row"><HiOutlineCode /><span>Web experiences</span><b>01</b></div>
          <div className="signal-row"><HiOutlineDeviceMobile /><span>Mobile products</span><b>02</b></div>
          <div className="signal-row"><HiOutlineSparkles /><span>Interface design</span><b>03</b></div>
        </div>
      </div>
      <div className="hero-foot"><span>DESIGN</span><i /> <span>DEVELOP</span><i /> <span>DELIVER</span></div>
    </section>
  );
}
