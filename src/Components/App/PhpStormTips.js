import React, { useState } from "react";
import PhpTipsData from "../Data/PhpTipsData";

const PhpTips = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        id="inputSearchTerm"
      />
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">PHP command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {PhpTipsData &&
          PhpTipsData.filter(
            (item) =>
              item.action
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase()) ||
              item.command
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
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
        <a
          href="https://www.jetbrains.com/help/phpstorm/mastering-keyboard-shortcuts.html"
          rel="noopener"
          target="_blank"
        >
          Jet Brains Keyboard Shortcuts
        </a>
        <br />
        <a
          href="https://www.jetbrains.com/help/rider/Keymaps_Comparison_Windows.html#select_text"
          rel="noopener"
          target="_blank"
        >
          VS Code Shortcuts
        </a>
        <br /><br/>
        <div>
          Side tabs
          <ul>
            <li>
              Project - File Structure
            </li>
            <li>
              Structure - If inside a class file shows methods and functions 
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PhpTips;
