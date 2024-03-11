import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { allProjects } from "../../constants";
// import { fadeIn, textVariant } from "../../utils/motion";

const ProjectDetails = ({}) => {
  const { projectId } = useParams();

  const project = allProjects.find(
    (project, index) => index == parseInt(projectId)
  );

  //   console.log("index: ", index)
  if (!project) {
    return <div>no project Found</div>;
  }
  const {
    name,
    description,
    linkToWebsite,
    tags,
    image,
    keyFeatures,
    packagesUsed,
    source_code_link,
  } = project;

  return (
    <>
      <motion.div className="bg-[#3f2952] mx-auto mt-[20px] p-5 rounded-2xl  w-full">
        <div className="mt-3">
          <h1 className="text-white text-center font-bold text-[30px]">
            {name}
          </h1>
          <p className="mt-2 text-secondary sm:text-[20px]">{description}</p>
          <a
            href={linkToWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[150px]  underline hover:scale-[1.1]"
          >
            link to website
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            const firstWord = tag.color.split("-")[0].toLowerCase();
            // console.log(firstWord)
            return (
              <p
                key={`${name}-${tag.name}-${index}`}
                style={{ background: `${firstWord}` }}
                className={`text-[14px] p-[10px] rounded-full  text-[${firstWord}] `}
              >
                #{tag.name}
              </p>
            );
          })}
        </div>
        <div className="mt-4">
          <h1 className="  text-[20px] sm:[30px] underline-offset-8 text-center mb-[20px] underline">
            Key Features:
          </h1>
          {keyFeatures.map((keyFeature, index) => (
            <p
              key={`${name}-keyFeature-${index}`}
              className="mb-[10px] px-[5px]  rounded-[5px] border-l-[10px] border-l-solid text-[10px] sm:text-[20px] border-l-[#350d58] text-secondary hover:bg-[#915eff] hover:scale-[1.1] hover:text-[white] transition"
            >
              {keyFeature}
            </p>
          ))}
        </div>
        <div className="mt-4">
          <h1 className="text-[20px] sm:[30px] underline underline-offset-8 text-center mb-[20px]">
            Packages Used:
          </h1>
          <div className=" flex  flex-wrap gap-[10px] mb-[10px] text-[20px] text-secondary">
            {packagesUsed.map((packagge, index) => (
              <span
                key={`${name}-package-${index}`}
                className="p-[10px]  mb-[5px] rounded-[5px] border border-solid border-secondary text-[10px] sm:text-[20px] hover:bg-[#915eff] hover:scale-[1.1]  hover:text-[white] transition"
              >
                {packagge}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-20  flex flex-wrap gap-8">
          {image.map((image, index) => {
            return (
              <div key={index} className="w-[320px] sm:h-[320px] h-[230px]">
                <img
                  src={image}
                  alt={`${name}`}
                  key={`${name}-image-${index}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ProjectDetails, ``);
