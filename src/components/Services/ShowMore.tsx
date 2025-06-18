import React, { useState } from "react";

type Props = {
  content: string;
  maxChars?: number;
};

const ShowMoreLess: React.FC<Props> = ({ content, maxChars = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded(!isExpanded);

  const isLong = content.length > maxChars;
  const displayText =
    isExpanded || !isLong ? content : content.substring(0, maxChars) + "...";

  return (
    <div>
      <p>{displayText}</p>
      {isLong && (
        <button onClick={toggle} style={{ color: "blue", cursor: "pointer" }}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShowMoreLess;
