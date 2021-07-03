import React from "react";

const Errors = () => {
  return (
    <div className="instructionalBox">
      <details>
        <summary>error: unable to start editor 'code'</summary>
        <ul>
          <li>Ensure VS Code or other editor is setup with --wait {" "}
            <a
            href="https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config"
            target="_blank"
            rel="noopener noreferrer"
            >Add VS Code Editor</a>
          </li>
          <li>
            Make sure you drag Visual Studio Code app into the -Applications-
            folder Otherwise (as noted in the comments) you'll have to go
            through this process again after reboot
          </li>
          <li>
            Next, open Visual Studio Code Open the Command Palette via (⇧⌘P) and
            type shell command to find the Shell Command:
          </li>
          <li>Install 'code' command in PATH** command.</li>
        </ul>
      </details>
      <a
        href="https://stackoverflow.com/questions/29955500/code-not-working-in-command-line-for-visual-studio-code-on-osx-mac"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        StackOverflow Help
      </a>
    </div>
  );
};

export default Errors;
