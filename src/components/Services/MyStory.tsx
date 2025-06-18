import video from "../../assets/video-1.mp4";
import "./style.css";
const MyStory = () => {
  return (
    <div>
      <div className="my-story-service-div-display">
        <div className="service-video-content">
          <h1>My Story and Service</h1>
          <div className="video-div">
            <video src={video} muted controls />
          </div>
          <p>
            My goal is to thoroughly understand your financial needs and then
            align the resources to help you meet or exceed them. I can help you
            evaluate near-term concerns and plan for long-term goals, be a
            sounding board for investment ideas, assist you in developing and
            executing a strategy that is precisely your own and helps you meet
            your needs.
          </p>
        </div>
        <div className="service-include-content">
          <h1>Services Include</h1>
          <ul>
            <li>Wealth Management</li>
            <li>Retirement Planning</li>
            <li>Business Planning</li>
            <li>401(k) Rollovers</li>
            <li>Trust Services</li>
            <li>Sustainable Investing</li>
            <li>529 Plans</li>
            <li>Corporate Retirement Plans</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
