import React from "react";
import { data } from "./data";
import { Accordion } from "./Accordion";
import "../../style/Accordiaon1.css"

export const Track = () => {
  return (
    <div>
      <div>
        <header className="header">ORGANIZING COMMITTEE</header>
        
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
      
    </div>
  );
};