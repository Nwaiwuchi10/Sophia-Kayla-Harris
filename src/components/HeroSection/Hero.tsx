import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import img1 from "../../assets/1-Picsart-AiImageEnhancer.jpg";
import img2 from "../../assets/bit.jpg";
import img3 from "../../assets/3-Picsart-AiImageEnhancer.jpg";
import { FaEnvelope } from "react-icons/fa";
import whatsapp from "../../assets/whatsapp.png";
const images = [img1, img2, img3];

const HeroSection: React.FC = () => {
  const phoneNumber = "+12402002516";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(
          rgba(10, 8, 12, 0.47), 
          rgba(0, 0, 0, 0.57)
        ), url(${images[currentImageIndex]})`,
      }}
    >
      <div className="hero-content">
        <h1>Sophia Kayla Harris</h1>
        <p className="esp-p">
          is a seasoned investment advisor with over 19 years of experience in
          cryptocurrency and other financial markets. She is a highly
          professional stockbroker, skilled in executing financial transactions
          through registered securities brokers.
        </p>
        <p>
          <a href="mailto:sophiakaylaharris@gmail.com">
            <FaEnvelope style={{ color: "white", fontSize: "30px" }} />
          </a>
        </p>
        <p>
          <span>Direct:</span>
          <span>(+12402002516) </span>
        </p>

        <button onClick={WhatsappClick}>Get Started</button>
      </div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </div>
  );
};

export default HeroSection;
