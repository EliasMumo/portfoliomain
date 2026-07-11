import { HiArrowUpRight } from "react-icons/hi2";

export default function Contact() {
  return (
    <footer id="contact" className="section-shell footer">
      <div className="contact-panel"><span className="status-dot" /><p>Have a project in mind?</p><h2>LET&apos;S BUILD<br/><em>THE FUTURE.</em></h2><a className="button primary" href="mailto:elismisfit@gmail.com">Start a conversation <HiArrowUpRight /></a></div>
      <div className="footer-bottom"><div><span>ELIAS MUMO © 2026</span><small>Creative technologist · Nairobi, Kenya</small></div><div className="socials"><a href="https://github.com/EliasMumo" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/elias-mumo-106342314" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="mailto:elismisfit@gmail.com">Email ↗</a></div><a href="#top" className="back-top">Back to top ↑</a></div>
    </footer>
  );
}
