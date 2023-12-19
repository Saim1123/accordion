import React from "react";
import Accordion from "./Accordion";

const Accordions = ({ data }) => {
  return (
    <section>
      {data.map((data) => {
        return <Accordion key={data.id} {...data} />;
      })}
    </section>
  );
};

export default Accordions;
