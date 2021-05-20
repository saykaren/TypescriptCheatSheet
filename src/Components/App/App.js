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

const App = () => {
  const [totalPropsActive, setTotalPropsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [propsActive, setPropsActive] = useState(totalPropsActive);

  console.log({ totalPropsActive });
  console.log({ loading });

  useEffect(() => {
    setLoading(false);
  }, [totalPropsActive]);

  const toggleAction = () => {
    setLoading(true);
    setTotalPropsActive(!totalPropsActive);
    setPropsActive(!totalPropsActive);
  };

  return (
    <div className="App">
      <header className="App-header" onClick={(x) => toggleAction()}>
        sayKaren's Cheatsheet
      </header>
      <section className="instructionSection">
        <SectionComponent
          title={"Props Examples - Passing useState Items"}
          htmlElement={<PropsUseState />}
          propsActive={propsActive}
        />
        <SectionComponent
          title={"Interface Examples"}
          htmlElement={<InterfaceExamples />}
          propsActive={propsActive}
        />

        <SectionComponent
          title="Character References and Icons"
          htmlElement={<CharacterReferences />}
          propsActive={propsActive}
        />

        <SectionComponent
          title="Create a React App"
          htmlElement={<CreateReactAppSteps />}
          propsActive={propsActive}
        />
        <SectionComponent
          title={"Git Commands"}
          htmlElement={<GitCommands />}
          propsActive={propsActive}
        />
        <SectionComponent
          title={"Add SASS Step by Step"}
          htmlElement={<SassSteps />}
          propsActive={propsActive}
        />

        <SectionComponent
          title="Functional Component Intial Setup"
          htmlElement={<FunctionalComponent />}
          propsActive={propsActive}
        />
        <SectionComponent title="Filter Fun" htmlElement={<FilterFun />} />
        <SectionComponent
          title="Reduce Racing"
          htmlElement={<ReduceRacing />}
          propsActive={propsActive}
        />
        <SectionComponent
          title="Mapping Madness"
          htmlElement={<MappingMadness />}
          propsActive={propsActive}
        />

        <SectionComponent
          title="Adding TypeScript"
          htmlElement={<AddTypeScript />}
          propsActive={propsActive}
        />
        <SectionComponent
          title="Component Initial Setup with Interface Props"
          htmlElement={<PropComponentSetup />}
          propsActive={propsActive}
        />
        <SectionComponent
          title="Python Behave"
          htmlElement={<PythonBehave />}
          propsActive={propsActive}
        />
        <SectionComponent
          title="Proper Folder Structure"
          htmlElement={<ProjectFolderSetup />}
          propsActive={propsActive}
        />
        <SectionComponent
          title="HTML Basic"
          htmlElement={<BasicHTML />}
          propsActive={propsActive}
        />
        <SectionComponent
          title="UseEffect Help"
          htmlElement={<UseEffectHelp />}
          propsActive={propsActive}
        />
        <SectionComponent
          title="Class Component Help"
          htmlElement={<ClassComponentHelp />}
          propsActive={propsActive}
        />
                <SectionComponent
          title="ADA Compliant"
          htmlElement={<ADACompliant />}
          propsActive={propsActive}
        />
               <SectionComponent
          title="Free eBooks"
          htmlElement={<FreeEbooks />}
          propsActive={propsActive}
        />
        <SectionComponent
        title="RegEx and Online CheatSheet"
        htmlElement={<RegEx/>}
        propsActive={propsActive}
        />
                <SectionComponent
        title="APIs and Mock Data"
        htmlElement={<MockData/>}
        propsActive={propsActive}
        />
        <SectionComponent
          title="Resources"
          htmlElement={<ResourceLinks />}
          propsActive={propsActive}
        />
      </section>
      <Footer />
    </div>
  );
};

export default App;
