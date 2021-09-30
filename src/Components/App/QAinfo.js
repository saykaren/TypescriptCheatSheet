import * as React from "react";

const QAinfo = () => {
  return (
    <section>
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
    </section>
  );
};

export default QAinfo;
