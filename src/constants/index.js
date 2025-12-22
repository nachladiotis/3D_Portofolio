import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  epsilonnet,
  ergafon,
  codehub,
  european_dynamics,
  carrent,
  jobit,
  tripguide,
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
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer (C#/.NET)",
    icon: backend,
  },
  {
    title: "React Frontend Developer",
    icon: mobile,
  },
  {
    title: "API & Integration Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Customer Support Specialist",
    company_name: "EpsilonNet",
    icon: epsilonnet,
    iconBg: "#383E56",
    date: "Dec 2022 - June 2023",
    points: [
      "Installing and configuring Epsilon Net software solutions on client premises, ensuring seamless deployment and integration with existing systems.",
      "Performing MySQL database migrations and analysis for client upgrades, maintaining data integrity while minimizing downtime during transitions.",
      "Providing technical support for CRM systems and web applications, troubleshooting SQL queries and resolving integration issues for optimal performance.",
      "Collaborating with development teams and clients to document requirements, test deployments, and deliver customized software configurations.",
    ],
  },
  {
    title: "Network and Telecommunications Technician",
    company_name: "ERGAFON COM S.A.",
    icon: ergafon,
    iconBg: "#0a192f",
    date: "Oct 2023 - Dec 2024",
    points: [
      "Deploying and maintaining enterprise network infrastructure using TCP/IP, OSPF, and BGP routing protocols for reliable connectivity.",
      "Configuring Cisco routers/switches and troubleshooting layer 2/3 connectivity issues using Wireshark packet analysis.",
      "Performing network migrations and upgrades, ensuring zero-downtime transitions for client telecommunications systems.",
      "Collaborating with IT teams to implement VLAN segmentation, QoS policies, and firewall rules for secure network operations.",
    ],
  },
  {
    title: ".NET Developer Bootcamp",
    company_name: "Code.Hub",
    icon: codehub,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2025",
    points: [
      "Completed intensive 6-week .NET bootcamp, mastering C# backend development, RESTful APIs, and Entity Framework for enterprise applications.",
      "Built full-stack projects using ASP.NET Core, PostgreSQL, and JWT authentication, implementing CRUD operations and database migrations.",
      "Developed unit/integration tests with xUnit and Moq, achieving 85%+ code coverage while practicing SOLID principles and clean architecture.",
      "Collaborated in agile sprints with peer developers, conducting code reviews and deploying containerized apps using Docker.",
    ],
  },
  {
    title: "Software Engineer (Backend)",
    company_name: "EUROPEAN DYNAMICS",
    icon: european_dynamics,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Developing robust full-stack applications with C#/.NET backend APIs and React frontend, using Entity Framework, PostgreSQL, and async messaging (RabbitMQ, Redis).",
      "Implementing JWT authentication with Keycloak, structured logging via Serilog, and responsive React UIs for secure, observable enterprise systems.",
      "Writing comprehensive unit/integration tests (xUnit/Moq) for backend/frontend, maintaining high code quality through CI/CD pipelines with Azure DevOps.",
      "Containerizing full-stack apps with Docker/Podman, debugging complex SQL queries (DBeaver), and optimizing React performance for production workloads.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
