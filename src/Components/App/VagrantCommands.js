import React, { useState } from "react";
import VagrantData from "../Data/VagrantData";

const VagrantCommands = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Page"
        id="inputSearchTerm"
      />
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">Command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {VagrantData &&
          VagrantData.filter(
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
