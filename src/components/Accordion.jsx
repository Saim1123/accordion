import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Accordion = ({ data }) => {
  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <div>
              <span>
                <FaPlus />
              </span>
              <h2>{data.title}</h2>
            </div>
            <p>{data.info}</p>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
