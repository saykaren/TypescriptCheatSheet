import React, { useState, useEffect } from "react";
import "../Styling/App.scss";
import SectionComponent from "./SectionComponent";
import Footer from "./Footer";
import SectionData from "../Data/SectionData";

const App = () => {
  const [totalPropsActive, setTotalPropsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [propsActive, setPropsActive] = useState(totalPropsActive);

  useEffect(() => {
    setLoading(false);
  }, [totalPropsActive]);

  const toggleAction = () => {
    setLoading(true);
    setTotalPropsActive(!totalPropsActive);
    setPropsActive(!totalPropsActive);
  };

  return (
    <>
      <div className="App">
        <header className="App-header" onClick={(x) => toggleAction()}>
          sayKaren's Cheatsheet
        </header>
        <section className="instructionSection">
          {SectionData.data
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((item, indexData) => (
              <>
                <SectionComponent
                  title={item.title}
                  htmlElement={item.componentTitle}
                  propsActive={propsActive}
                  key={indexData}
                />
              </>
            ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
