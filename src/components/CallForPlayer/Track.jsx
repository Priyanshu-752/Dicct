import React from "react";
import { data } from "./data";
import { Accordion } from "./Accordion";
import "../../style/Accordion.css"

export const Track = () => {
  return (
    <div>
      <div>
        <h3 className="main-title">Tracks</h3>
        
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
      
    </div>
  );
};