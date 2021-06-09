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
      <h3>Resources</h3>
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
    </>
  );
};

export default TestingTesting;
