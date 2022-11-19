import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Work.scss";

const workinfo = [
  {
    title: "Leap",
    description: "Responsive landing page designed for desktop and mobile devices.",
    imgUrl: images.work04,
    webLink: "https://leap-test.netlify.app/",
    codeLink: "https://github.com/edwinhuang7/leap",
  },
  {
    title: "Makersplace",
    description: "Marketplace that allows users to upload files for 3d printing and connects them to 3d print makers",
    imgUrl: images.work01,
    webLink: "https://makersplace.herokuapp.com/",
    codeLink: "https://github.com/edwinhuang7/makersplace",
  },
  {
    title: "CS50: Finance",
    description: "Finance is a stock trading application that returns real-time stock prices through integration of an API.",
    imgUrl: images.work02,
    webLink: "https://finance-cs50-edwin.herokuapp.com/",
    codeLink: "https://github.com/edwinhuang7/finance",
  },
  {
    title: "Javascript30",
    description: "Javascript is 30 day vanilla Javascript challenge in which the participant completes 30 mini javascript projects in 30 days. ",
    imgUrl: images.work05,
    codeLink: "https://github.com/edwinhuang7/javascript30",
  },
];

const Work = () => {
  return (
    <div className="app__full-banner">
      {workinfo.map((block, index) => (
        <div>
          <div className="app__full-banner-item" id="parent">
            <div className="app__full-banner-text">
              <p className="bold-text">Featured Project</p>
              <p className="head-text ">{block.title}</p>
              <p className="p-text p-text-responsive">{block.description}</p>
              <a className="webLink" href={block.webLink}>
                <AiFillEye fontSize="3em" />
              </a>
              <a className="codeLink" href={block.codeLink}>
                <AiFillGithub fontSize="3em" />
              </a>
            </div>
            <motion.div whileInView={{ x: [-150, 0], opacity: [0, 1] }} transition={{ duration: 2 }} className="app__full-banner-image ">
              <img src={block.imgUrl} alt={block.title} />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppWrap(Work, "work");
