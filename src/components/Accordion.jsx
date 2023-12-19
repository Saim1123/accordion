import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Accordion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <header>
        <h2>{title}</h2>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Accordion;
