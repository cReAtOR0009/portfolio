import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { allProjects } from "../../constants";
import { ThemeContext } from "../../context/themeContext";
import { lightning, lightning2 } from "../../assets";
import { styles } from "../../styles";
// import { fadeIn, textVariant } from "../../utils/motion";

const ProjectDetails = ({}) => {
  const { projectId } = useParams();
  const { theme } = useContext(ThemeContext);
  const icon = theme !== "dark" ? lightning : lightning2;

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
    resultAndImapcts,
    challengesAndSolutions,
  } = project;

  const [activeImage, setActiveImage] = useState(image[0]);
  const changeMainImage = (activeImage) => {
    setActiveImage(activeImage);
  };

  const goBack = () => {
    window.history.back(); // This will navigate to the previous page
  };

  return (
    <>
      <motion.div
        className={`${
          theme == "dark" ? "bg-primary_100" : "bg-white"
        } mx-auto mt-[20px] p-5 rounded-2xl  w-full`}
      >
        <div
          className={`${
            theme == "dark" ? "text-white-100" : "text-secondary2"
          } cursor-pointer underline px-2`}
          onClick={goBack}
        >
          back
        </div>
        <div className="mt-3">
          <h2
            className={`${
              styles.heroHeadText2
            } text-[20px] sm:[30px] text-center mb-[20px] ${
              theme == "dark" ? "text-white-100" : "text-black"
            }`}
          >
            {name}
          </h2>
          <p
            className={`mt-2 ${
              theme == "dark" ? "text-white-100" : "text-secondary2"
            } sm:text-[20px]`}
          >
            {description}
          </p>
          <a
            href={linkToWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className={` text-primary mt-[150px]  underline `}
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
          <h2
            className={`${
              styles.heroSubText
            } text-[20px] sm:[30px] underline-offset-8 text-center mb-[20px] underline ${
              theme == "dark" ? "text-white-100" : "text-black"
            }`}
          >
            Key Features:
          </h2>
          {keyFeatures.map((keyFeature, index) => (
            <div
              key={`${name}-keyFeature-${index}`}
              className="flex items-center"
            >
              <img src={icon} alt="" className="w-8 h-8" />
              <p
                className={`${styles.paragraph}  ${
                  theme == "dark" ? "text-white-100-100" : "text-secondary2"
                } mb-[10px] px-[5px]  rounded-[5px] hover:bg-primary  hover:text-[white] transition`}
              >
                {keyFeature}
              </p>
            </div>
          ))}
        </div>

        {resultAndImapcts && (
          <div className="mt-4">
            <h2
              className={`${
                styles.heroSubText
              } text-[20px] sm:[30px] underline-offset-8 text-center mb-[20px] underline ${
                theme == "dark" ? "text-white-100" : "text-black"
              }`}
            >
              Results And Impact:
            </h2>

            {resultAndImapcts?.map((resultAndImapct, index) => (
              <div key={resultAndImapct.title}>
                <h3 className={`${styles.h3}`}>{resultAndImapct.title}</h3>

                <p
                  key={`${name}-keyFeature-${index}`}
                  className={`${styles.paragraph} ${
                    theme == "dark" ? "text-white-100" : "text-secondary2"
                  } mb-[10px] px-[5px]  rounded-[5px] border-l-[10px] border-l-solid  border-l-[#350d58] text-secondary hover:bg-primary  hover:text-[white] transition`}
                >
                  {resultAndImapct.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {challengesAndSolutions && (
          <div className="mt-4">
            <h2
              className={`${
                styles.heroSubText
              } font-bold text-[20px] sm:[30px] underline-offset-8 text-center mb-[20px] underline ${
                theme == "dark" ? "text-white-100" : "text-black"
              }`}
            >
              Challenges and Solution:
            </h2>
            {challengesAndSolutions.map((challengesAndSolution, index) => (
              <div
                key={`${name}-keyFeature-${index}`}
                className="flex items-center"
              >
                <img src={icon} alt="" className="w-8 h-8" />
                <div className="">
                  <h3 className={`${styles.h3}`}>{challengesAndSolution.title}</h3>
                  <p
                    className={` ${styles.paragraph} ${
                      theme == "dark" ? "text-white-100" : "text-secondary2"
                    } mb-[10px] px-[5px]  rounded-[5px]  text-secondary hover:bg-primary  hover:text-[white] transition`}
                  >
                    {challengesAndSolution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4">
          <h2
            className={`${
              styles.heroSubText
            } text-[20px] sm:[30px] underline-offset-8 text-center mb-[20px] underline ${
              theme == "dark" ? "text-white-100" : "text-black"
            }`}
          >
            Packages Used:
          </h2>

          <div className=" flex  flex-wrap gap-[10px] mb-[10px] text-[20px] text-secondary">
            {packagesUsed.map((packagge, index) => (
              <span
                key={`${name}-package-${index}`}
                className="p-[10px]  mb-[5px] rounded-[5px] border border-solid border-secondary text-[10px] sm:text-[20px] hover:bg-primary   hover:text-[white] transition"
              >
                {packagge}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-20  flex items-center justify-center flex-wrap gap-8">
          <div className=" h-[200px] w-[200px] sm:w-[100%] sm:h-[100%]">
            <img
              src={activeImage}
              alt={`activeImage`}
              className={` w-full h-full object-cover rounded-2xl`}
            />
          </div>
        </div>
        <div className="mt-20  flex justify-center  flex-wrap gap-8">
          {image.map((image, index) => {
            return (
              <div
                key={index}
                className={`${activeImage == image ? "bg-primary":""} w-[100px] h-[100px]  sm:h-[120px] border border-solid border-[#915eff] rounded p-[10px] hover:scale-[1.2] transition-all`}
                onClick={() => changeMainImage(image)}
              >
                <img
                  src={image}
                  alt={`${name}`}
                  key={`${name}-image-${index}`}
                  className="w-full h-full object-cover "
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <div>{image.map}</div>
    </>
  );
};

export default SectionWrapper(ProjectDetails, ``);
