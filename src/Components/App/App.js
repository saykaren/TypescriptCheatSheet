import React, { useState, useEffect } from "react";
import "../Styling/App.scss";
import GitCommands from "./GitCommands";
import FunctionalComponent from "./FunctionalComponent";
import PropsUseState from "./PropsUseState";
import InterfaceExamples from "./InterfaceExamples";
import AddTypeScript from "./AddingTypeScript";
import SectionComponent from "./SectionComponent";
import CreateReactAppSteps from "./CreateReactAppSteps.tsx";
import CharacterReferences from "./CharacterReferences.tsx";
import SassSteps from "./SassSteps";
import FilterFun from "./FilterFun";
import ReduceRacing from "./ReduceRacing";
import MappingMadness from "./MappingMadness";
import ResourceLinks from "./ResourceLinks";
import Footer from "./Footer";
import PropComponentSetup from "./PropComponentSetup";
import PythonBehave from "./PythonBehave";
import ProjectFolderSetup from "./ProjectFolderSetup";
import setPropsActive from "./SectionComponent";
import BasicHTML from "./BasicHTML";
import UseEffectHelp from "./UseEffectHelp";
import ClassComponentHelp from "./ClassComponents";
import ADACompliant from "./ADACompliant";
import FreeEbooks from "./FreeEbooks";
import RegEx from "./RegEx";
import MockData from "./MockData";
import Tutorials from "./Tutorials";
import TestingTesting from "./TestingTesting";
import SQLResources from "./SQLResources";
import ReactQuery from "./ReactQuery";
import ReactSnippets from "./ReactSnippets";
import CustomDomain from "./CustomDomain";
import Conflicts from "./Conflicts";
import Alias from "./Alias";
import SectionData from "./SectionData";

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
