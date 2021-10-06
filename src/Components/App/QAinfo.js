import * as React from "react";
import QA from "../Assests/QA.jpg"

const QAinfo = () => {
  return (
    <section>
      <img src={QA} alt="QA" className="imageSmallGroup"/>
      <details>
        <summary>Branch Testing Versus Boundary Testing</summary>
        <h3>What is Bottom Up Testing?</h3>
        <span>
          A part of integration testing.
          <br />
          The lowest level components are tested first, followed by testing
          higher level components.
          <br />
          The process is repeated until the testing components at the top of the
          hierarchy are tested.
        </span>
        <h3>What is Boundary Testing?</h3>
        <span>
          A type of testing which focuses on boundary or limit conditions of the
          software.
          <br />
          Stress Tests are part of Boundary Testing.
          <br />
          While the testing, which is focused on the limit conditions of the
          software is known as boundary testing.
        </span>
        <h3>What is Branch Testing?</h3>
        -All branches of the application program are tested at least once.
        <br />
        The testing of all the branches of the code, which is tested once, is
        known as branch testing.
      </details>
      <details>
        <summary>Assert Vs Verify</summary>
        In the case of assertions, if the assert condition is not met, test case
        execution will be aborted. <br /> In case of verify, tests will continue
        to run until the last test is executed even if assert conditions are not
        met
      </details>
      <details>
        <summary>Test Strategy Vs Test Plan</summary>
        A test strategy sets the general standard for testing activities. <br />
        A test plan, on the other hand, defines specific details of the QA
        responsibilities and process
      </details>
      <details>
        <summary>HTTP Methods / HTTP Verbs</summary>
        <ul>
          <ol>POST - create</ol>
          <ol>GET - Read</ol>
          <ol>PUT - Update/Replace</ol>
          <ol>PATCH - Update/Modify</ol>
          <ol>DELETE - Delete</ol>
        </ul>
      </details>
    </section>
  );
};

export default QAinfo;
