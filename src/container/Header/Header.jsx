import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 2 }} className="app__header-info">
        <div className="app__header-badge">
          <div className="tag-cmp app__flex">
            <p className=" no-text-transform head-text ">&lt;coder&gt;</p>
            <p className="p-text">I create functional websites using efficient and readable code.</p>
          </div>
        </div>
      </motion.div>
      <div className="app__header-badge">
        <motion.div whileInView={{ y: [-100, 0], opacity: [0, 1] }} transition={{ duration: 2 }} className="app__header-img">
          <div className="badge-cmp amp__flex">
            <p className="p-text">Hello i'm</p>
            <h1 className="head-text">Edwin</h1>
          </div>
          <img src={images.profile} alt="profile-bg" />
        </motion.div>
      </div>

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 2 }} className="app__header-info">
        <div className="app__header-badge">
          <div className="tag-cmp app__flex">
            <div className="designer-text">
              <p className="head-text">
                <span1>d</span1>
                <span2>e</span2>
                <span3>s</span3>
                <span4>i</span4>
                <span5>g</span5>
                <span6>n</span6>
                <span1>e</span1>
                <span2>r</span2>{" "}
              </p>
              <p className="p-text">
                <span1>I </span1>
                <span2>create </span2>
                <span3>beautiful </span3>
                <span4>and </span4>
                <span5>intuitive </span5>
                <span6>websites </span6>{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
