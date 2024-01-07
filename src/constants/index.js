import {
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiLogoTelegram,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";
import {
  react,
  node,
  contentcreation,
  customer,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  linkdin_icon,
  twitter,
  telegram_icon,
  whatsapp_icon,
  portfolio,
  deyspeak,
  disney,
  kasuwa,
  foodorder,
  groceryapp,
  creatornikestore,
  blog1,
  web3Course,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech_Stack",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Web Developer",
    icon: backend,
  },
  {
    title: "Web Content Creator",
    icon: web,
  },
  {
    title: "Blockchain enthusiates",
    icon: mobile,
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
    title: "Front-End Developer (React.js)",
    company_name: "KasuwaFarms",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Febuary 2023 - April 2023",
    points: [
      "maintaining and Developing web applications using React.js and its Framworks",
      "Collaborating with cross-functional teams including ui/ux designers, devops engineers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Fullstack Web developer (Node.js, Express.js, React.js MongoDb)",
    company_name: "Deyspeak Language Learning App",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "March 2023 - October 2023",
    points: [
      "Developing and maintaining backend-service using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including ui/ux designers, devops engineers, frontend developers, other content creators, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern Web Developer",
    company_name: "DotcircleLabs",
    icon: reactjs,
    iconBg: "#383E56",
    date: "April 2022 - Now)",
    points: [
      "Assisted senior designers in creating website mockups and prototypes.",
      "Undergo several Web design Trainings and Practice.",
      "Familiarize with Professionals and industry Standard Work Experiences.",
      "Participated in quality assurance testing to ensure cross-browser compatibility and responsiveness.",
      "Contributed to reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer (React.js, Node.js)",
  //   company_name: "Kwakol Markets PTY Limited",
  //   icon: javascript,
  //   iconBg: "#E6DEDD",
  //   date: "June 2019 - November 2021)",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Collaborated with clients to gather requirements and translate them into visually appealing website designs.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Creator proved me wrong.",
    name: "Petwilson Olatunde",
    designation: "Product Manager",
    company: "AGRIARCHE LIMITED",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Creator does.",
    name: "Endurance Murgho",
    designation: "CEO",
    company: "Deyspeak coop",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial: "He was a great intern!",
    name: "Mr Gbenga",
    designation: "Project Manager",
    company: "D0tCircleLabs",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Disney cloned",
    description: "I cloned the Disney Website",
    linkToWebsite: "https://disneywebclone2.netlify.app",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "disney WebApp clone",
        color: "pink-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/cReAtOR0009/disneyWebclone",
  },
  {
    name: "Nike Store",
    description: "An e-commerce shoe store with modern UI",
    linkToWebsite: "https://creator-nikestore.netlify.app",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Nike demo store",
        color: "pink-text-gradient",
      },
    ],
    image: creatornikestore,
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
  },

  {
    name: "todaydeliver Grocery api",
    description: "A Grocery Api with Admin Panel",
    linkToWebsite: "https://admin.todaydeliver.in/login",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: groceryapp,
    source_code_link: "https://github.com/cReAtOR0009/groceryapp",
  },

  {
    name: "Deyspeak",
    description:
      "A waitlist website for a Language Learning App -DeySpeak, visitors can signup to join the waitlist for the App prior Launch",
    linkToWebsite: "https://phenomenal-gelato-370181.netlify.app/",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "pure css",
        color: "pink-text-gradient",
      },
    ],
    image: deyspeak,
    source_code_link: "https://github.com/cReAtOR0009/italianRestaurant",
  },
  {
    name: "Kasuwa",
    description:
      "A full-stack webiste with admin panel for kasuwa Farms that allows visitors to check the prices, percentage increase and decrease of Agricutural Commodities, Admin users can update the price of any commodity, add new commodity with corresponding price, delete commodity and more. percentage increase and decrease are dynamically calculated from the initial and new prices of commodity as they are updated",
    linkToWebsite: "https://newkasuwa.onrender.com/",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: kasuwa,
    source_code_link: "https://github.com/",
  },
  {
    name: "portfolio Website",
    description:
      "my Porfolio website, showcasing my web2 and web3 journey as a Fullstack web developer, here you can journey with me as i highlight important details about my journey which includes a brief description of me,technology I use, projects I have worked on, ways you can reach me and more",
    linkToWebsite: "https://web-dev-crib.netlify.app/",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "Three-js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/cReAtOR0009/portfolio",
  },
  {
    name: "food ordering Website",
    description: "A fullstack food ordering website",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "node-js",
        color: "blue-text-gradient",
      },
      {
        name: "Express-js",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: foodorder,
    source_code_link: "https://github.com/cReAtOR0009",
  },

  {
    name: "A simple Blog Website",
    description:
      " a simple Blog website that allows the user to create blogs using the #mern stack",
    linkToWebsite: "https://demoblog2.onrender.com/",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: blog1,
    source_code_link: "https://github.com/cReAtOR0009/simpleBlog1.git",
  },
];

