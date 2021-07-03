import React from "react";

const Squash = () => {
  return (
    <div className="instructionalBox">
      <ul>
          <li>
              git add / git commit again
          </li>
        <li>
          git log to check my commits (do git commit --amend if I need to change
          something)
        </li>
        <li>git log --oneline</li>
        <li>then do</li>
        <li>git rebase -i HEAD~4 (if you have last 4 commits)</li>
        <li>s to write I believe</li>
        <li>hit S to write it to the commit</li>
        <li>add squash next to the ones I want to melt into the pick one.</li>
        <li>hit esc to get out of editing</li>
        <li>then do :</li>
        <li>add wq to write and quit</li>
        <li>
          update to s next to the ones you want squashed with the pick one.
        </li>
        <li>then hit esc to get out of editing</li>
        <li>then to :</li>
        <li>add wq to write and quit</li>
        <li>
          Then it will allow you to update your detail commit message. hit S if
          you need to write then esc. Then lastly the :wq to write and quit.
        </li>
      </ul>
      <a
        href="https://www.youtube.com/watch?v=2E23I9PzplM"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        YouTube Explanation
      </a><br/>

      <a
        href="https://stackoverflow.com/questions/35703556/what-does-it-mean-to-squash-commits-in-git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        StackOverflow: Squash Commits in Git
      </a><br/>

      <a
        href="https://www.youtube.com/watch?v=PZdVLaiAAmY"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        How to Squash Commits Video
      </a>
    </div>
  );
};

export default Squash;
