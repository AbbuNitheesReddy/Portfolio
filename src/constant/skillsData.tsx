import React from "react";

import {
  FaCss3,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaPython,
  FaReact,
  FaGaugeHigh,
  FaTruckMoving,
  FaWheelchair,
  FaBookOpen,
  FaCodeBranch,
  FaRobot,
  FaBootstrap,
  FaSearchengin,
  FaSquareJs,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiPostman,
  SiReplit,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { SiParrotsecurity } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "Bootstrap", logoComponent: FaBootstrap, color: "#7952B3" },
      { title: "Framer Motion", logoComponent: SiFramer, color: "#0055FF" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Dev Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Netlify", logoComponent: SiNetlify, color: "#00C7B7" },
      { title: "Replit", logoComponent: SiReplit, color: "#667881" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
      { title: "Firebase", logoComponent: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Concepts & Technologies",
    data: [
      { title: "API Design", logoComponent: MdApi, color: "#5C2D91" },
      { title: "Accessibility", logoComponent: FaWheelchair, color: "#1E88E5" },
      { title: "BERT", logoComponent: FaBookOpen, color: "#2196F3" },
      { title: "GNN", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Explainable AI (SHAP)", logoComponent: GiBrain, color: "#9C27B0" },
      { title: "RoBERTa", logoComponent: GiBrain, color: "#FF9800" },
      { title: "LSTM", logoComponent: GiBrain, color: "#FF9800" },
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      {
        title: "Performance Optimization",
        logoComponent: FaGaugeHigh,
        color: "#388E3C",
      },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      {
        title: "Software Development",
        logoComponent: FaLaptopCode,
        color: "#607D8B",
      },
    ],
  },
  {
    title: "Cybersecurity Tools & Platforms",
    data: [
      { title: "Linux", logoComponent: FaLinux, color: "#FCC624" },
      { title: "MITRE ATT&CK", logoComponent: SiParrotsecurity, color: "#2196F3" },
      { title: "OWASP Top 10", logoComponent: FaBookOpen, color: "#2196F3" },
      { title: "Burp Suite", logoComponent: MdSecurity, color: "#E64A19" },
      { title: "Penetration Testing", logoComponent: FaBookOpen, color: "#2196F3" },
      { title: "Vulnerability Assessment", logoComponent: FaBookOpen, color: "#2196F3" },
      
    ],
  },
];
