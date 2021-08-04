import React from "react";

const Prettier = () => {
  return (
    <div>
      <ul>
        <li>PhpStorm do Cmd+,</li>
        <li>Navigate to Tools-External-Prettier</li>
        <li>
          {`--tab-width=4
--write
--single-quote
--trailing-comma=all
--arrow-parens=always
$FilePathRelativeToProjectRoot$`}
        </li>
        <li>program: /usr/local/bin/prettier</li>
        <li>
          Then in Keymap section in External Tool we added a short key =
          Cmd+Shift+P
        </li>
        <li>
          Now if you are in file (not terminal) do the short key for it to work
        </li>
      </ul>
      <a
        href="https://prettier.io/docs/en/options.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Prettier
      </a>
    </div>
  );
};

export default Prettier;
