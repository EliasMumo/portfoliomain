export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  screenshot: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  logo: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "DwellMerge",
    description: "A rental property search platform with modern browsing experience.",
    tags: ["Real Estate", "Web"],
    url: "https://www.dwellmerge.com/",
    screenshot: "/projects/dwellmerge.png",
  },
  {
    title: "Kotara",
    description: "Professional company website built for a client.",
    tags: ["Business", "Web"],
    url: "https://kotara.co.ke/",
    screenshot: "/projects/kotara.png",
  },
  {
    title: "Prime Predict",
    description: "Football predictions and match insights platform.",
    tags: ["Sports", "Analytics"],
    url: "https://www.primepredicttips.com/",
    screenshot: "/projects/primepredict.png",
  },
  {
    title: "Football Predictions Pro",
    description: "Android app for daily tips and match analysis.",
    tags: ["Mobile App"],
    url: "https://play.google.com/store/apps/details?id=com.flore.footballtips",
    screenshot: "/projects/footballtips.png",
  },
  {
    title: "Renestate",
    description: "Property listing and management web application.",
    tags: ["Real Estate", "Web"],
    url: "#",
    screenshot: "/projects/renestate.png",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "FRONTEND",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    name: "BACKEND",
    skills: ["Node.js", "Python", "SQL"],
  },
  {
    name: "DESIGN",
    skills: ["Figma", "Adobe CC"],
  },
  {
    name: "TOOLS",
    skills: ["Git", "Docker"],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    logo: "/certificates/freecodecamp.svg",
    url: "https://www.freecodecamp.org/certification/EliasMumo/responsive-web-design",
  },
  {
    title: "HTML Certification",
    issuer: "Codedex",
    logo: "/certificates/html.svg",
    url: "https://www.codedex.io/certificates/8c106e5b-80da-484a-b399-aff2e591614b",
  },
  {
    title: "CSS Certification",
    issuer: "Codedex",
    logo: "/certificates/css.svg",
    url: "https://www.codedex.io/certificates/47af8b7b-51b1-4b9e-8f10-fe8a3ae8ad23",
  },
  {
    title: "JavaScript Certification",
    issuer: "Codedex",
    logo: "/certificates/javascript.svg",
    url: "https://www.codedex.io/certificates/377ac906-d771-4251-8a9d-1a1a21946ba5",
  },
  {
    title: "Power Learn Project",
    issuer: "PLP Africa",
    logo: "/certificates/plp.svg",
    url: "https://academy.powerlearnprojectafrica.org/certificates?scholarship=75da9624-f5ad-46fd-a855-492328893f26",
  },
];
