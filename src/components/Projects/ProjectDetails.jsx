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
      <h1 className=" text-center text-white text-[30px]">
        this page is currently in progress
      </h1>

      <motion.div className="bg-[#3f2952] mx-auto mt-[20px] p-5 rounded-2xl  w-full">
        <div className="mt-3">
          <h1 className="text-white text-center font-bold text-[30px]">
            {name}
          </h1>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <a
            href={linkToWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[150px] text-[25px]"
          >
            link to website
          </a>
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
        <div className="mt-4">
          <h1 className="text-[30px] text-center mb-[20px]">Key Features:</h1>
          {keyFeatures.map((keyFeature) => (
            <p className="mb-[10px] text-[20px] text-secondary">{keyFeature}</p>
          ))}
        </div>
        <div className="mt-4">
          <h1 className="text-[30px] text-center mb-[20px]">Packages Used:</h1>
          {packagesUsed.map((packagge) => (
            <ol className="mb-[10px] text-[20px] text-secondary">
              <li>{packagge}</li>
            </ol>
          ))}
        </div>
        <div className="mt-20  flex flex-wrap gap-8">
          {image.map((image, index) => {
            return (
              <div key={index} className="w-[320px] sm:h-[320px] h-[230px]">
                <img
                  src={image}
                  alt={`${name}`}
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

export default SectionWrapper(ProjectDetails, "");
