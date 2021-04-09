import React from "react";
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

const App = () => {
  return (
    <div className="App">
      <header className="App-header">sayKaren's Cheatsheet</header>
      <section className="instructionSection">
        <SectionComponent
          title={"Props Examples - Passing useState Items"}
          htmlElement={<PropsUseState />}
        />
        <SectionComponent
          title={"Interface Examples"}
          htmlElement={<InterfaceExamples />}
        />

        <SectionComponent
          title="Character References and Icons"
          htmlElement={<CharacterReferences />}
        />

        <SectionComponent
          title="Create a React App"
          htmlElement={<CreateReactAppSteps />}
        />
        <SectionComponent
          title={"Git Commands"}
          htmlElement={<GitCommands />}
        />
        <SectionComponent
          title={"Add SASS Step by Step"}
          htmlElement={<SassSteps />}
        />

        <SectionComponent
          title="Functional Component Intial Setup"
          htmlElement={<FunctionalComponent />}
        />
        <SectionComponent title="Filter Fun" htmlElement={<FilterFun />} />
        <SectionComponent
          title="Reduce Racing"
          htmlElement={<ReduceRacing />}
        />
        <SectionComponent
          title="Mapping Madness"
          htmlElement={<MappingMadness />}
        />

        <SectionComponent
          title="Adding TypeScript"
          htmlElement={<AddTypeScript />}
        />
        <SectionComponent
          title="Component Initial Setup with Interface Props"
          htmlElement={<PropComponentSetup/>}
        />
        <SectionComponent
          title="Python Behave"
          htmlElement={<PythonBehave />}
        />
        <SectionComponent
        title="Proper Folder Structure"
        htmlElement={<ProjectFolderSetup/>}
        />
        <SectionComponent title="Resources" htmlElement={<ResourceLinks />} />
      </section>
      <Footer />
    </div>
  );
};

export default App;
