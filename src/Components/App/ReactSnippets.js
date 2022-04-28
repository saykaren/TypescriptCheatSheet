import React from "react";
import ReactSnippetsData from "../Data/ReactSnippetsData";

const ReactSnippets = () => {
  return (
    <>
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">Git command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {ReactSnippetsData &&
          ReactSnippetsData.map((x, index) => (
            <tr>
              <td className="tableColumn">{x.action}</td>
              <td className="tableColumn">{x.command}</td>
              <td className="tableColumn">{x.note}</td>
            </tr>
          ))}
      </table>
      <section>
        <h1>Resources</h1>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets"
          rel="noreferrer noopener"
          target="_blank"
        >
          Simple React Snippets
        </a>
        <br />
      </section>
    </>
  );
};

export default ReactSnippets;
