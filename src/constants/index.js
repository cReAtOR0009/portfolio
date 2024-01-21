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
  votingApp,
  screencapture,
  crowdFundingApp
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
    title: "smartContract developer",
    icon: mobile,
  },
  {
    title: "Blockchain developer",
    icon: mobile,
  },
  {
    title: "Web Content Creator",
    icon: web,
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
    date: "April 2022 - Now",
    points: [
      "Assisted senior designers in creating website mockups and prototypes.",
      "Undergo several Web design Trainings and Practice.",
      "Familiarize with Professionals and industry Standard Work Experiences.",
      "Participated in quality assurance testing to ensure cross-browser compatibility and responsiveness.",
      "Contributed to reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancing",
    company_name: "Fiverr, Upwork, Discord...",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "June 2023 - Now)",
    points: [
      "Making web bots for fetching data and automating web task",
      "writting web bot for listening to blockchain events, and Telegram Bots ",
      "writting webscrapper, Discord Bot, Game Playing bot",
      "Helping client deploy web applications on node js server",
    ],
  },
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
    name: "Disney clone",
    description: "this is a Disney clone website platform designed to replicate the look and feel of the official Disney website, offering a similar user experience and content structure. Typically created for educational and portfolio purposes, the Disney clone site mimics the layout, color schemes, and interactive elements found on the official Disney site. It include sections dedicated to various Disney movies, and their classifications.",
    linkToWebsite: "https://disneywebclone2.netlify.app",
    tags: [
      {
        name: "react",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Firebase",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Redux",
        color: "#8469d8-text-gradient",
      },
      {
        name: "disney WebApp clone",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/cReAtOR0009/disneyWebclone",
  },
  {
    name: "Nike Store",
    description: "As a web designer, I crafted a dynamic portfolio project showcasing Nike's athletic world. The website features the latest products like the Play With Electric Nike Adapt 2.0 Sneakers and emphasizes Nike's iconic Air technology. It offers an engaging user experience, allowing visitors to explore top-rated sales, featured items, and learn about Nike's commitment to community and sustainability. The design reflects my skills in creating visually appealing and user-friendly platforms, capturing the essence of Nike's sportsmanship and style.",
    linkToWebsite: "https://creator-nikestore.netlify.app",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Redux",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Nike demo store",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: creatornikestore,
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
  },

  {
    name: "todaydeliver Grocery api",
    description: "This is a Fullstack e-commerce website that seamlessly integrates a Grocery API with an Admin Panel, offering users a streamlined online grocery shopping experience. With secure authentication, an extensive product catalog, an intuitive shopping cart, and a user-friendly checkout, the platform ensures convenience across devices. The Admin Panel empowers administrators to efficiently manage products, users, and orders, with access to valuable analytics and reports. Technologically, the website adopts a Fullstack architecture, combining frontend frameworks- React.js  with backend technology- Node.js , and MongoDb for database",
    linkToWebsite: "https://admin.todaydeliver.in/login",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "CSS",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Node js",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Firebase",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: groceryapp,
    source_code_link: "https://github.com/cReAtOR0009/groceryapp",
  },

  {
    name: "Deyspeak",
    description:
      "Introducing one of my standout projects featured in my portfolio – an innovative language learning app waitlist website. Joining the exclusive waitlist offers you the opportunity to be at the forefront of a revolutionary African language learning experience. This app is meticulously designed to transcend language barriers, foster cultural connections, and empower users to communicate fluently in multiple African languages. As you explore my portfolio, discover how I contributed to creating a captivating and user-friendly platform. The waitlist website showcases my skills in crafting compelling content and an enticing user experience from Figma design, enticing visitors to embark on their linguistic journey.",
    linkToWebsite: "https://phenomenal-gelato-370181.netlify.app/",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "#8469d8-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "#8469d8-text-gradient",
      },
      {
        name: "pure css",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: deyspeak,
    source_code_link: "https://github.com/cReAtOR0009/italianRestaurant",
  },
  {
    name: "Kasuwa",
    description:
      "Presenting a dynamic full-stack website with an integrated admin panel for Kasuwa Farms. This platform provides visitors with real-time access to agricultural commodity prices, along with the percentage increase and decrease conveniently displayed on the landing page. Admin users wield the power to update commodity prices, add new commodities with corresponding prices, delete items, and more. A standout feature of this website lies in its use of dynamic APIs, exclusively serving user requests. The percentage increase and decrease are automatically calculated in real-time as admin users update commodity prices. This showcases the website's responsiveness and ability to provide users with the most current and accurate information.",
    linkToWebsite: "https://newkasuwa.onrender.com/",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "styled-component",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Nodejs",
        color: "#69a2d8 -text-gradient",
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
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Three-js",
        color: "#69a2d8 -text-gradient",
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
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "tailwind",
        color: "#8469d8-text-gradient",
      },
      {
        name: "framer-motion",
        color: "-text-gradient",
      },
      {
        name: "Redux",
        color: "#8469d8-text-gradient",
      },
      {
        name: "node-js",
        color: "#b6a6e8",
      },
      {
        name: "Express-js",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "stripe",
        color: "#69a2d8 -text-gradient",
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
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Express.js",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "material ui",
        color: "#8469d8-text-gradient",
      },
      {
        name: "gsap",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: blog1,
    source_code_link: "https://github.com/cReAtOR0009/simpleBlog1.git",
  },
  {
    name: "A Real Estate Website",
    description:
      " a simple Blog website that allows the user to create blogs using the #mern stacka simple Blog website that allows the user to create blogs using the #mern stack",
    linkToWebsite: "https://creator-real-estate-market.netlify.app/",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Fgma to Design",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Tailwind",
        color: "#8469d8-text-gradient",
      },
      {
        name: "reacr router Dom",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: screencapture,
    source_code_link: "https://github.com/cReAtOR0009/Real_Estate",
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
        color: "violet-500",
      },
      {
        name: "ethers",
        color: "teal-500",
      },
      {
        name: "hardhat",
        color: "lime-500",
      },
      {
        name: "react",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "web3",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: web3Course,
    source_code_link: "https://github.com/cReAtOR0009/web3course1.git",
  },
  {
    name: "Blockchain Voting App",
    description:
      "A Blockchain web3 App that allows blockchain enthusiasts to take advantage of the blockchain technology for decentralized voting, here you can take advantage of the blockchain and create a decentralized voting poll accessible to everyone, it gives you access to create elections and corresponding contestants. all informations regarding the elections are stored on the blockchain making it immutable and secure ",
    linkToWebsite: "https://master--web3ethtransfer.netlify.app/",
    tags: [
      {
        name: "Solidity",
        color: "gray-500",
      },
      {
        name: "ethers.js",
        color: "teal-500",
      },
      {
        name: "blockchain",
        color: "violet-500",
      },
      {
        name: "ethereum",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: votingApp,
    source_code_link: "https://github.com/cReAtOR0009/BlockchainVotingApp.git",
  },

  {
    name: "Blockchain CrowdFunding App",
    description:
      "A web3 crowdfunding app made and deployed to the sepolia network by _creator, built with robust smartContract Integration and minimal ui, this allows you to raise money for your Blockchain project securely in eth or any specified Blockchain digital asset of your choice",
    linkToWebsite: "https://creator-crowdfunding.netlify.app/",
    tags: [
      {
        name: "Solidity",
        color: "gray-500",
      },
      {
        name: "ethers.js",
        color: "teal-500",
      },
      {
        name: "blockchain",
        color: "violet-500",
      },
      {
        name: "sepolia",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: crowdFundingApp,
    source_code_link: "https://github.com/cReAtOR0009/hardhat_fundme",
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
        color: "violet-500",
      },
      {
        name: "ethers",
        color: "teal-500",
      },
      {
        name: "hardhat",
        color: "lime-500",
      },
      {
        name: "react",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "web3",
        color: "#69a2d8 -text-gradient",
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
        color: "gray-500",
      },
      {
        name: "ethers.js",
        color: "teal-500",
      },
      {
        name: "blockchain",
        color: "violet-500",
      },
      {
        name: "ethereum",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: creatornikestore,
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
  },
];

const allProjects =[
  {
    name: "Disney cloned",
    description: "this is a Disney clone website platform designed to replicate the look and feel of the official Disney website, offering a similar user experience and content structure. Typically created for educational and portfolio purposes, the Disney clone site mimics the layout, color schemes, and interactive elements found on the official Disney site. It include sections dedicated to various Disney movies, and their classifications.",
    linkToWebsite: "https://disneywebclone2.netlify.app",
    tags: [
      {
        name: "react",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Firebase",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Redux",
        color: "#8469d8-text-gradient",
      },
      {
        name: "disney WebApp clone",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/cReAtOR0009/disneyWebclone",
  },
  {
    name: "Nike Store",
    description: "As a web designer, I crafted a dynamic portfolio project showcasing Nike's athletic world. The website features the latest products like the Play With Electric Nike Adapt 2.0 Sneakers and emphasizes Nike's iconic Air technology. It offers an engaging user experience, allowing visitors to explore top-rated sales, featured items, and learn about Nike's commitment to community and sustainability. The design reflects my skills in creating visually appealing and user-friendly platforms, capturing the essence of Nike's sportsmanship and style.",
    linkToWebsite: "https://creator-nikestore.netlify.app",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Redux",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Nike demo store",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: creatornikestore,
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
  },

  {
    name: "todaydeliver Grocery api",
    description: "This is a Fullstack e-commerce website that seamlessly integrates a Grocery API with an Admin Panel, offering users a streamlined online grocery shopping experience. With secure authentication, an extensive product catalog, an intuitive shopping cart, and a user-friendly checkout, the platform ensures convenience across devices. The Admin Panel empowers administrators to efficiently manage products, users, and orders, with access to valuable analytics and reports. Technologically, the website adopts a Fullstack architecture, combining frontend frameworks- React.js  with backend technology- Node.js , and MongoDb for database",
    linkToWebsite: "https://admin.todaydeliver.in/login",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "CSS",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Node js",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Firebase",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: groceryapp,
    source_code_link: "https://github.com/cReAtOR0009/groceryapp",
  },

  {
    name: "Deyspeak",
    description:
      "Introducing one of my standout projects featured in my portfolio – an innovative language learning app waitlist website. Joining the exclusive waitlist offers you the opportunity to be at the forefront of a revolutionary African language learning experience. This app is meticulously designed to transcend language barriers, foster cultural connections, and empower users to communicate fluently in multiple African languages. As you explore my portfolio, discover how I contributed to creating a captivating and user-friendly platform. The waitlist website showcases my skills in crafting compelling content and an enticing user experience from Figma design, enticing visitors to embark on their linguistic journey.",
    linkToWebsite: "https://phenomenal-gelato-370181.netlify.app/",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "#8469d8-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "#8469d8-text-gradient",
      },
      {
        name: "pure css",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: deyspeak,
    source_code_link: "https://github.com/cReAtOR0009/italianRestaurant",
  },
  {
    name: "Kasuwa",
    description:
      "Presenting a dynamic full-stack website with an integrated admin panel for Kasuwa Farms. This platform provides visitors with real-time access to agricultural commodity prices, along with the percentage increase and decrease conveniently displayed on the landing page. Admin users wield the power to update commodity prices, add new commodities with corresponding prices, delete items, and more. A standout feature of this website lies in its use of dynamic APIs, exclusively serving user requests. The percentage increase and decrease are automatically calculated in real-time as admin users update commodity prices. This showcases the website's responsiveness and ability to provide users with the most current and accurate information.",
    linkToWebsite: "https://newkasuwa.onrender.com/",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "styled-component",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Nodejs",
        color: "#69a2d8 -text-gradient",
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
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Three-js",
        color: "#69a2d8 -text-gradient",
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
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "tailwind",
        color: "#8469d8-text-gradient",
      },
      {
        name: "framer-motion",
        color: "-text-gradient",
      },
      {
        name: "Redux",
        color: "#8469d8-text-gradient",
      },
      {
        name: "node-js",
        color: "#b6a6e8",
      },
      {
        name: "Express-js",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "stripe",
        color: "#69a2d8 -text-gradient",
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
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Express.js",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "material ui",
        color: "#8469d8-text-gradient",
      },
      {
        name: "gsap",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: blog1,
    source_code_link: "https://github.com/cReAtOR0009/simpleBlog1.git",
  },
  {
    name: "A Real Estate Website",
    description:
      " a simple Blog website that allows the user to create blogs using the #mern stacka simple Blog website that allows the user to create blogs using the #mern stack",
    linkToWebsite: "https://creator-real-estate-market.netlify.app/",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Fgma to Design",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Tailwind",
        color: "#8469d8-text-gradient",
      },
      {
        name: "reacr router Dom",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: screencapture,
    source_code_link: "https://github.com/cReAtOR0009/Real_Estate",
  },
  {
    name: "web3 Course",
    description: 
      "This project is a web3 application that interacts with the Ethereum blockchain to manage and display transactions. The application includes functionalities related to connecting a user's wallet, sending transactions, fetching and displaying transaction history, and managing a dark/light theme toggle. The Ethereum interactions are facilitated by the ethers.js library, and the React framework is used for building the user interface,  taking advantage of the blockchain technology,it allowing you send transactions and include a message, and keyword which is stored on the blockckain imutably, this keyword is used to generates a corresponding gif image that matches the keyword from the transaction details returned from the blockchain on the ethereum blochchain aftre the transaction is completed",
    linkToWebsite: "https://master--web3ethtransfer.netlify.app/",
    tags: [
      {
        name: "blockchain",
        color: "violet-500",
      },
      {
        name: "ethers",
        color: "teal-500",
      },
      {
        name: "hardhat",
        color: "lime-500",
      },
      {
        name: "react",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "web3",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: web3Course,
    source_code_link: "https://github.com/cReAtOR0009/web3course1.git",
  },
  {
    name: "Blockchain Voting App",
    description:
      "A Blockchain web3 App that allows blockchain enthusiasts to take advantage of the blockchain technology for decentralized voting, here you can take advantage of the blockchain and create a decentralized voting poll accessible to everyone, it gives you access to create elections and corresponding contestants. all informations regarding the elections are stored on the blockchain making it immutable and secure ",
    linkToWebsite: "https://master--web3ethtransfer.netlify.app/",
    tags: [
      {
        name: "Solidity",
        color: "gray-500",
      },
      {
        name: "ethers.js",
        color: "teal-500",
      },
      {
        name: "blockchain",
        color: "violet-500",
      },
      {
        name: "ethereum",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: votingApp,
    source_code_link: "https://github.com/cReAtOR0009/BlockchainVotingApp.git",
  },

  {
    name: "Blockchain CrowdFunding App",
    description:
      "A web3 crowdfunding app made and deployed to the sepolia network by _creator, built with robust smartContract Integration and minimal ui, this allows you to raise money for your Blockchain project securely in eth or any specified Blockchain digital asset of your choice",
    linkToWebsite: "https://creator-crowdfunding.netlify.app/",
    tags: [
      {
        name: "Solidity",
        color: "gray-500",
      },
      {
        name: "ethers.js",
        color: "teal-500",
      },
      {
        name: "blockchain",
        color: "violet-500",
      },
      {
        name: "sepolia",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: crowdFundingApp,
    source_code_link: "https://github.com/cReAtOR0009/hardhat_fundme",
  },
]

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
  freelancing,
  allProjects
};
