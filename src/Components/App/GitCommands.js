import React, { useState } from "react";
import GitCommandData from "../Data/GitCommandsData";

const GitCommands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Git Commands"
        onChange={(e) => setSearchTerm(e.target.value)}
        id="inputSearchTerm"
      />
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">Git command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {GitCommandData &&
          GitCommandData.filter(
            (item) =>
              item.action.toLocaleLowerCase().includes(searchTerm) ||
              item.command.toLocaleLowerCase().includes(searchTerm)
          )
            .sort((a, b) => a.action.localeCompare(b.action))
            .map((x, index) => (
              <tr>
                <td className="tableColumn">{x.action}</td>
                <td className="tableColumn">{x.command}</td>
                <td className="tableColumn">{x.note}</td>
              </tr>
            ))}
      </table>
      <section>
        <h1>Resources</h1>
        <ul>
          <li>
            {" "}
            <a href="https://ohshitgit.com/" rel="noopener" target="_blank">
              Oh Shit Git Resource
            </a>
          </li>
          <li>
            <a
              href="http://gitimmersion.com/lab_03.html"
              rel="noopener"
              target="_blank"
            >
              Basic Git
            </a>
          </li>
          <li>
            <a
              href="https://git-school.github.io/visualizing-git/"
              rel="noopener"
              target="_blank"
            >
              Visual Git
            </a>
          </li>
          <li>
            <a href="https://gitup.co/" rel="noopener" target="_blank">
              GitUp
            </a>
          </li>
          <li>
            <a
              href="https://chris.beams.io/posts/git-commit/"
              rel="noopener"
              target="_blank"
            >
              How to Write Commit Messages
            </a>
          </li>
          <li>
            Remove node_modules
            <ul>
              <li>
                Create a .gitignore file in the git repository if it does not
                contain one touch .gitignore
              </li>
              <li>
                Open up the .gitignore and add the following line to the file
                node_modules
              </li>
              <li>
                Remove the node_modules folder from the git repository
                <br />
                git rm -r --cached node_modules
              </li>
              <li>
                Commit the git repository without the node modules folder
                <br />
                git commit -m "Removed node_module folder"
              </li>
              <li>
                Push the repository to github
                <br />
                git push origin master
              </li>
              <li>
                After all of that, you should also add the gitignore and commit
                it to the repository
              </li>
              <li>git add .gitignore</li>
              <li>
                git commit -m "Updated the .gitignore file
                <br />
                git push origin master
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://learngitbranching.js.org/?locale=en_US"
              rel="noopener"
              target="_blank"
            >
              Play games to learn git
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default GitCommands;
