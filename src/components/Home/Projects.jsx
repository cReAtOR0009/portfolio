import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { allProjects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  linkToWebsite,
  tags,
  image,
  source_code_link,
}) => {
  const truncateContent = (content, maxLength) => {
    // console.log(content);
    const words = content.split(" ");
    const truncated = words.slice(0, maxLength).join(" ");
    return words.length > maxLength ? `${truncated}...` : content;
  };

  const truncatedContent = truncateContent(description, 30);

  return (
    <motion.div
    key={index}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className="bg-[#3f2952] p-5 rounded-2xl sm:w-[360px] w-full"
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
          className="mt-[20px] text-secondary hover:underline underline-offset-4"
        >
          link to website
        </a>
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">
          {truncatedContent}{" "}
          <Link
            className="p-[3px] rounded text-white bg-[#e63e3e] hover:underline underline-offset-4"
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
              style={{ background: `${firstWord}` }}
              className={`text-[14px] p-[10px] rounded-full  text-[${firstWord}] hover:scale-[1.1] transition`}
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
// console.log(web3);
const freelancing = AllProjectsWithIndex.filter(
  (project) => project.value.category == "freelancing"
);

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={textVariant(1)}
          initial="hidden"
          animate="show"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The Following projects showcases my skills and experience through
          real-world examples of my work, courses i Took and personal Projects.
          Each project is briefly described with links to code repositories and
          live demos in it. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {web2.map((project, index) => (
          <ProjectCard
            key={`project-${project.index}`}
            index={project.index}
            {...project.value}
          />
        ))}
      </div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="my-[20px]"
      >
        {/* <p className={styles.sectionSubText}>My Web Projects</p> */}
        <h2 className={styles.sectionHeadText}>My Web3 Projects.</h2>

        <div className="mt-10 flex flex-wrap gap-7">
          {web3.map((project, index) => (
            <ProjectCard
              key={`project-${project.index}`}
              index={project.index}
              {...project.value}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="my-[20px]"
      >
        {/* <p className={styles.sectionSubText}>My Web Projects</p> */}
        <h2 className={styles.sectionHeadText}>My Freelancing Journey...</h2>

        <div className="mt-10 flex flex-wrap gap-7">
          {freelancing.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project.value}
            />
          ))}
          loading...#currently bringing together the content for my Freelancing
          Journey
        </div>
      </motion.div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="my-[20px]"
      >
        <h2 className={styles.sectionHeadText}>APIs</h2>
        <div className="mt-10 flex flex-wrap gap-7">loading...#API</div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
