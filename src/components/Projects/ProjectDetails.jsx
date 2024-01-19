import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { allProjects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectDetails = ({}) => {
  const { projectId } = useParams();

//   console.log(projectId)
//   const project = allProjects[projectId];
  const project = allProjects.find((project, index) => index +1 == parseInt(projectId));

//   console.log("index: ", index)
if (!project) {
  return <div>no project Found</div>
}
  const { name, description, linkToWebsite, tags, image, source_code_link } = project;


  return (
    <motion.div
    //   variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    //   initial="hidden"
    //   animate="show"
      className="bg-[#3f2952] p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={image}
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
          className="mt-[20px] text-secondary"
        >
          link to website
        </a>
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const firstWord = tag.color.split("-")[0].toLowerCase();
          // console.log(firstWord)
          return (
            <p
              key={`${name}-${tag.name}`}
              style={{ background: `${firstWord}` }}
              className={`text-[14px] p-[10px] rounded-full  text-[${firstWord}]`}
            >
              #{tag.name}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
