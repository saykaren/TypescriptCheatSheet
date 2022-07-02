import React from "react";

const BasicHTML = () => {
  return (
    <ul>
      <li>
        {
          '<a href="https://saykaren.com" target="_blank" rel="noopener noreferrer"> sayKaren</a>'
        }
      </li>
      <li>
        <a
          href="https://html.spec.whatwg.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          HTML Standards
        </a>
      </li>
    </ul>
  );
};

export default BasicHTML;
