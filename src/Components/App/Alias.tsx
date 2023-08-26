import * as React from "react";

const Alias = () => {
  return (
    <>
      <h2>How to See Config File</h2>
      <p>git config -l (see my list of config file)</p>
      <p>
        The global Git configuration file is stored at $HOME/.gitconfig on all
        platforms.
      </p>
      <h2>Add to Config File</h2>
      <p>
        git config --global alias.pushIt 'push -u origin HEAD
        --force-with-lease'
      </p>
      <p>
        Command above adds pushIt alias that will do the items in the quotes
        without writting it all
      </p>
      <p>Other Helpful Commands to Add:</p>
      <p>
        Other helpful one are <br />
        $ git config --global alias.co checkout
        <br />
        $ git config --global alias.cob checkout -b
        <br />
        $ git config --global alias.br branch
        <br />
        $ git config --global alias.ci commit
        <br />
        $ git config --global alias.sw switch
        <br />$ git config --global alias.st status
      </p>
      <h3>Check Alias</h3>
      <p>git config --get alias.pushit</p>
      <h4>Adjust Alias</h4>
      <p>Just do the command that you would to add it</p>
      <p>git config --global alias.pushit 'push -u origin HEAD --force-with-lease' (I originally added the git in the quotes which messed it up'</p>
      <a
        href="http://git-scm.com/book/en/v2/Git-Basics-Git-Aliases"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Git Aliases Basics
      </a>
      <br />
      <a
        href="hhttps://git-scm.com/docs/giteveryday"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
       Git Overview
      </a>
      <br />
      <a
        href="https://blog.soltysiak.it/en/2017/01/set-visual-studio-code-as-default-git-editor-and-diff-tool/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Set Editor to VS Code
      </a>
      <br />
    </>
  );
};

export default Alias;
