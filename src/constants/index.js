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
  realestateImage1,
  crowdFundingApp,
  TelegramBot,
  qrcodevoting1,
  qrcodevoting2,
  qrcodevoting3,
  qrcodevoting4,
  qrcodevoting5,

  //ipfs project image import
  ipfs1,
  ipfs2,
  ipfs3,
  ipfs4,
  ipfs5,
  ipfs6,
  ipfs7,

  //import nitrobot
  nitrobot1,
  nitrobot2,
  nitrobot3,
  nitrobot4,

  //tokrn deploymant
  creatortoken,
  creatortoken2,

  //3d tool website
  threeDtool,
  threeDtool2,

  //creators
  creators,
  creators2,

  // freelancing
  freelanceBanner
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
    image:
      "https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwYmxhY2slMjBhZnJpY2FuJTIwbmlnZXJpYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Creator does.",
    name: "Endurance Murgho",
    designation: "CEO",
    company: "Deyspeak coop",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwYmxhY2slMjBhZnJpY2FuJTIwbmlnZXJpYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    testimonial: "He was a great intern!",
    name: "Mr Gbenga",
    designation: "Project Manager",
    company: "D0tCircleLabs",
    image:
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwYmxhY2slMjBhZnJpY2FuJTIwbmlnZXJpYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
  },
];

//

