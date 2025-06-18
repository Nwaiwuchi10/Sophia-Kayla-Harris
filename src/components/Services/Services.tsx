import { useState } from "react";
import "./Services.css";

import { Sections } from "./ServiceSections";
const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const contents = ["My Story and Services", "Client Service", "Location"];
  //   const sections = [
  //  <MyStory/>,
  //     "This is the section for Content 2.",
  //     "This is the section for Content 3.",
  //   ];
  return (
    <div className="service-page">
      <div className="service-border">
        <div className="p-4">
          {/* Flex Container */}
          <div className="service-toggle-contents">
            {contents.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer px-4 py-2 rounded-md shadow dropdown-hov ${
                  activeIndex === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </div>
            ))}
          </div>
          <hr className="service-hr" />

          <div className="border p-4 rounded-md bg-gray-100 shadow">
            {/* <h2 className="text-xl font-semibold mb-2">
              {contents[activeIndex]}
            </h2> */}
            <p className="service-section-screens">{Sections[activeIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
