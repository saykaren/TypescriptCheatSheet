import React, { useState } from "react";
import LanguagesData from "../Data/LanguagesData";

const LanguagesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDataType, setFilterDataType] = useState("");
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Lanuages or functions"
        onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())}
        id="inputSearchTerm"
      />
      <select
        name="dataType"
        id="inputSearchTerms"
        value={filterDataType}
        onChange={(e) => setFilterDataType(e.currentTarget.value)}
      >
        <option value={""}>Select One</option>

        <option value={"array"}>array</option>
        <option value={"cookies"}>cookies</option>
        <option value={"loop"}>loop</option>
        <option value={"object"}>object</option>
        <option value={"string"}>string</option>
      </select>
      {searchTerm}
      <table>
        <tr>
          <th className="tableColumn">Technique</th>
          <th className="tableColumn">PHP</th>
          <th className="tableColumn">JavaScript</th>
          <th className="tableColumn">note</th>
        </tr>
        {LanguagesData &&
          LanguagesData.filter(
            (item) =>
              item.technique.toLocaleLowerCase().includes(searchTerm) ||
              item.php.toLocaleLowerCase().includes(searchTerm) ||
              item.javascript.toLocaleLowerCase().includes(searchTerm)
          )
            .filter((item) => item.dataType.includes(filterDataType))
            .sort((a, b) => a.technique.localeCompare(b.technique))
            .map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="tableColumn">{row.technique}</td>
                <td className="tableColumn">{row.php}</td>
                <td className="tableColumn">{row.javascript}</td>
                <td className="tableColumn">{row.note}</td>
              </tr>
            ))}
      </table>
      <section>
        <h1>Resources</h1>
        <ul>
          <li>
            <a
              href="https://www.w3schools.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              W3 Schools
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LanguagesGrid;
