import Image from "next/image";
import { certificates } from "@/lib/data";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Certificates() {
  return (
    <section id="certificates" className="section-shell section-block cert-section">
      <div className="section-heading"><div><span className="section-index">04</span><h2>COURSES &amp;<br/><em>CERTIFICATIONS</em></h2></div><p>Credentials are useful. Applying what they teach is the real proof. Every card opens the original certificate.</p></div>
      <div className="cert-grid">{certificates.map((cert, i) => <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card"><span className="cert-no">0{i+1}</span><div className="cert-icon"><Image src={cert.logo} alt="" width={44} height={44}/></div><div><small>{cert.issuer}</small><h3>{cert.title}</h3><span className="verify">View credential</span></div><HiArrowUpRight className="cert-arrow" /></a>)}</div>
    </section>
  );
}
