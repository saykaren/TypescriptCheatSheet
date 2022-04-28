import React, { useState } from "react";
import VimCommandsData from "../Data/VimCommandsData";

const Vim = () => {
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
        {VimCommandsData &&
          VimCommandsData.filter(
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
            <a
              href="https://coderwall.com/p/adv71w/basic-vim-commands-for-getting-started"
              rel="noreferrer noopener"
              target="_blank"
            >
              Vim (language Git is in) Tips and Tricks
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Vim;
