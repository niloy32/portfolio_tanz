import "../App.css";
import { Layout } from "antd";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import IntroText from "../compnents/IntroText";
import AnimatedCard from "../compnents/AnimatedCard";
import EducationBanner from "../compnents/EducationBanner";
function HomePage() {
  const { Header, Footer, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Start from scale 50% and fully transparent
          animate={{ scale: 1, opacity: 1 }} // Animate to full size and full opacity
          transition={{ duration: 2 }} // Set the animation duration to 0.5 seconds
        >
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
            className="ProfileImage"
          />
          {/* intro Text Start */}
        </motion.div>
        {/* intro Text End */}

        <Header>Tanzimul Haque Niloy</Header>
        <IntroText />

        <Content>
          <div className="iconProfile">
            <LinkedinFilled style={{ color: "#0072b1 ", fontSize: "3.5rem" }} />
            <GithubFilled style={{ fontSize: "3.5rem" }} />
          </div>
          {/* Education Start */}
          <div>
            <h1 className="headerText">Education</h1>
            {/* <AnimatedCard /> */}
            <EducationBanner />
          </div>

          {/* Education END */}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default HomePage;
