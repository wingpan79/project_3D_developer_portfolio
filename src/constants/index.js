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
  PHP,
  tailwind,
  nodejs,
  mysql,
  git,
  python,
  docker,
  Learn,
  HBS,
  carrent,
  jobit,
  tripguide,
  aws,
  House,
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
    title: "Database Designer",
    icon: mobile,
  },
  {
    title: "Agile Development",
    icon: backend,
  },
  {
    title: "Linux",
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
    name: "PHP",
    icon: PHP,
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Support Assistant",
    company_name: "Sovereign House GH,Bury",
    icon: House,
    iconBg: "#383E56",
    date: "May 2024 - Persent",
    points: [
      "Provided technical support to staff, troubleshooting hardware and software issues to ensure seamless operations.",
      "Assisted in setting up and maintaining IT equipment, gaining strong skills in problem-solving and attention to detail.",
      "Gained familiarity with customer-focused support processes, collaborating with team members to quickly resolve IT challenges.",
      "Developed strong communication skills by explaining technical solutions in simple terms to non-technical users",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Sovereign House GH,Salford",
    icon: Learn,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Persent",
    points: [
      "Assisted the teacher with setting up computers and projectors for classroom activities.",
      "Helped answer students' questions during lessons, providing support with classroom exercises.",
      "Taught children basic coding skills using age-appropriate programming languages (e.g., Scratch, Python).",
    ],
  },
  {
    title: "Analyst Programmer",
    company_name: "Healthology BIOsciences Limited,Hong Kong",
    icon: HBS,
    iconBg: "#383E56",
    date: "Jan 2015 - Feb 2024",
    points: [
      "Developed robust software applications using JavaScript, MySQL, and PHP,Laravel, contributing to the efficiency and functionality of key business operations.",
      "Implemented AWS services (S3, Load Balancer, EC2, RDS) for hosting applications across multiple countries, improving scalability and reliability.",
      "Generated and customized reports with Tableau and Metabase based on marketing and finance department requirements, providing actionable insights that supported data-driven decision-making.",
      "Utilized GitLab for version control and integrated it with Jira, enabling seamless tracking of code changes, issue management, and project progress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Aglie Octopus Energy Dashboard",
    description:
      "A simple, interactive dashboard that displays tomorrow's electricity prices for the Octopus Energy Agile tariff, helping you identify the cheapest and most expensive times to use electricity.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://wingpan79.github.io/Aglie-Octopus-Energy-Dashboard/",
  },
  {
    name: "Product API System",
    description:
      "A FastAPI-based RESTful API for managing products, categories, and images, with token-based authentication and middleware for secure access. It includes a feature to convert strings into labeled PDFs and uses MySQL for data storage, all containerized with Docker.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/wingpan79/FastAPI",
  },
  {
    name: "School Management System",
    description:
      "The School Management System is a web-based application designed to manage school operations, including student enrollment, attendance tracking, and user authentication for admins, teachers.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/wingpan79/School-Management-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