const web3projects = [
  {
    name: "web3 Course",
    description: 
      "This project is a web3 application that interacts with the Ethereum blockchain to manage and display transactions. The application includes functionalities related to connecting a user's wallet, sending transactions, fetching and displaying transaction history, and managing a dark/light theme toggle. The Ethereum interactions are facilitated by the ethers.js library, and the React framework is used for building the user interface,  taking advantage of the blockchain technology,it allowing you send transactions and include a message, and keyword which is stored on the blockckain imutably, this keyword is used to generates a corresponding gif image that matches the keyword from the transaction details returned from the blockchain on the ethereum blochchain aftre the transaction is completed",
    linkToWebsite: "https://master--web3ethtransfer.netlify.app/",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "ethers",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: web3Course,
    source_code_link: "https://github.com/cReAtOR0009/web3course1.git",
  },
  {
    name: "Blockchain Voting App",
    description:
      "A Blockchain web3 App that allows blockchain enthusiasts to take advantage of the blockchain technology for decentralized voting, here you can take advantage of the blockchain and create a decentralized voting poll accessible to everyone, it gives you access to create elections and corresponding contestants. all informations regarding the elections are stored on the blockchain making it immutable and secure ",
    linkToWebsite: "https://creator-nikestore.netlify.app",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethers.js",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: web3Course,
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
  },
];

const freelancing = [
  {
    name: "web3 Course",
    description:
      "A web3 project taking advantage of the blockchain tech, allowing you send transactions and include data as a message, this data randomly generates a  gif image that match the data from the transaction message on the eth blochchain ",
    linkToWebsite: "https://disneywebclone2.netlify.app",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "ethers",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/cReAtOR0009/disneyWebclone",
  },
  {
    name: "Blockchain Voting App",
    description:
      "A Blockchain web3 App that allows blockchain enthusiasts to take advantage of the blockchain technology for decentralized voting, here you can take advantage of the blockchain and create a decentralized voting poll accessible to everyone, it gives you access to create elections and corresponding contestants. all informations regarding the elections are stored on the blockchain making it immutable and secure ",
    linkToWebsite: "https://creator-nikestore.netlify.app",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethers.js",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: creatornikestore,
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
  },
];

const socials = [
  {
    platform: "telegram",
    icon: BiLogoTelegram,
    link: "https://t.me/SAGEmanolo",
  },

  {
    platform: "twitter",
    icon: BiLogoTwitter,
    link: "https://www.twitter.com/stTAIWOEMMANUEL",
  },

  {
    platform: "linkdin",
    icon: BiLogoLinkedin,
    link: "https://www.linkedin.com/in/taiwo-emmanuel-7683ab210",
  },

  {
    platform: "whatsapp",
    icon: BiLogoWhatsapp,
    link: "https://wa.me/+2347065049691",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  web3projects,
};
