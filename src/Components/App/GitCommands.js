import React from "react";
import GitCommandData from "../Data/GitCommandsData";

const GitCommands = () => {
  return (
    <>
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">Git command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {GitCommandData &&
          GitCommandData.sort((a, b) => a.action.localeCompare(b.action)).map(
            (x, index) => (
              <tr>
                <td className="tableColumn">{x.action}</td>
                <td className="tableColumn">{x.command}</td>
                <td className="tableColumn">{x.note}</td>
              </tr>
            )
          )}
      </table>
      <section>
        <h1>Resources</h1>
        <a href="https://ohshitgit.com/" rel="noopener" target="_blank">
          Oh Shit Git Resource
        </a>
        <br />
        <a
          href="http://gitimmersion.com/lab_03.html"
          rel="noopener"
          target="_blank"
        >
          Basic Git
        </a>
        <br />
        <a
          href="https://git-school.github.io/visualizing-git/"
          rel="noopener"
          target="_blank"
        >
          Visual Git
        </a>
        <br />
        <a href="https://gitup.co/" rel="noopener" target="_blank">
          GitUp
        </a>
        <a
          href="https://chris.beams.io/posts/git-commit/"
          rel="noopener"
          target="_blank"
        >
          How to Write Commit Messages
        </a>
      </section>
    </>
  );
};

export default GitCommands;
