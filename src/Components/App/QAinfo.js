import * as React from "react";
import QA from "../Assests/QA.jpg";

const QAinfo = () => {
  return (
    <section>
      <img src={QA} alt="QA" className="imageSmallGroup" />
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
        <summary>Negative Vs Positive Testing</summary>
        <b>Positive Testing:</b> Happy path. Performed assuming everything will
        be as expected. It is performed with the assumption that only valid and
        relevant things will occur. Example input should only allow 0-9999
        numbers. Test by putting in numbers 0-9999 to ensure it works as
        expected.
        <br />
        <b>Negative Testing:</b> Performed to check the system for unexpected
        conditions. Provide invalid or improper data sets as inputs. Purpose of
        negative testing is to ensure that the software does not crash and
        remains stable with invalid data inputs. Same input but you put letters.
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
        <details>
          <summary>POST Bonus Info</summary>
          Contains a body section in the raw request. POST lets you stick form
          data into the body and not in the URL, so it makes for clean URLs and
          larger payloads
        </details>
        <details>
          <summary>GET Bonus Info</summary>
          Basically GET requests don’t have a ‘body’, it’s just headers and
          parameterized URL. So you can use a GET request to do anything you
          like, really. But you’re limited by the effective length of a URL,
          which can vary by browser
        </details>
      </details>
      <div>
        <h2>Resources</h2>
        <ul>
          <ol>
            <a
              href="https://testautomationu.applitools.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Free Test Automation University
            </a>
          </ol>
          <ol>
            <a
              href="https://automationpanda.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Automation Panda Blog
            </a>
          </ol>
          <ol>
            <a
              href="https://associationforsoftwaretesting.org/ast-testing-resources/?_ga=2.96231832.56234400.1633479848-1220061425.1633479848"
              target="_blank"
              rel="noopener noreferrer"
            >
              AST Testing Resources - Association for Software Testing
            </a>
          </ol>
        </ul>
      </div>
    </section>
  );
};

export default QAinfo;
