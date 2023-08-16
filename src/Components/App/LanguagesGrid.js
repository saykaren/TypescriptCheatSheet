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
        <option value={"date"}>date</option>
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
        <ul>
          <li>
            <details>
              <summary>array_walk vs array_map vs array_filter</summary>
              <ul>
                <li>
                  <h2>array_map</h2>
                  <ul>
                    <li>
                      Cannot change the values inside arrays /never changes its
                      arguments
                    </li>
                    <li>Returns a new array</li>
                    <li>
                      Can receive an arbitrary number of arrays and iterate over
                      them in parallel
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>array_walk</h2>
                  <ul>
                    <li>Can change values inside array</li>
                    <li>
                      Only returns boolean / if you dont' want to create an
                      array as a resulting of traversing one array you should
                      use array_walk
                    </li>
                    <li>Only operates on one array at a time</li>
                    <li>
                      Cannot alter the number of elements of the original array
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>array_filter</h2>
                  <ul>
                    <li>
                      Picks only a subset of the elements of the array according
                      to a filtering function.
                    </li>
                    <li> It does preserve the keys.</li>
                  </ul>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LanguagesGrid;
