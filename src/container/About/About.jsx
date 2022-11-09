import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

const info = [
  { title: "Front-end development", description: "Self-taught aspiring web developer, focused on front-end.", imgUrl: images.about05 },
  { title: "Design empathy", description: "I have 5 years of design experience in academic and professional settings.", imgUrl: images.about01 },
  { title: "Back-end development", description: "Some experience using python frameworks such as Flask", imgUrl: images.about06 },
  { title: "Database analysis", description: "Experience in querying and presenting data through Sqlite.", imgUrl: images.about02 },
];
const About = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h2 className="large-text">
        Background in Architecture and design consulting.<br></br> I thrive when translating technical problems into creative solutions<br></br> and passionate about creating user-centric products.
      </h2>
      <div className="app__profiles">
        {info.map((about, index) => (
          <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
             transition={{ duration: 2, type: "tween" }}
              className="app__profile-item" key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>



        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");

