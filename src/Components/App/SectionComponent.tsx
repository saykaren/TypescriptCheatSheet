import React, { useState } from "react";
import toggleOff from "../Assests/toggle_off.png";
import toggleOn from "../Assests/toggle_on.png";

interface SectionComponentProps {
  title: string;
  htmlElement: HTMLElement;
}

const SectionComponent = ({ title, htmlElement }: SectionComponentProps) => {
  const [propsActive, setPropsActive] = useState(false);
  return (
    <>
      {propsActive ? (
        <div className="instructionalBox active">
          <h2>     <img
            src={toggleOff}
            className="exit"
            alt="Toggle off"
            onClick={(x) => setPropsActive(!propsActive)}
          /> {title}   </h2>
   
          <section className="section-main"> {htmlElement}</section>
          <img
            src={toggleOff}
            className="exit"
            alt="Toggle off"
            onClick={(x) => setPropsActive(!propsActive)}
          />
        </div>
      ) : (
        <div
          className="instructionalBox inactive"
          onClick={(x) => setPropsActive(!propsActive)}
        >
                    <img
            src={toggleOn}
            className="exit"
            alt="Toggle on"
            onClick={(x) => setPropsActive(!propsActive)}
          />
          <h2 className="TitleClosed">{title}</h2>

        </div>
      )}
    </>
  );
};

export default SectionComponent;
