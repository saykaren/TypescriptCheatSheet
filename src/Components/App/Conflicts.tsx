import * as React from "react";

const Conflicts = () => {
  return (
    <div>
      <h2>Personal Work Process</h2>
      <ol>
        <li>git switch main (or master)</li>
        <li>git fetch origin (pull in all data from origin)</li>
        <li>git merge {"<conflict branch name>"}</li>
        <li>
          {`Should see "CONFLICT (content): Merge conflict in src/Components/Data/GitCommandsData.js
Automatic merge failed; fix conflicts and then commit the result.`}
        </li>
        <li>
          In terminal in vscode change from Terminal to Problems (click on merge
          conflict marker)
        </li>
        <li>
          Then in the js file itself click on the issues and it will allow you
          to select Compare changes
        </li>
        <li>Decide changes</li>
        <li>Ensure to save....</li>
        <li>Git status</li>
        <li>Git add file</li>
        <li>git commit (to conclude merge)</li>
      </ol>
      <ol>
        <li>cd into repository</li>
        <li>git pull</li>
        <li>git switch &lt;feature_branch&gt;</li>
        <li>git pull --rebase origin develop</li>
        <li>Navigate to VCS &gt;git&gt;resolve conflicts</li>
        <li>Once resolved do a git rebase --continue</li>
        <li>git pushit (alias pushit)</li>
      </ol>
    </div>
  );
};

export default Conflicts;
