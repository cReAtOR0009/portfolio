import { useState, useEffect, useContext } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { arrow, github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { allProjects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { ThemeContext } from "../../context/themeContext";

const ProjectCard = ({
  index,
  name,
  description,
  linkToWebsite,
  tags,
  image,
  source_code_link,
  category,
}) => {
  const truncateContent = (content, maxLength) => {
    // console.log(content);
    const words = content.split(" ");
    const truncated = words.slice(0, maxLength).join(" ");
    return words.length > maxLength ? `${truncated}...` : content;
  };

  const [windowsize, setWindowSize] = useState(window.innerWidth);

  const truncatedContent = truncateContent(description, 30);

  return (
    <motion.div
      key={index}
      variants={fadeIn("up", "spring", index * 0.081, 0.75)}
      initial="hidden"
      animate="show"
      className="bg-primary_300 p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image[0]}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <a
          href={linkToWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[20px] text-secondary underline underline-offset-4"
        >
          {category == "web2"
            ? "link to project"
            : category == "web3"
            ? "link to project"
            : "link to code/demonstration"}
        </a>
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-white text-[14px]">
          {truncatedContent}{" "}
          <Link
            className=" rounded text-white border-b-2 border-b-[#e63e3e] hover:underline underline-offset-4"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={`/projects/${index}`}
          >
            More details
          </Link>
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const firstWord = tag.color.split("-")[0].toLowerCase();
          // console.log(firstWord)
          return (
            <p
              key={`${name}-${tag.name}`}
              // style={{ color: `${firstWord}` }}
              className={`text-[14px] rounded-full  text-[${firstWord}] hover:scale-[1.1] transition`}
            >
              #{tag.name}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

const AllProjectsWithIndex = allProjects.map((value, index) => ({
  value,
  index,
}));

const web2 = AllProjectsWithIndex.filter(
  (project) => project.value.category == "web2"
);
const web3 = AllProjectsWithIndex.filter(
  (project) => project.value.category == "web3"
);
const freelancing = AllProjectsWithIndex.filter(
  (project) =>
    project.value.category == "freelancing" ||
    project.value.category == "webscrapping"
);

const api = AllProjectsWithIndex.filter(
  (project) => project.value.category == "api"
);

const ProjectSection = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [windowsize, setWindowSize] = useState(window.innerWidth);

  const [cardPerPage, setCardPerPage] = useState(3);
  const totalPages = Math.ceil(items.length / cardPerPage);

  const startIndex = currentIndex * cardPerPage;
  const endIndex = Math.min(startIndex + cardPerPage - 1, items.length - 1);
  const toDisplay = items.slice(startIndex, endIndex + 1);

  const handleLeftClick = () => {
    if (currentIndex <= 0) {
      return setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev - 1);
      // setAnimationKey((prevKey) => prevKey - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex >= totalPages - 1) {
      return setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
      // setAnimationKey((prevKey) => prevKey + 1);
    }
  };

  const updateDisplayItem = (index) => {
    setCurrentIndex(index);
    setAnimationKey((prevKey) => prevKey + 1); // Update the animation key to force re-render
  };

  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
      console.log("window resized...", windowsize);
    });

    if (windowsize > 1500) {
      setCardPerPage(3);
    } else if (windowsize < 1000) {
      setCardPerPage(2);
    }

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [windowsize, cardPerPage]);
  return (
    <>
      <div className="relative">
        <div
          className={`mt-20 flex flex-wrap items-stretch ${
            items.length > 2 ? "justify-center" : "justify-start"
          } gap-7`}
        >
          {toDisplay.map((project, index) => (
            <ProjectCard
              key={`project-${project.index}`}
              index={project.index}
              {...project.value}
            />
          ))}
        </div>

        <span
          className="absolute top-1/2 rotate-180 -left-6 p-2 rounded-full bg-primary  cursor-pointer"
          onClick={handleLeftClick}
        >
          <img
            src={arrow}
            alt="arrow image to scroll left"
            srcset=""
            className=""
          />
        </span>
        <span
          className="absolute top-1/2 -right-6 p-2 rounded-full bg-primary animate-pulse cursor-pointer"
          onClick={handleRightClick}
        >
          <img
            src={arrow}
            alt="arrow image to scroll left"
            srcset=""
            className=""
          />
        </span>
        <div className="flex justify-center items-center gap-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => updateDisplayItem(index)}
              className={`${
                currentIndex === index
                  ? " scale-[1.3] w-6"
                  : "hover:scale-[1.3]"
              } bg-primary p-1 my-6 w-4 h-2 rounded-full animate-slide-in`}
            >
              {/* {index + 1} */}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={`${styles.sectionSubText} ${
            theme == "dark" ? "text-white" : "text-secondary2"
          }`}>My Projects</p>
        <h2
          className={`${styles.sectionHeadText} ${
            theme == "dark" ? "text-white" : "text-secondary2"
          }`}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={textVariant(1)}
          initial="hidden"
          animate="show"
          className={`mt-3 ${
            theme == "dark" ? "text-white" : "text-secondary2"
          } text-[17px] max-w-3xl leading-[30px]`}
        >
          The Following projects showcases my skills and experience through
          real-world examples of my work, courses i Took and personal Projects.
          Each project is briefly described with links to code repositories and
          live demos in it. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <ProjectSection items={web2} />

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="my-[20px]"
      >
        {/* <p className={styles.sectionSubText}>My Web Projects</p> */}
        <h2
          className={`${styles.sectionHeadText} ${
            theme == "dark" ? "text-white" : "text-secondary2"
          }`}
        >
          My Web3 Projects.
        </h2>

        <ProjectSection items={web3} />
      </motion.div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="my-[20px]"
      >
        {/* <p className={styles.sectionSubText}>My Web Projects</p> */}
        <h2
          className={`${styles.sectionHeadText} ${
            theme == "dark" ? "text-white" : "text-secondary2"
          }`}
        >
          My Freelancing Journey...
        </h2>

        {/* <div className="mt-10 flex flex-wrap gap-7"> */}
        <ProjectSection items={freelancing} />
        {/* </div> */}
      </motion.div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="my-[20px]"
      >
        <h2
          className={`${styles.sectionHeadText} ${
            theme == "dark" ? "text-white" : "text-secondary2"
          }`}
        >
          APIs
        </h2>
        <ProjectSection items={api} />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects", "bg-darktext");
