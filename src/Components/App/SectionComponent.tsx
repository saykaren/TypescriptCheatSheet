import React, { useState } from "react";

interface SectionComponentProps {
  title: string;
  htmlElement: HTMLElement;
}

const SectionComponent = ({ title, htmlElement }: SectionComponentProps) => {
  const [propsActive, setPropsActive] = useState(false);
  return (
    <>
      {propsActive ? (
        <div className="instructionalBox">
          <h2>{title}</h2>
          <span className="exit" onClick={(x) => setPropsActive(!propsActive)}>
            X
          </span>
          <section className="section-main"> {htmlElement}</section>
          <span className="exit" onClick={(x) => setPropsActive(!propsActive)}>
            X
          </span>
        </div>
      ) : (
        <div
          className="instructionalBox"
          onClick={(x) => setPropsActive(!propsActive)}
        >
          <h2>{title}</h2>
          Open
        </div>
      )}
    </>
  );
};

export default SectionComponent;
