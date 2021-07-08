import React from "react";
import VagrantData from "../Data/VagrantData";

const VagrantCommands = () => {
  return (
    <>
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">Command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {VagrantData &&
          VagrantData.sort((a, b) => a.action.localeCompare(b.action)).map(
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
        <a
          href="https://www.vagrantup.com/docs/providers/basic_usage"
          rel="noopener"
          target="_blank"
        >
          Vagrant Basic Usage
        </a>
        <br />
      </section>
    </>
  );
};

export default VagrantCommands;
