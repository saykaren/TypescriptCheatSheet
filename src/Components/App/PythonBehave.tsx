import React, {useState} from "react";
import PythonData from "../Data/PythonData";


const PythonBehave = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <p>{`Command to start python enter python3 in terminal `}</p>
      <p>{`Command to end CRL + D`}</p>
      <ul>
        <ol>
          <a
            href="https://levelup.gitconnected.com/a-guide-to-upgrade-your-python-to-3-9-44ccb3eae31a"
            rel="noreferrer noopener"
            target="_blank"
          >
            Install and check Python Version
          </a>
        </ol>
        <ol>
          <a
            href="https://realpython.com/run-python-scripts/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Run Python
          </a>
        </ol>
        <ol>
          <a
            href="https://www.python.org/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Python Resource
          </a>
        </ol>
        <ol>
          {" "}
          <a
            href="https://stackoverflow.com/questions/3655549/xpath-containstext-some-string-doesnt-work-when-used-with-node-with-more"
            rel="noreferrer noopener"
            target="_blank"
          >
            StackOverflow - xPath Selector matches
          </a>
        </ol>
        <ol>
          <a
            href="https://www.pythoncheatsheet.org/"
            rel="noreferrer noopener"
            target="_blank"
          ></a>
        </ol>
        <ol>
          <a
            href="https://behave.readthedocs.io/en/stable/tutorial.html"
            rel="noreferrer noopener"
            target="_blank"
          >
            Behave Resource
          </a>
        </ol>
        <ol>
          {" "}
          <a
            href="https://www.freecodecamp.org/learn/scientific-computing-with-python/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Scientific Computing with Python - FreeCodeCamp
          </a>
        </ol>
        <ol>
          {" "}
          <a
            href="https://pypi.org/project/behave/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Behave Documentation
          </a>
        </ol>
      </ul>
      <h2>Testing Resources</h2>
      <ul>
        <ol>
          {" "}
          <a
            href="https://xpath.playground.fontoxml.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            xPath Playground
          </a>
        </ol>
        <ol>
          {" "}
          <a
            href="https://www.w3schools.com/xml/xml_xpath.asp"
            rel="noreferrer noopener"
            target="_blank"
          >
            xPath Syntax - W3
          </a>
        </ol>
        <ol>
          Finding and clicking image (with class of 'x-plus') from child span
          tag that has text of Help <br />
          Then click "xPath://span[text()='Help']/../../img[contains(@class,
          'x-plus')]"
        </ol>
        <ol>Then wait for "5" seconds</ol>
      </ul>
      <section>
        <input
        type="text"
        value={searchTerm}
        onChange={e=> setSearchTerm(e.target.value)}
        placeholder="Search Tips"
        />
        <table>
        <tr>
          <th className="tableColumn">Description</th>
          <th className="tableColumn">Python/Behave/Selenium Code</th>
          <th className="tableColumn">Note</th>
        </tr>
        {PythonData &&
          PythonData.filter(
            (item) =>
              item.action.toLocaleLowerCase().includes(searchTerm) ||
              item.command.toLocaleLowerCase().includes(searchTerm)
          )
            .sort((a, b) => a.action.localeCompare(b.action))
            .map((x, indexPy) => (
              <tr key={indexPy}>
                <td className="tableColumn">{x.action}</td>
                <td className="tableColumn">{x.command}</td>
                <td className="tableColumn">{x.note}</td>
              </tr>
            ))}
      </table>
      </section>
   
    </>
  );
};

export default PythonBehave;