const allProjects = [

  // {
  //   name: "Disney cloned",
  //   description:
  //     "This is a Disney clone website platform designed to replicate the look and feel of the official Disney website, offering a similar user experience and content structure. Typically created for educational and portfolio purposes, the Disney clone site mimics the layout, color schemes, and interactive elements found on the official Disney site. It includes sections dedicated to various Disney movies and their classifications.",
  //   linkToWebsite: "https://disneywebclone2.netlify.app",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "#b6a6e8-text-gradient",
  //     },
  //     {
  //       name: "Firebase",
  //       color: "#8469d8-text-gradient",
  //     },
  //     {
  //       name: "Redux",
  //       color: "#8469d8-text-gradient",
  //     },
  //     {
  //       name: "Disney WebApp clone",
  //       color: "#69a2d8 -text-gradient",
  //     },
  //   ],
  //   image: [disney],
  //   source_code_link: "https://github.com/cReAtOR0009/disneyWebclone",
  //   category: "web2",
  //   keyFeatures: [],
  //   packagesUsed: []
  // },
  {
    name: "Deyspeak",
    description:
      "Introducing one of my standout projects featured in my portfolio, which i made Voluntarily as a fullStack web developer, while on the Deyspeak Developer Team – a language learning app waitlist website. Joining the exclusive waitlist offers you the opportunity to be at the forefront of a revolutionary African language learning experience. This app is meticulously designed to transcend language barriers, foster cultural connections, and empower users to communicate fluently in multiple African languages. As you explore my portfolio, discover how I contributed to creating a captivating and user-friendly platform. The waitlist website showcases my skills in crafting compelling content and an enticing user experience from Figma design, enticing visitors to embark on their linguistic journey.",
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
        name: "pure CSS",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [deyspeak],
    source_code_link: "https://github.com/cReAtOR0009/deyspeak",
    category: "web2",
    keyFeatures: [
      "State management using useState hook for loading state and individual letter states from A to Z",
      "Initialization of alphabet array containing characters A to Z and some additional characters ut8 dosen't recognize",
      "Setting loading state after a delay of 3000 milliseconds using setTimeout, to give Enough time For Loader Animation",
      "Generating random letters for each alphabet character using setInterval and pickRandom function, this ensure that all the Random Letters Displayed are Induvidually Rendered and StandAlone",
      "Rendering The loader animation until loading state becomes true",
      "Using AnimatePresence from framer-motion for smooth animations during component presence changes",
      "Applying animation variants for loader container and loader content using framer-motion",
      "Dynamic rendering of letters in a table format while loading",
      "Dynamic rendering of  text using motion spans while loading",
      "A count Down Timer counting Down to a Launching Date",
    ],
    packagesUsed: [
      "react-router-dom",
      "vite",
      "eslint",
      "react",
      "framer-motion",
      "dotenv",
      "react-one-signal",
    ],
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
        name: "Node.js",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [kasuwa],
    source_code_link: "https://github.com/",
    category: "web2",
    keyFeatures: [],
    packagesUsed: [],
  },
  {
    name: "QR Code Voting",
    description:
      "we were  Organizing a programme here in my school and we wanted only those that are present physically for the programme to be able to vote their favourite performances and also get some Data we need from participants also, i came about the idea of this Project which uses the react html5-qrcode library for scanning Qr code, I generated a number of qr code using the react-qr-code library, i stored the values of these qr codes in a database using mongodb and i rendered out these values and printed them also. the Qr Code was shared in the programme granting physical participants the priviledge to vote with a valid Qr Code. the Qr Code could only be used once, after which it gets invalidated as a used QRCode from the Backend and this is handled by the backend using Node js and Mongo Db for the Database, the election results can be checked and monitored by a registered and authenticated admin. using this web app, voting could only be done through the use of a valid and unused QR code",
    linkToWebsite: "https://blwvotingapp.netlify.app/",
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
        name: "react-qr-code",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "html5-qrcode",
        color: "#351d75 -text-gradient",
      },
      {
        name: "mongoDb",
        color: "#8469d8-text-gradient",
      },
      {
        name: "Nodejs",
        color: "#8469d8-text-gradient",
      },
    ],
    image: [
      // qrcodevoting1,
      // qrcodevoting2,
      // qrcodevoting3,
      qrcodevoting4,
      qrcodevoting5,
    ],
    source_code_link: "https://github.com/cReAtOR0009/QRCODE_VOTING",
    category: "web2",
    keyFeatures: [
      "Utilizes React useContext for providing state management to multiple components.",
      "Implements QR code scanning functionality using HTML5-QRCode library.",
      "Utilizes React useState hook for managing component state.",
      "Utilizes React createContext to create contexts for sharing state across components.",
      "Uses axios for making HTTP requests to a backend server.",
      "Implements form submission functionality with form validation.",
      "Utilizes React useEffect hook for performing side effects such as initializing the scanner instance and retrieving available cameras.",
      "Implements dynamic QR code scanning with camera access.",
      "Uses react-toastify for displaying toast notifications.",
      "Implements responsive design using CSS media queries.",
      "Utilizes React Router's Outlet component for nested routing.",
      "Implements animations and transitions using Framer Motion library.",
      "Uses HTML5-QRCode library for scanning QR codes.",
      "Implements a voting system with form submission functionality.",
      "Implements a provider component for sharing context values with children components - all Components of the App.",
      "Utilizes React Router for client-side routing.",
      "Implements a layout component for structuring the page layout.",
      "Uses React Router's BrowserRouter and Route components for routing.",
      "Utilizes React Router's createRoutesFromChildren function for defining routes.",
      "Utilizes React useContext hook to access context values.",
      "Implements dynamic styling based on context values.",
      "Utilizes inline styles to dynamically adjust the size and display of the QR code scanner.",
      "Implements conditional rendering based on the display state.",
      "Implements a button for casting a vote with an onClick event handler.",
      "Uses React state to manage the display size of the scanner.",
      "Implements a range input for adjusting the size of the scanner.",
      "Uses onChange event handler to update the display size.",
      "Implements dynamic styling using Tailwind CSS classes.",
      "Provides a user interface for adjusting the size of the QR code scanner.",
      "BACKEND",
    ],
    packagesUsed: [
      "react",
      "vite",
      "react-qr-code",
      "react-router-dom",
      "axios",
      "framer-motion",
      "react-toastify",
      "html5-qrcode",
      "postcss",
      "tailwindcss",
      "bcryptjs",
      "body-parser",
      "cookie-parser",
      "cors",
      "dotenv",
      "express",
      "jsonwebtoken",
      "mongoose",
      "nodemailer",
      "nodemon",
    ],
  },
  {
    name: "Nitro Type Bot PLayer",
    description:
      "using Chrome puppeteer(puppeteer-extra, puppeteer-extra-plugin-stealth to make bot not easily detected), I wrote a simulation that Plays the NitroType game by taking  in a username, password, typing speed, and play times as a command through a discord Bot, the Discord Bot sends these parameters to the server that hosts the Discord Bot and the Game Play Scripts triggers a Function which Lauches a puppeteer Browser (Puppetteer Extra), Heads over to the Nitotype website, logs in with the provided Parameters, then make a simulation of a Game Play- it types the words by taking a map of all the words to type when it finds it way to the typing stage, using the trim method, it gets all the words to type from the words container, sets them into an array after formatting properly using the trim string method by formatting, then it Converts typingSpeed to WPM(wordsPerSecond) by dividing the typing speed parameter by 60(1 second), gets delayed in milliseconds before typing the next word- 1000/ wordsPerSecond. then doing all these it types all the words of the array in the trimmed Array and delay by the derived delay in milliseconds, it keeps reapting this simulation untill the number of game play parameter is exhaused",
    linkToWebsite: "https://",
    tags: [
      {
        name: "bot",
        color: "#",
      },
      {
        name: "node",
        color: "#8469d8-text-gradient",
      },
      {
        name: "scripts",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "discord",
        color: "#351d75 -text-gradient",
      },
      {
        name: "simulation",
        color: "#8469d8-text-gradient",
      },
    ],
    image: [nitrobot2, creatortoken2, nitrobot3, nitrobot4],
    source_code_link: "https://github.com/cReAtOR0009/NITROBOTPLAYER",
    category: "web2",
    keyFeatures: [
      "Discord Bot Initialization: Initializes a Discord bot using the discord.js library and configures bot intents.",
      "Interaction Handling: Listens for interaction events, extracts parameters from interaction options.",
      "Puppeteer Integration: Utilizes Puppeteer for browser automation, applies a stealth plugin, and initializes a browser instance.",
      "Start Game Function: Automates logging into NitroType and starting a game session, taking parameters- username, password, typing speed, and play times.",
      "Error Handling: Implements multiple levels of error handling, catches and logs errors, and sends appropriate messages to Error Discord channels for Monitoring.",
      "Asynchronous Operations: Uses async/await extensively for handling asynchronous operations without blocking the event loop.",
      "Channel Communication: Communicates with Discord channels by sending messages using interaction.reply() and channel.send() methods.",
      "Play Loop: Runs the main game loop until the specified number of play times is reached, types race words, and sends updates to Discord channels.",
      "Timeout Handling: Sets timeout settings for various operations to prevent the script from hanging indefinitely, proceeds with alternative actions or logs errors if elements or operations are not found within a specified time.",
      "Environment Variables: Uses environment variables to store sensitive information like Discord API tokens and channel IDs.",
    ],
    packagesUsed: ["discord.js","dotenv", "puppeteer", "puppeteer-extra","puppeteer-extra-plugin-stealth", "node"],
  },
  {
    name: "A Real Estate Website",
    description:
      "I am pouring a lot of efforts into this, its a real estate web app that allows you to buy and sell real estate propeerties, basicaly you can signup as a regualar user and be priviledged to buy property or as an agent and be permitted to list real estate properties, properties listed would contain a very extensive detail of the property which includes amenities showcase, surroundind amenities, property sales and rent history, owners history, and also a link to virtual tour where you can preview properties virtually in 3d wherever you are in the world",
    linkToWebsite: "https://creator-real-estate-market.netlify.app/",
    tags: [
      {
        name: "React",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "Figma to Design",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Tailwind",
        color: "#8469d8-text-gradient",
      },
      {
        name: "React Router Dom",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [realestateImage1, screencapture],
    source_code_link: "https://github.com/cReAtOR0009/Real_Estate",
    category: "web2",
    keyFeatures: [
      "Redux Toolkit for state management and asynchronous logic",
      "Context API for global state management (CartContext and NavigationContext)",
      "Local storage usage for persisting cart state",
      "React Router DOM for client-side routing",
      "Protected routes for authentication (RequireAuth)",
      "Dynamic route configuration using createRoutesFromChildren",
      "Authentication logic (Signup, Login, Welcome)",
      "File upload functionality for property images",
      "Usage of useState hook for local state management (NavigationProvider)",
      "Dynamically adding and updating form fields (formReducer)",
      "Conditional rendering based on authentication status",
      "Handling complex state structures (e.g., nested objects)",
      "Dynamic routing with parameters (propertyid)",
      "Custom styling with CSS (App.css)",
      "React Router DOM for client-side routing",
      "Form handling techniques including controlled components and form submission",
      "Authentication logic with JWT tokens",
      "File upload functionality",
      "Dynamic form fields management",
      "Conditional rendering based on authentication status and form validation",
      "Error handling for form validation and API requests",
      "State management using React useState, UseContext, useReducer and Redux Toolkit",
      "API requests handling with Redux Toolkit's createApi and fetchBaseQuery",
      "Custom styling using Tailwind CSS classes",
      "Usage of various React hooks such as useState, useEffect, useReducer, useSelector, and useLocation",
      "Nested state management for complex data structures",
      "Form input validation with error message display",
      "Manipulation of arrays for features like additional features and nearby amenities, ratings, property history, and image uploads",
      "Handling field dependencies and dynamic state updates",
      "Form submission handling and data processing",
      "Dynamic field mapping to state properties",
      "Initialization of form fields with default values using useState",
    ],
    packagesUsed: [
      "React",
      "vite",
      "postcss",
      "tailwindcss",
      "react-redux",
      "react-router-dom",
      "react-icons",
      "@reduxjs/toolkit",
      "bcryptjs",
      "body-parser",
      "cookie-parser",
      "cors",
      "dotenv",
      "express",
      "jsonwebtoken",
      "mongoose",
      "nodemailer",
      "nodemon",
      "stripe",
    ],
  },
  {
    name: "portfolio Website",
    description:
      "My Portfolio website, showcasing my web2 and web3 journey as a Fullstack web developer, here you can journey with me as I highlight important details about my journey which includes a brief description of me, the technology I use, projects I have worked on and I am still working on, ways you can reach me, and more. :)",
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
    image: [portfolio],
    source_code_link: "https://github.com/cReAtOR0009/portfolio",
    category: "web2",
    keyFeatures: [
      " Utilizes react useContext for Providing Nav state Management to all Component.",
      "Utilizes React Router's Link component for navigation.",
      "Implements responsive design using CSS media queries.",
      "Uses Framer Motion for animations and transitions.",
      "Uses an Higher Order Function as a wrapper component for other components.",
      "Utilizes React Router's Outlet component for nested routing.",
      "Shows a loading progress bar before 3d Items load using Three.js and React Drei.",
      "Utilizes useProgress hook from react-three to track loading progress.",
      "Utilizes React Router's useParams hook to extract parameters from the URL.",
      "Retrieves project details based on the provided projectId.",
      "Utilizes staggered animations for multiple components.",
      "Utilizes React Router's Link component for internal navigation.",
      "Utilizes React Tilt for tilt effect on Cards Component.",
    ],
    packagesUsed: [
      "react",
      "@mail.js/browser",
      "@react-three-drei",
      "react-three-fiber",
      "framer-motion",
      "maath",
      "react-router-dom",
      "tailwindcss",
      "postcss",
      "react-icons",
      "react-toastify",
      "react-tilt",
      "react-vertical-timeline-component",
      "three",
      "dotenv",
    ],
  },

  //freelancing
   {
    name: "product Fetcher",
    description:
      "",
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
    image: [freelanceBanner],
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
    category: "freelancing",
    keyFeatures: [],
    packagesUsed: [],
  },

  {
    name: "fuel Price Fetcher",
    description:
      "",
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
    image: [freelanceBanner],
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
    category: "freelancing",
    keyFeatures: [],
    packagesUsed: [],
  },


  //api
  {
    name: "DeySpeak Language Learning Api",
    description:
      "",
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
    image: [freelanceBanner],
    source_code_link: "https://github.com/cReAtOR0009/nikeStore",
    category: "api",
    keyFeatures: [],
    packagesUsed: [],
  },
 
 
  // {
  //   name: "Nike Store",
  //   description:
  //     "As a web designer, I crafted a dynamic portfolio project showcasing Nike's athletic world. The website features the latest products like the Play With Electric Nike Adapt 2.0 Sneakers and emphasizes Nike's iconic Air technology. It offers an engaging user experience, allowing visitors to explore top-rated sales, featured items, and learn about Nike's commitment to community and sustainability. The design reflects my skills in creating visually appealing and user-friendly platforms, capturing the essence of Nike's sportsmanship and style.",
  //   linkToWebsite: "https://creator-nikestore.netlify.app",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "#b6a6e8-text-gradient",
  //     },
  //     {
  //       name: "Tailwindcss",
  //       color: "#8469d8-text-gradient",
  //     },
  //     {
  //       name: "Redux",
  //       color: "#8469d8-text-gradient",
  //     },
  //     {
  //       name: "Nike demo store",
  //       color: "#69a2d8 -text-gradient",
  //     },
  //   ],
  //   image: [creatornikestore],
  //   source_code_link: "https://github.com/cReAtOR0009/nikeStore",
  //   category: "web2",
  //   keyFeatures: [],
  //   packagesUsed: [],
  // },
  // {
  //   name: "todaydeliver Grocery api",
  //   description:
  //     "This is a Fullstack e-commerce website that seamlessly integrates a Grocery API with an Admin Panel, offering users a streamlined online grocery shopping experience. With secure authentication, an extensive product catalog, an intuitive shopping cart, and a user-friendly checkout, the platform ensures convenience across devices. The Admin Panel empowers administrators to efficiently manage products, users, and orders, with access to valuable analytics and reports. Technologically, the website adopts a Fullstack architecture, combining frontend frameworks- React.js with backend technology- Node.js, and MongoDB for the database.",
  //   linkToWebsite: "https://admin.todaydeliver.in/login",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "#b6a6e8-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "#8469d8-text-gradient",
  //     },
  //     {
  //       name: "Node.js",
  //       color: "#69a2d8 -text-gradient",
  //     },
  //     {
  //       name: "Firebase",
  //       color: "#69a2d8 -text-gradient",
  //     },
  //   ],
  //   image: [groceryapp],
  //   source_code_link: "https://github.com/cReAtOR0009/groceryapp",
  //   category: "web2",
  //   keyFeatures: [],
  //   packagesUsed: [],
  // },

  {
    name: "3d Product Website",
    description:
      "As made a 3d website that showcase a 3d tool using three js and webgl",
    linkToWebsite: "https://creator-3dproduct.netlify.app/",
    tags: [
      {
        name: "Three.js",
        color: "#b6a6e8-text-gradient",
      },
      {
        name: "webgi",
        color: "#8469d8-text-gradient",
      },
      {
        name: "typescript",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [threeDtool, threeDtool2],
    source_code_link: "https://github.com/3dToolWebsite",
    category: "web2",
    keyFeatures: [],
    packagesUsed: [],
  },
  // {
  //   name: "food ordering Website",
  //   description: "A fullstack food ordering website",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "#b6a6e8-text-gradient",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "#8469d8-text-gradient",
  //     },
  //     {
  //       name: "Framer-motion",
  //       color: "-text-gradient",
  //     },
  //     {
  //       name: "Redux",
  //       color: "#8469d8-text-gradient",
  //     },
  //     {
  //       name: "Node.js",
  //       color: "#b6a6e8",
  //     },
  //     {
  //       name: "Express.js",
  //       color: "#69a2d8 -text-gradient",
  //     },
  //     {
  //       name: "Stripe",
  //       color: "#69a2d8 -text-gradient",
  //     },
  //   ],
  //   image: [foodorder],
  //   source_code_link: "https://github.com/cReAtOR0009",
  //   category: "web2",
  //   keyFeatures: [],
  //   packagesUsed: []
  // },

  {
    name: "A simple Blog Website",
    description:
      "A simple Blog website that allows the user to create blogs using the #MERN stack",
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
        name: "Material UI",
        color: "#8469d8-text-gradient",
      },
      {
        name: "GSAP",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [blog1],
    source_code_link: "https://github.com/cReAtOR0009/simpleBlog1.git",
    category: "web2",
    keyFeatures: [],
    packagesUsed: [],
  },
  {
    name: "Imaginative Fictional CrowFunding web App",
    description:
      "using Ai to generate a story, fictional characters and assets, I Created a web app That celebrates the Bitcoin Halving Events as a tribute to a set of Guardians who are the Defenders of the Blockchian Technology. The website feature an ancient look that relay a message of an Ancient feel that was carefully crafted",
    linkToWebsite: "https://halvinguardian.netlify.app/",
    tags: [
      {
        name: "Blockchain",
        color: "violet-500",
      },
      {
        name: "ethers.js",
        color: "teal-500",
      },
      {
        name: "Ai",
        color: "lime-100",
      },
      {
        name: "timer",
        color: "teal-100",
      },
      {
        name: "fiction",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [ creators2, creators],
    source_code_link: "https://github.com/cReAtOR0009/creators.git",
    category: "web3",
    keyFeatures: [
      "using Ai to Generate Image assets and create a story Line",
      "Sound Effect for interaction",
      "Creative User interface that portrays an archaic Look",
      "A count Down Timer to bitcoin Halving, which is to be modified to monitor the Bitcoin halving event dynamically every four years with the smart contract",
      "Pragma directive for specifying the Solidity compiler version.",
      "Imports external contracts/interfaces from Chainlink and local contracts.",
      "Usage of error handling with custom error messages.",
      "Declaration of state variables including immutable and mapping types.",
      "Implementation of a modifier for access control.",
      "Constructor function for contract initialization.",
      "Implementation of a payable function to accept Ether transactions.",
      "Utilization of require statements for input validation.",
      "Implementation of withdrawal functions for contract owner.",
      "Usage of for loop optimization techniques for Scalability:",
      "a. Loading arrays into memory before iteration.",
      "b. Iterating over arrays stored in memory rather than storage.",
      "Usage of address array for tracking funders.",
      "Handling Ether transfer using call and transfer methods.",
      "Implementation of view functions for querying contract state.",
      "Documentation with NatSpec comments to specify contract details, author, and notices.",
      "Usage of useState and useEffect hooks for managing component state and side effects.",
      "Implementation of functions for Wallet Connection and interacting with Ethereum smart contracts.",
      "Handling user input and updating state accordingly.",
      "Rendering dynamic content based on state and data from external sources.",
      "Usage of conditional rendering to enable/disable buttons based on state.",
      "Utilizating Asynchronous Function for handling asynchronous operations like fetching data and sending transactions.",
      "Handling Ethereum wallet connection events and updating UI accordingly.",
      "Rendering components based on data passed as props.",
      "Proper organization of JSX elements into sections for readability and maintainability.",
    ],
    packagesUsed: [
      "chai",
      "ethers",
      "hardhat",
      "ethereum-waffle",
      "tailwindcss",
      "vite",
      "postcss",
      "solidity-coverage",
    ],
  },
  {
    name: "Blockchain CrowdFunding App",
    description:
      "A web3 crowdfunding app made and deployed to the Sepolia network by _creator, built with robust smart contract integration and minimal UI, this allows you to raise money for your Blockchain project securely in ETH or any specified Blockchain digital asset of your choice.",
    linkToWebsite: "https://creator-crowdfunding.netlify.app/",
    tags: [
      {
        name: "Solidity",
        color: "gray-500",
      },
      {
        name: "Ethers.js",
        color: "teal-500",
      },
      {
        name: "Blockchain",
        color: "violet-500",
      },
      {
        name: "Sepolia",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [crowdFundingApp],
    source_code_link: "https://github.com/cReAtOR0009/hardhat_fundme",
    category: "web3",
    keyFeatures: [
      "Pragma directive for specifying the Solidity compiler version.",
      "Imports external contracts/interfaces from Chainlink and local contracts.",
      "Usage of error handling with custom error messages.",
      "Declaration of state variables including immutable and mapping types.",
      "Implementation of a modifier for access control.",
      "Constructor function for contract initialization.",
      "Implementation of a payable function to accept Ether transactions.",
      "Utilization of require statements for input validation.",
      "Implementation of withdrawal functions for contract owner.",
      "Usage of for loop optimization techniques for Scalability:",
      "a. Loading arrays into memory before iteration.",
      "b. Iterating over arrays stored in memory rather than storage.",
      "Usage of address array for tracking funders.",
      "Handling Ether transfer using call and transfer methods.",
      "Implementation of view functions for querying contract state.",
      "Documentation with NatSpec comments to specify contract details, author, and notices.",
      "Usage of useState and useEffect hooks for managing component state and side effects.",
      "Implementation of functions for Wallet Connection and interacting with Ethereum smart contracts.",
      "Handling user input and updating state accordingly.",
      "Rendering dynamic content based on state and data from external sources.",
      "Usage of conditional rendering to enable/disable buttons based on state.",
      "Utilizating Asynchronous Function for handling asynchronous operations like fetching data and sending transactions.",
      "Handling Ethereum wallet connection events and updating UI accordingly.",
      "Rendering components based on data passed as props.",
      "Proper organization of JSX elements into sections for readability and maintainability.",
    ],
    packagesUsed: [
      "chai",
      "ethers",
      "hardhat",
      "@nomiclabs/hardhat-ethers",
      "@nomiclabs/hardhat-waffle",
      "@openzeppelin/contracts",
      "ethereum-waffle",
      "prettier",
      "tailwindcss",
      "vite",
      "postcss",
      "solidity-coverage",
    ],
  },
  {
    name: "CREATOR IPFS",
    description:
      "This project demonstrates and allows a user to upload files to IPFS (InterPlanetary File System) and obtain the public link to the pinned file. The project utilizes Express.js for the backend server that handles the file upload to IPFS,  using Multer for handling file request, utilizing ThirdwebStorage for interacting with IPFS it gets the the pinned file url and sends it as a response to the request and . It also uses React Vite for frontend, XHR in the Frontend for sending requests to the server, and packages like react-toastify and react-dropzone were also used.",
    linkToWebsite: "https://ipfs-frontend.onrender.com/",
    tags: [
      {
        name: "Solidity",
        color: "gray-500",
      },
      {
        name: "IPFS",
        color: "teal-500",
      },
      {
        name: "File system",
        color: "violet-500",
      },
      {
        name: "NFT",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [ipfs1, ipfs3, ipfs5],
    source_code_link: "https://github.com/cReAtOR0009",
    category: "web3",
    keyFeatures: [
      "File Upload to IPFS: Users can upload files to the IPFS network directly from the frontend interface.",
      "Progress Tracking: The interface displays the upload progress, allowing users to track the status of their uploads in real-time.",
      "Feedback Notifications: Toast notifications are used to provide feedback to the user, indicating whether the file upload was successful or if there was an error.",
      "Copy to Clipboard: Users can easily copy the generated IPFS URL to their clipboard with a single click, making it convenient to share or use the uploaded file.",
      "Express Server: The backend server is implemented using Express.js, providing a robust and scalable foundation for handling HTTP requests.",
      "IPFS File Upload: Files uploaded to the server are stored temporarily and then uploaded to the IPFS network using the ThirdwebStorage library.",
      "Error Handling: The server handles various error scenarios, such as missing files or internal server errors, providing appropriate responses to the client.",
      "Middleware Logging: Middleware logging is implemented to log server requests, helping in monitoring and debugging server activity.",
      "REST API Endpoints: The server exposes REST API endpoints for file upload (POST /upload) and basic server status (GET /).",
    ],
    packagesUsed: [
      "@thirdweb-dev/react",
      "@thirdweb-dev/sdk",
      "npm-check",
      "react",
      "react-dropzone",
      "react-toastify",
      "cross-env",
      "vite",
      "@thirdweb-dev/storage",
      "cors",
      "dotenv",
      "express",
      "multer",
      "nodemon",
      "path",
    ],
  },
  {
    name: "Erc20 Smart Contract Listener / Telegram Bot",
    description:
      "I wrote a web3 script, using -web3- library and infura as a Node Provider that listens to ERC20 token deployment on the Ethereum Blockchain using the EIP20 token standard, this script uses the infura RPC as a provider for the -web3- library, then checks continuosly through the Eth Blockchain for new block creation at a specified interval, then scans the block for all smartContract Deployed, filtering out only the ERC20 token smart Contracts, working  in line with a Telegram Bot using -node-telegram-bot-api- library, the script gets information from The Erc20 smart Contracts by talinkg advantage of the standard, formats the information according to it preference and broadcasts it to a Telegram Group with the help of the Telegram Bot, the Bot can only be started or stopped by allowed Admins in Telegram Group on the scripts msg id of Group Members as a reference to check for permitted Admins. the Bot can Be Triggered using the -/start-, command  on the Telegram Group",
    linkToWebsite: "https://t.me/+PcbQEyy5XjhmYjk0",
    tags: [
      {
        name: "Blockchain",
        color: "violet-500",
      },
      {
        name: "web.js",
        color: "teal-500",
      },
      {
        name: "Telegram",
        color: "lime-500",
      },
      {
        name: "Bot",
        color: "teal-800",
      },
      {
        name: "EVM",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [TelegramBot],
    source_code_link: "https://github.com/cReAtOR0009/TELEGRAM_BOT.git",
    category: "web3",
    keyFeatures: [
      "Configures environment variables using dotenv",
      // "Initializes an Express application for handling HTTP requests",
      "Creates a Telegram bot instance using node-telegram-bot-api",
      "Utilizes web3 library for interacting with the Ethereum blockchain",
      // "Implements bodyParser middleware to parse incoming JSON requests",
      "Sets up a periodic interval to alternate between two RPC URLs so I dont Overload a Single RPC before 24 Hours",
      "Defines eventDecodeLog array for decoding Ethereum event logs",
      "Contains allowedAdminId and allowed_Admins arrays for Admin authentication",
      "Implements functions for fetching blocks, contract deployments, and contract info",
      "Sends messages to Telegram chat based on contract-related events",
      "Saves data to JSON files using fs module",
      "Includes error handling for various scenarios",
      "Starts a Telegram bot listener for processing '/start' commands",
      "Calls Funtion on Smart Contract Using Their ABI",
      // "Starts an Express server to listen for incoming HTTP requests"
    ],
    packagesUsed: [
      "web3",
      "node-telegram-bot-api",
      "dotenv",
      "nodemon",
      "pm2",
      "fs",
    ],
  },
  {
    name: "Custom Token Deployment",
    description:
      "This project is a web3 Project that involves the creation and Deployment of an Erc20 following the EIP20 Standard Token named after me on the Ethereum Sepolia network",
    linkToWebsite:
      "https://sepolia.etherscan.io/address/0xA73e5943F1729ac5fD03fc3560F8591df6F93FF7#code",
    tags: [
      {
        name: "Blockchain",
        color: "violet-500",
      },
      {
        name: "Ethers.js",
        color: "teal-500",
      },
      {
        name: "Hardhat",
        color: "lime-500",
      },
      {
        name: "Web3",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [creatortoken2, creatortoken],
    source_code_link: "https://github.com/cReAtOR0009/creator-erc-20",
    category: "web3",
    keyFeatures: [
      "Follows the Secure Erc20 smart contract standard for erc20 token",
      "An Extension of the Erc20 smart contract which provides all the standard erc20 capabilities",
      "Includes a script that deploys smart contract and verifies smart contract when they are not deployed on highlighted test nets-hardhat and local network",
      "Uses a deploy script that can be used by anybody to deploy their own custom erc20 token ",
      "Uses hardhat configuration file to tailor compilation, deployment and verification to taste",
      "",
    ],
    packagesUsed: [
      "ethers",
      "hardhat",
      "@nomicfoundation/hardhat-toolbox",
      "@nomiclabs/hardhat-ethers",
      "@nomiclabs/hardhat-waffle",
      "@nomiclabs/hardhat-etherscan",
      "dotenv",
      "hardhat-deploy",
    ],
  },

  {
    name: "web3 Course",
    description:
      "This project is a web3 application that interacts with the Ethereum blockchain to manage and display transactions. The application includes functionalities related to connecting a user's wallet, sending transactions, fetching and displaying transaction history, and managing a dark/light theme toggle. The Ethereum interactions are facilitated by the ethers.js library, and the React framework is used for building the user interface, taking advantage of the blockchain technology, allowing you to send transactions and include a message and keyword which is stored on the blockchain immutably. This keyword is used to generate a corresponding GIF image that matches the keyword from the transaction details returned from the blockchain on the Ethereum blockchain after the transaction is completed.",
    linkToWebsite: "https://master--web3ethtransfer.netlify.app/",
    tags: [
      {
        name: "Blockchain",
        color: "violet-500",
      },
      {
        name: "Ethers.js",
        color: "teal-500",
      },
      {
        name: "Hardhat",
        color: "lime-500",
      },
      {
        name: "React",
        color: "#69a2d8 -text-gradient",
      },
      {
        name: "Web3",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [web3Course],
    source_code_link: "https://github.com/cReAtOR0009/web3course1.git",
    category: "web3",
    keyFeatures: [
      "Keeps track of the number of transactions",
      "Emits an event when a transfer occurs, including sender, receiver, amount, message, timestamp, and keyword",
      "Stores transfer details in a struct",
      "Allows adding transfers to the blockchain with specified receiver, amount, message, and keyword",
      "Provides a function to retrieve all transactions",
      "Provides a function to retrieve the count of transactions",
      "Manages transaction-related state and interactions with an Ethereum smart contract",
      "Utilizes React's useState hook for state management",
      "Connects to the Ethereum blockchain using ethers.js library",
      "Creates a TransactionContext to share state and functions with child components",
      "Retrieves transaction history from the smart contract and formats the data",
      "Sends transactions to the smart contract and handles user inputs",
      "Implements a theme toggle feature to switch between light and dark themes",
      "Manages scroll events to determine user's scroll position",
      "Performs initial setup tasks using useEffect hook",
      "Provides transaction-related states and functions to child components via Context.Provider",
      "Includes error handling for various scenarios to provide feedback to the user",
      "Utilizes environment variables using Vite",
      "Defines a custom hook for fetching GIFs based on a keyword with useEffect",
      "Initializes state for storing the fetched GIF URL",
      "Implements a function named 'fetchGifs' for fetching GIFs from the GIPHY API",
      "Uses the useEffect hook to trigger the fetchGifs function when the 'keyword' prop changes",
      "Returns the fetched GIF URL from the custom hook",
    ],
    packagesUsed: [
      "chai",
      "ethers",
      "hardhat",
      "@nomicfoundation/hardhat-toolbox",
      "@nomiclabs/hardhat-ethers",
      "@nomiclabs/hardhat-waffle",
      "tailwindcss",
      "vite",
      "postcss",
    ],
  },
 
  {
    name: "Blockchain Voting App Frontend Demo",
    description:
      "A Blockchain web3 App that allows blockchain enthusiasts to take advantage of the blockchain technology for decentralized voting, here you can take advantage of the blockchain and create a decentralized voting poll accessible to everyone, it gives you access to create elections and corresponding contestants. all information regarding the elections is stored on the blockchain making it immutable and secure.",
    linkToWebsite: "https://master--web3ethtransfer.netlify.app/",
    tags: [
      {
        name: "Solidity",
        color: "gray-500",
      },
      {
        name: "Ethers.js",
        color: "teal-500",
      },
      {
        name: "Blockchain",
        color: "violet-500",
      },
      {
        name: "Ethereum",
        color: "#69a2d8 -text-gradient",
      },
    ],
    image: [votingApp],
    source_code_link: "https://github.com/cReAtOR0009/BlockchainVotingApp.git",
    category: "web3",
    keyFeatures: [],
    packagesUsed: [],
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
    link: "https://www.twitter.com/Webmaniacz",
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
  // projects,
  socials,
  // web3projects,
  // freelancing,
  allProjects,
};
