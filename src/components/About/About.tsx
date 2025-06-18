import img from "../../assets/sophia.jpeg";
import "./About.css";
const About = () => {
  return (
    <div>
      <header className="header2">
        <div className="contentContnr">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="letters">
            <h3>MY MISSION STATEMENT</h3>
            <p>
              Expertise, knowledge, and personalized support to help you achieve
              your aspirations and reach your full potential.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default About;
