"use client";

import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = ["projects", "skills", "certificates", "about", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Back to top"><span>E</span>M</a>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        {open ? <HiX /> : <HiOutlineMenuAlt3 />}
      </button>
      <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}
      </nav>
      <a className="header-cta" href="mailto:elismisfit@gmail.com">Let&apos;s talk <span>↗</span></a>
    </header>
  );
}
