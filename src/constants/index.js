const navLinks = [
  {
    name: "Works",
    link: "#work",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },

];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },

  { value: 10, suffix: "+", label: "experience in programming languages" },

  { value: 12, suffix: "+", label: "Completed Projects" },

  { value: 12, suffix: "+", label: "Satisfied Clients" },

];




const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "My name is Márcio Martins, I am 23 years old and I am currently in the last year of the Computer Science course. I was born in Peri Mirim - MA and currently live in São Luís - MA, always seeking to evolve both academically and professionally. My degree has been a solid foundation for developing my programming logic and problem-solving skills.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Academic Training",
    date: "January 2021 - Present",
    responsibilities: [
      "Course: Computer Science",
      "Institution: Anhnaguera.",
      "Skills developed: Programming Logic, Data Structures, Algorithms, Object Oriented Programming, Databases",
      "Participation in academic projects and tutoring"
    ],
  },
  {
    review: "I work as a Full Stack developer, specializing in Node.js. In addition to backend, I also have solid experience in frontend and database. I always seek to create scalable, high-performance solutions with good coding practices. I work with several languages ​​and technologies, which allows me to have a complete vision of the software development cycle.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2021 - present",
    responsibilities: [
      "Backend: Node.js, Java, PHP...",
      "Frontend: JavaScript, React, TypeScript, HTML, CSS...",
      "Database: SQL (MySQL, PostgreSQL)",
      "Others: Git, C",
    ],
  },
  {
    review: "I am a focused person, with a spirit of continuous learning and a strong desire to grow in the technology field. I enjoy facing challenges, learning new tools and working in a team. I seek opportunities to put my knowledge into practice and contribute to real projects that positively impact people.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Personal and Professional Profile",
    date: "Always evolving",
    responsibilities: [
      "Rapid adaptation to new technologies.",
      "Analytical and problem-solving profile",
      "I work well in a team and also independently.",
      "Ease of communication",
      "High capacity for self-taught learning",
      "Constant interest in innovation"
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/marciomartins_12/"
  },

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "www.linkedin.com/in/marcio-martins-471759253"
  },
];

export {
  words,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
