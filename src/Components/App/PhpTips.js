import React from "react";
import PhpTipsData from "../Data/PhpTipsData";

const PhpTips = () => {
  return (
    <>
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">PHP command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {PhpTipsData &&
          PhpTipsData.map((x, index) => (
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
        <br />
      </section>
    </>
  );
};

export default PhpTips;
