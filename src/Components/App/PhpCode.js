import React, { useState } from "react";
import PhpCodeData from "../Data/PHPcodeData";

const PhpCode = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section>
      <input
        type="text"
        value={searchTerm}
        placeholder="PHP Tips"
        onChange={(e) => setSearchTerm(e.target.value)}
        id="inputSearchTerm"
      />
      <table>
        <tr>
          <th className="tableColumn">Action</th>
          <th className="tableColumn">Git command</th>
          <th className="tableColumn">Note</th>
        </tr>
        {PhpCodeData &&
          PhpCodeData.filter(
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
      <ul>
        <li>
          First had to do <code>brew update</code> make sure up to date <br />
          Then did <code>Brew tap shivammathur/homebrew-php</code> <br />
          Then composer was located at ./vendor/bin/phpspec desc
          Kgarcia/Php/Submarine <br />
          <a
            href="https://getcomposer.org/download/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Composer needed
          </a>
        </li>
        <li>
          <a
            href="https://www.php.net/manual/en/function.empty.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Php help - Variable handling functions
          </a>
        </li>
        <li>
          <a
            href="https://www.php.net/manual/en/language.oop5.visibility.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Visibility of a property (variable) details <br />
          </a>
          The visibility of a property (variable), a method or (as of PHP 7.1.0)
          a constant can be defined by prefixing the declaration with the
          keywords <b>public</b>, protected or private. Class members declared
          public can be accessed everywhere. Members declared <b>protected</b>{" "}
          can be accessed only within the class itself and by inheriting and
          parent classes. Members declared as
          <b>private</b> may only be accessed by the class that defines the
          member.
        </li>
        <li>
          <a
            href="https://www.designcise.com/web/tutorial/whats-the-difference-between-null-coalescing-operator-and-ternary-operator-in-php"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Elvis Operator ?: versus ?? Null Coalescing Operator
          </a>
        </li>
      </ul>
    </section>
  );
};

export default PhpCode;
