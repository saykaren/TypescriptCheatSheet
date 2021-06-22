import React from "react";

const TestingTesting = () => {
  return (
    <>
      <h3>Add Jest</h3>
      <a
        href="https://github.com/testing-library/jest-dom"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        JEST Installation
      </a>
      <p>npm install --save-dev @testing-library/jest-dom</p>
      <h3>Add enzyme</h3>
      <p>npm i --save-dev enzyme enzyme-adapter-react-16</p>
      <h3>Add Chai</h3>
      <p>npm install chai-enzyme --save-dev</p>
      <p>in setupTests.js add</p>
      <p>{`import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });`}</p>
<p>Make a Testing folder to put under Components folder</p>
<p>{`Then add files with .test.js at the end example App.test.js (there should be one like that already move into the testing folder). Also update the import of App to match where App now is in the app. Example import App from './../app/App'; then update their typical test as we don't have /learn react in the app anymore.`}</p>
      <h3>Example Contents</h3>
      <p>{`example contents
import App from "./../App/App";
import React from "react";
import { shallow } from "enzyme";

describe("rendering App components", () => {
it("It renders App component without crashing", () => {
shallow();
});
});`}</p>
<h2>Example of testing components rendering</h2>
<p>{`import LandingPage from "./../app/LandingPage";
import { shallow } from "enzyme";

const wrapper = shallow(<LandingPage activeItem="Home" />);

describe("Render LandingPage", () => {
  it("It finds the class heroSection on LandingPage component", () => {
    expect(wrapper.find("h1").prop("id"));
  });

  it("It switches components depending upon activeItem", () => {
    var activeItemString = "MyWork";
    const wrapperMyWork = shallow(
      <LandingPage activeItem={activeItemString} />
    );
    const wrapperAboutMe = shallow(<LandingPage activeItem="AboutMe" />);
    // console.log(wrapperAboutMe.debug());
    expect(wrapperMyWork.find("MyWork")).toHaveLength(1);
    // Changed activeItem to "AboutMe"
    expect(wrapperAboutMe.find("MyWork")).toHaveLength(0);
    expect(wrapperAboutMe.find("Home")).toHaveLength(0);
    expect(wrapperAboutMe.find("AboutMe")).toHaveLength(1);
  });
});`}</p>
<h3>Triage Help: </h3>
<p>put <br/>{`console.log(wrapperAboutMe.debug());`} <br/>before expect section to see what testing is seeing when you run npn test</p>
<h3>Running Tests</h3>
<p>Then to test do npm test (which in package.json you will see it does react-scripts test
remember CTL+C stops command of testing and others</p>
      <h3>Resources</h3>
      <a
        href="https://scotch.io/tutorials/testing-react-components-with-enzyme-and-jest"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        AWESOME RESOURCE
      </a>
      <br />
      <br />
      <a
        href="https://www.youtube.com/watch?v=XNzVMP7Mnxg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Video Tutorial
      </a>
      <br />
      <br />
      <a
        href="https://www.youtube.com/watch?v=ZfvOHRX-FDM"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        React Query Based Component
      </a>
      <br />
      <br />
      <a
        href="https://enzymejs.github.io/enzyme/docs/installation/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Enzyme Installation
      </a>
      <br />
      <br />
      <a
        href="https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Enzyme Testing - Medium article
      </a>
      <br />
      <br />
      <a
        href="https://medium.com/@kaiz.hudda/how-to-setup-jest-enzyme-in-your-existing-react-app-in-5-mins-bf21841f4738"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        How to Setup Jest and Enyme in React App in 5 minutes
      </a>
      <h3>My Code Examples</h3>
      <a
        href="https://github.com/saykaren/Pam/tree/main/src/components/Testing"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Pam's Website 
      </a>
      <br />
      <br />
      <a
        href="https://github.com/saykaren/BreakingBad/tree/main/src/Components/Testing"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Breaking Bad Website 
      </a>
      <br />
      <br />
    </>
  );
};

export default TestingTesting;
