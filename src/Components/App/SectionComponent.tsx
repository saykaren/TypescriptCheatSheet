import React, { useState } from "react";
import toggleOff from "../Assests/toggle_off.png";
import toggleOn from "../Assests/toggle_on.png";

interface SectionComponentProps {
  title: string;
  htmlElement: HTMLElement;
  propsActive: boolean;
}

const SectionComponent = ({
  title,
  htmlElement,
  propsActive,
}: SectionComponentProps) => {
  const [forceOpen, setForceOpen] = useState(false);

  console.log({ propsActive });
  return (
    <>
      {propsActive || forceOpen ? (
        <div className="instructionalBox active">
          <h2>
            {" "}
            <img
              src={toggleOff}
              className="exit"
              alt="Toggle off"
              onClick={(x) => setForceOpen(!forceOpen)}
            />{" "}
            {title}{" "}
          </h2>

          <section className="section-main"> {htmlElement}</section>
          <img
            src={toggleOff}
            className="exit"
            alt="Toggle off"
            onClick={(x) => setForceOpen(!forceOpen)}
          />
        </div>
      ) : (
        <div
          className="instructionalBox inactive"
          onClick={(x) => setForceOpen(!forceOpen)}
        >
          <img
            src={toggleOn}
            className="exit"
            alt="Toggle on"
            onClick={(x) => setForceOpen(!forceOpen)}
          />
          <h2 className="TitleClosed">{title}</h2>
        </div>
      )}
    </>
  );
};

export default SectionComponent;
