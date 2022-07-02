import React, { useState } from "react";
import SQLTipsData from "../Data/SQLTipsData";

const SQLResources = () => {
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
      <section>
        <table>
          <tr>
            <th className="tableColumn">Action</th>
            <th className="tableColumn">SQL code</th>
            <th className="tableColumn">Note</th>
          </tr>
          {SQLTipsData &&
            SQLTipsData.filter(
              (item) =>
                item.action.toLocaleLowerCase().includes(searchTerm) ||
                item.command.toLocaleLowerCase().includes(searchTerm)
            )
              .sort((a, b) => a.action.localeCompare(b.action))
              .map((x, index) => (
                <tr key={index}>
                  <td className="tableColumn">{x.action}</td>
                  <td className="tableColumn">{x.command}</td>
                  <td className="tableColumn">{x.note}</td>
                </tr>
              ))}
        </table>
      </section>
      <ul>
        <li>
          <details>
            <summary>Foriegn Key</summary>
            <code>CONTRAINT `FK_user_id` FOREIGN KEY (`user_address_id`) REFERENCES
          `user_address` (`user_address_id`) ON DELETE NO CASCADE ON UPDATE NO
          ACTION ON DELETE NO ACTION </code>
          <div>Example means when you delete a record no action is
          taken on that table that is referred by a foreign key.</div>
          InnoDB has the
          ability to take an automatic action to rectify situations: it can
          CASCADE, meaning, delete the referring record. (This would make sense
          for something like user_address.user_id. If you hard-delete a user,
          you probably want to hard-delete all of the user's addresses as well.)
          it can SET NULL, meaning, clear out the referring key. (This might
          make sense for something like file.last_modified_by. If you
          hard-delete a user, you might want the file's last-modified-by to
          become simply "unknown".) example ON UPDATE CASCADE ON DELETE CASCADE
          </details>

        </li>
        <li>
          <a
            href="https://sqlzoo.net/wiki/SELECT_Quiz"
            rel="noreferrer noopener"
            target="_blank"
          >
            Select Quiz
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=7S_tz1z_5bA&t=299s"
            rel="noreferrer noopener"
            target="_blank"
          >
            MySQL Tutorial for Beginners
          </a>
        </li>
        <li>
          <a
            href="https://www.sqlteaching.com/#!group_by"
            rel="noreferrer noopener"
            target="_blank"
          >
            SQL Teaching
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=5y8G72q-IpE"
            rel="noreferrer noopener"
            target="_blank"
          >
            EXPLAIN command in SQL nicely explained
          </a>
        </li>
      </ul>
    </>
  );
};

export default SQLResources;
