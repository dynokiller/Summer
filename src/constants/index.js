import {
  mobile,
  backend,
  hacker,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  tark,
  parkmate,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ethical Hacker",
    icon: hacker,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    description: "A markup language used for structuring and presenting content on the web.",
    projects: "Web pages, web applications",
  },
  {
    name: "CSS 3",
    icon: css,
    description: "A stylesheet language used for describing the presentation of a document written in HTML or XML.",
    projects: "Web design, responsive design, animations",
  },
  {
    name: "JavaScript",
    icon: javascript,
    description: "A programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more.",
    projects: "Web development, interactive web pages, server-side applications",
  },
  {
    name: "TypeScript",
    icon: typescript,
    description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    projects: "Large scale web applications, strict type checking",
  },
  {
    name: "React JS",
    icon: reactjs,
    description: "A JavaScript library for building user interfaces.",
    projects: "Single-page applications, mobile applications",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description: "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
    projects: "Rapid UI development, custom designs",
  },
  {
    name: "Node JS",
    icon: nodejs,
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    projects: "Server-side applications, API services",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description: "A source-available cross-platform document-oriented database program.",
    projects: "NoSQL databases, real-time analytics, content management",
  },
  {
    name: "Three JS",
    icon: threejs,
    description: "A cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser using WebGL.",
    projects: "3D modeling, animations, interactive 3D content",
  },
];


const experiences = [
  {
    title: "React.js Intern",
    company_name: "Tark Technologies",
    icon: tark,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Interning at Tark Industry, focusing on learning and developing web applications using React.js.",
      "Collaborating with cross-functional teams, including designers and product managers, to gain practical experience.",
      "Implementing responsive design principles and ensuring cross-browser compatibility.",
      "Participating in code reviews to learn best practices and enhance my coding skills."
    ],
  }, 
];

const testimonials = [
 
];

const projects = [
  {
    name: "Parkmate",
    description:
      "Our system provides an optimal solution for parking in the field of parking management.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "DJango",
        color: "green-text-gradient",
      },
    ],
    image: parkmate,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
