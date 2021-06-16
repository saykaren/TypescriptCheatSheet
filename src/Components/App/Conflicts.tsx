import * as React from "react";

const Conflicts = () => {
  return (
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
        Then in the js file itself click on the issues and it will allow you to
        select Compare changes
      </li>
      <li>Decide changes</li>
      <li>Ensure to save....</li>
      <li>Git status</li>
      <li>Git add file</li>
      <li>git commit (to conclude merge)</li>
    </ol>
  );
};

export default Conflicts;
