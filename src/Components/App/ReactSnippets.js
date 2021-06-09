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
      <a href="https://ohshitgit.com/" rel="noopener" target="_blank" >Oh Shit Git Resource</a><br/>
      <a href="http://gitimmersion.com/lab_03.html" rel="noopener" target="_blank" >Basic Git</a><br/>
      <a href="https://git-school.github.io/visualizing-git/" rel="noopener" target="_blank" >Visual Git</a>
    </section>
</>
  );
};

export default ReactSnippets;
