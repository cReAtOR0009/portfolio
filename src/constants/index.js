import { BiLogoTwitter, BiLogoWhatsapp, BiLogoTelegram, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
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
    foodorder
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
      id: "tech",
      title: "Tech_Stack",
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
      title: "Customer Service Representative",
      icon: creator,
    },
    {
      title: "Content Creator",
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
      title: "Backend developer (Node.js, Express.js, MongoDb)",
      company_name: "Deyspeak Language Learning App",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "March 2023 - May 2023",
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
      date: "April 2022 - November 2022)",
      points: [
        "Assisted senior designers in creating website mockups and prototypes.",
        "Implemented design changes based on client feedback and requirements.",
        "Conducted quality assurance testing to ensure cross-browser compatibility and responsiveness.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer (React.js, Node.js)",
      company_name: "Kwakol Markets PTY Limited",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "June 2019 - November 2021)",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Collaborated with clients to gather requirements and translate them into visually appealing website designs.",
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
      image: "https://media.licdn.com/dms/image/C4D03AQG-YcJoRA7p1w/profile-displayphoto-shrink_200_200/0/1648554553870?e=1690416000&v=beta&t=ArNT8_yyb2CeS8KUzAZjBVXjyPLngWFNTZSQ8CorBXg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Creator does.",
      name: "Endurance Murgho",
      designation: "CEO",
      company: "Deyspeak coop",
      image: "https://media.licdn.com/dms/image/D4D03AQHH8YClMCowcQ/profile-displayphoto-shrink_200_200/0/1680819235240?e=1690416000&v=beta&t=IqGRMgj9-lTl40GHvGRoBL4DMb5Xigao6-F76D84dyk",
    },
    {
      testimonial:
        "He was a great intern!",
      name: "Mrs Gbenga",
      designation: "Project Manager",
      company: "D0tCircleLabs",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Disney clone",
      description:
        "Disney Cloned Website",
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
      source_code_link: "https://github.com/cReAtOR0009/italianRestaurant",
    },
    {
      name: "Deyspeak",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "react-router-dom",
          color: "green-text-gradient",
        },
        {
          name: "deyspeak",
          color: "pink-text-gradient",
        },
      ],
      image: deyspeak,
      source_code_link: "https://github.com/cReAtOR0009/italianRestaurant",
    },
    {
      name: "Kasuwa",
      description:
        "A full-stack Landing Page for kasuwa Farms that allows visitors to check the prices, percentage increase and decrease of Agricutural Commodities ",
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
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: kasuwa,
      source_code_link: "https://github.com/",
    },
    {
      name: "portfolio Website",
      description:
        "my Porfolio website",
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
          name: "three-js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/cReAtOR0009/",
    },
    {
      name: "food ordering Website",
      description:
        "A fullstack food ordering website",
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
      source_code_link: "https://github.com/cReAtOR0009/portfolio",
    },
  ];


  const socials = [
    {platform:"telegram",
     icon:BiLogoTelegram,
     link:"https://t.me/SAGEmanolo"
    },

     {platform:"twitter",
     icon:BiLogoTwitter,
     link:"https://www.twitter.com/stTAIWOEMMANUEL"
    },

     {platform:"linkdin",
     icon:BiLogoLinkedin,
     link:"https://www.linkedin.com/in/taiwo-emmanuel-7683ab210"
    },

     {platform:"whatsapp",
     icon:BiLogoWhatsapp,
     link:"https://wa.me/+2347065049691"
    },
  
  ]
  
  export { services, technologies, experiences, testimonials, projects, socials };
  