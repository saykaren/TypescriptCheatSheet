export const GitCommandData = [
  {
    action: "Start tracking",
    command: "git init",
    note: "",
    category: "Basics",
  },
  {
    action: "Make a new file",
    command: "touch <filename+type>",
    note: "Example (touch example.html or example.js or example.css",
    category: "Basics",
  },
  {
    action: "Download latest changes in project",
    command: "git pull",
    note: "",
    category: "Basics",
  },
  {
    action: "Create new directory",
    command: "Mkdir <name-of-your_directory",
    note: "AKA file",
    category: "Basics",
  },
  {
    action: "Status of changes",
    command: "git status",
    note: "",
    category: "Basics",
  },
  {
    action: "Check a version",
    command: "(application) -version",
    note: "example: node -version or npm -version",
    category: "Basics",
  },
  {
    action: "Add work from staging",
    command: "git add",
    note: "If you do git add . (with period it will add all files in staging",
    category: "Basics",
  },
  {
    action: "Commit Work",
    command: "git commit -m '<message here>'",
    note: "<> not needed",
    category: "Basics",
  },
  {
    action: "Push to Github",
    command: "git push origin <branchName>",
    note: "Never push to master you need to be on a branch and push to a branch",
    category: "Basics",
  },
  {
    action: "Make a file with data in it",
    command: "Echo 'Hello World' <filename>",
    note: "This will put Hello World in the filename you put",
    category: "Basics",
  },
  {
    action: "Create a branch",
    command: "git checkout -b <New_branch_name>",
    note: "",
    category: "Branching",
  },
  {
    action: "Checkout older version",
    command: "git checkout <sha>",
    note: "",
    category: "Branching",
  },
  {
    action: "Delete Branches",
    command: "git branch -d <branch_name>",
    note: "",
    category: "Branching",
  },
  {
    action: "Resetting to Old Revision or Change head back to a given commit",
    command:
      "git reset --hard <commit_hash> or git reset --mixed <commit_hash>",
    note: "If after one commit all should be discarded. Find hash with git reflog. --hard removes all commits after that point. --mixed keeps changes in those commits you removed in as local changes so you have those future commits as local changes but not committed to the branch.",
    category: "Branching",
  },
  {
    action: "Checkout branch or main",
    command: "git checkout <branch or main>",
    note: "",
    category: "Branching",
  },
  {
    action: "List out branches",
    command: "git branch -a",
    note: "see local branches (git branch), see remote branches (git branch -r), see all local and remote branches (git branch -a)",
    category: "Branching",
  },
  {
    action: "Merge Back",
    command: "git checkout master git merge <branch_name>",
    note: "",
    category: "Branching",
  },
  {
    action: "Go to main directory",
    command: "cd ~",
    note: "",
    category: "Navigation",
  },
  {
    action: "Move to a folder",
    command: "cd <folder name>",
    note: "",
    category: "Navigation",
  },
  {
    action: "Go back a folder",
    command: "cd ..",
    note: "",
    category: "Navigation",
  },
  { action: "Exit", command: ".exit", note: "", category: "Navigation" },
  {
    action: "Check items in folder",
    command: "ls",
    note: "",
    category: "Navigation",
  },
  {
    action: "Recent updates",
    command: "git log",
    note: "",
    category: "Navigation",
  },
  {
    action: "Sha of current state",
    command: "git describe --always",
    note: "",
    category: "Basics",
  },
  {
    action: "Kill this program",
    command: "<control>+C",
    note: "You hit those keys",
    category: "Removing",
  },
  {
    action: "Delete all files in folder",
    command: "rm -f*",
    note: "",
    category: "Removing",
  },
  {
    action: "Rename",
    command: "git mv <old_file_name><new_file_name>",
    note: "",
    category: "Removing",
  },
  {
    action: "Delete File",
    command: "git rm --cached <file_name>",
    note: "",
    category: "Removing",
  },
  {
    action: "Stash Changes",
    command: "git stash",
    note: "Bring back stash by git stash pop",
    category: "Removing",
  },
  {
    action: "Create App",
    command: "npx create-react-app <name_all_lower_case>",
    note: "",
    category: "Creation",
  },
  {
    action: "Start App",
    command: "yarn start or npm start ",
    note: "",
    category: "Creation",
  },
  {
    action: "Confirm Remote Setup",
    command: "git remove -v",
    note: "",
    category: "Remote",
  },
  {
    action: "Add Upstream",
    command: "git remote add upstream <link>",
    note: "",
    category: "Remote",
  },
  {
    action: "Change Origin Link",
    command: "git remote set-url origin <link>",
    note: "",
    category: "Remote",
  },
  {
    action: "Open Program",
    command: "open -a vscode",
    note: "Open vscode",
    category: "Open",
  },
  {
    action: "Clone",
    command: "git clone <file_link>",
    note: "",
    category: "Clone",
  },
  {
    action: "Fetching/pulling down code",
    command: "fetch",
    note: "",
    category: "Branching",
  },
  {
    action: "Update Code",
    command: "git pull",
    note: "",
    category: "Branching",
  },
  {
    action: "Get from upstreamn main",
    command: "git pull upstream main",
    note: "",
    category: "Branching",
  },
  {
    action: "Rewrite commits",
    command: "git rebase -i main - autosquash",
    note: "I is for interactive",
    category: "Branching",
  },
  {
    action: "Shows all the commits",
    command: "git reflog",
    note: "Shows all the commits that have happened. Reflog is the diary of git via hash",
    category: "Other",
  },
  {
    action: "Push code up",
    command: "git push -u origin HEAD",
    note: "If you are on the latest verision of the branch",
    category: "Branching",
  },
  {
    action: "Install specific version",
    command: "npm install [package-name]@[version-number]",
    note: "",
    category: "Basics",
  },
  { action: "Up one level", command: "~", note: "Tilde", category: "Basics" },
  {
    action: "Go up one level from head",
    command: "Git checkout HEAD~",
    note: "Tilde",
    category: "Basics",
  },
  {
    action: "Checks out 2 from where you are at",
    command: "Git checkout HEAD~2",
    note: "Goes back 2 commits",
    category: "Basics",
  },
  {
    action: "1 commit back from main",
    command: "Git checkout main~1 ",
    note: "",
    category: "Basics",
  },
  { action: "Start", command: "git", note: "", category: "Basics" },

  {
    action: "Safely pull data",
    command: "git fetch",
    note: "Fetch is always safe",
    category: "Basics",
  },
  {
    action: "Fetches and merges (merge isn't always safe",
    command: "git pull",
    note: "Merge isn't always safe.",
    category: "Basics",
  },
  {
    action: "Suggested push",
    command: " git push -u origin HEAD --force-with-lease",
    note: "Dave approved",
    category: "Basics",
  },

  {
    action: "Latest Code with Rebase",
    command: "git pull --rebase origin develop",
    note: "Give me the latest code from origin server on develop branch but rebase the branch I am on, on top of the latest merge from origin.",
    category: "Basics",
  },
  {
    action: "Latest Code with Rebase on Develop Branch",
    command: "git rebase -i develop",
    note: "Switch to master git pull then switch back to branch and do this command. Give me the latest code from origin server but rebase the branch I am on, on top of the latest merge from origin.",
    category: "Basics",
  },
  {
    action: "Fix last commit",
    command: "git commit --amend -m 'Typo are indeed embarressing'",
    note: "This command is convenient for adding new or updated files to the previous commit. It is also a simple way to edit or add comments to the previous commit. ",
    category: "Basics",
  },
  {
    action: "Branch-Change Name",
    command: "git branch -m <old> <new>",
    note: "Old branch name and new branch name",
    category: "Basics",
  },
  {
    action: "Remove file",
    command: "rm <fileName>",
    note: "Can use rm -rf <fileName> -rf is two options joined together -r for recursive removal and -f to force action",
    category: "Removing",
  },
  {
    action: "Copy File",
    command: "cp <fileToCopy> <newFileName>",
    note: "",
    category: "Basics",
  },
  { action: "List of Files", command: "ls -l", note: "", category: "Basics" },
  {
    action: "Lit of Files with details",
    command: "ls -al",
    note: "List of all of them even hidden ones",
    category: "Basics",
  },
  {
    action: "Copy Folders Files ",
    command:
      "cp ThisFolder/*.*  ~/Desktop/karenProgram/....<location to put copy> ",
    note: "*.* says copy all files in ThisFolder regardless. You can put *.png to copy all png files or Karen.* where it will be all Karen files regardless of type of file",
    category: "Basics",
  },
  {
    action: "Update Project Based on package-lock.json",
    command: "npm ci",
    note: "If you already have node_modules in your project do npm ci to rebuild based upon the package-lock.json. Otherwise use npm install",
    category: "Basics",
  },
  {
    action: " Difference in code ",
    command: "git diff",
    note: "",
    category: "Branching",
  },
  {
    action: " Local difference in code ",
    command: "git diff --cached",
    note: " By adding the --staged (or alternatively: --cached) option, Git will show which local changes you have already added to Staging Area (aka git add)",
    category: "Branching",
  },
  {
    action: " Concise difference view ",
    command: "git diff --color-words",
    note: "Another helpful option is --color-words. Instead of the classic display mode in diffs, where old and new contents are displayed in separate lines, this option shows a more concise view.",
    category: "Branching",
  },
  {
    action: "Compare two branches",
    command: " git diff <branchOne> <branchTwo> ",
    note: "",
    category: "Branching",
  },
  {
    action: "Compare two branches on specific file",
    command: "git diff <branchOne> <branchTwo> <fileName> ",
    note: " ???????? ",
    category: " Basics ",
  },
  {
    action: "Patch - editor ",
    command: " git add -p ",
    note: "p brings us down to the patch level (decide what to include and what not to include) steps through each change to decide if we are adding to this commit or not.",
    category: " Basics ",
  },
  {
    action: " Open code in vscode",
    command: "code <file> ",
    note: "",
    category: " Basics ",
  },
  {
    action: "Edit a file ",
    command: "open <fileName> ",
    note: "",
    category: " Basics ",
  },
  {
    action: "Rebasing",
    command: "git rebase",
    note: "Conserve the original commit structure (straight line).  Do NOT use rebase on commits that you've already pushed/shared on a remote repository. Instead, use it for cleaning up your local commit history before merging it into a shared team branch. Rebase on your feature branch before integration it back into a team branch",
    category: "Branching",
  },
  {
    action: "Abort/Stop Merge",
    command: " git merge --abort ",
    note: "",
    category: "Branching",
  },
  {
    action: "Abort/Stop rebase",
    command: "git rebase --abort",
    note: "",
    category: "Branching",
  },
  {
    action: "Recovering a Deleted Branch/Feature",
    command: "git branch <new_branch_name> <commit_hash> ",
    note: "Find hash with git reflog. Then this new branch will include those lost commits",
    category: " Basics ",
  },
  {
    action: "Resetting a File to an Old Revision",
    command:
      "git restore --source <commit_hash> <file_name> OR all files git restore --source <commit_hash>",
    note: "Find hash by git reflog first",
    category: " Basics ",
  },
  {
    action: "Revert Specific Commit",
    command: "git revert <commit_hash>",
    note: "Find hash by git reflog. Then do revert on that commit as it will allow you to do in an editor window, reverts creates a new commit that you save and close.",
    category: " Basics ",
  },
  {
    action: "Edit/Fix Old Commit Message",
    command: "git commit --fixup",
    note: "",
    category: " Basics ",
  },
  {
    action: "Accidently hit Ctrl Z rather than Ctrl C",
    command: "***Don't do it***",
    note: "If you accidently do Ctrl+Z rather than Ctrl+C type fg to get back. Resource https://superuser.com/questions/1026953/resuming-a-job-with-r-in-zsh ",
    category: " Basics ",
  },
  {
    action: "Stop LocalHost",
    command: "Ctrl+C",
    note: "After running NPM Start and ready to close down local hit Ctrl+C",
    category: "Basics",
  },
  {
    action: " List of browsers ",
    command: " npx browserslist ",
    note: "See which browsers will work with the setup of your package.json browserslist setup ",
    category: " Basics ",
  },
  {
    action: " BrowsersList coverage for certain type ",
    command: " browserslist --coverage 'ie 11' ",
    note: "See coverage of IE 11 per browserslist ",
    category: " Basics ",
  },
  {
    action: "Stash changes",
    command: "git stash save 'optional message for yourself'",
    note: " stash changes with specific name",
    category: " Basics ",
  },
  {
    action: "Stash list details ",
    command: "git stash list",
    note: "List of stashes so you can find the name to pull it back out",
    category: " Basics ",
  },
  {
    action: "Retrieve stash by name",
    command: "git stash pop STASH-NAME",
    note: "Applies the changes and removes the files from the stash",
    category: " Basics ",
  },
  {
    action: "Commited to wrong branch",
    command: "git reset --soft HEAD^",
    note: "If you haven't yet pushed your changes, you can also do a soft reset",
    category: " Basics ",
  },
  {
    action: " Permission to every single file ",
    command: "chmod -R 777",
    note: " makes every single file on the system under / (root) have -rwxrwxrwx permissions. allows all actions for all users",
    category: " Basics ",
  },
  {
    action: "Access to read and write",
    command: "chmod -R 666",
    note: "Command chmod 666 means that all users will have read and write permissions but cannot execute the file/folder",
    category: " Basics ",
  },
  {
    action: "Compile issues especially after node update",
    command: " rm -rf node_modules  /  rm -rf package-lock.json / npm install ",
    note: "After updating node you need to remove node_modules and package-lock.json to install it again",
    category: " Basics ",
  },
  {
    action: "Host file ",
    command: "sudo nano /private/etc/hosts or sudo nano /etc/hosts ",
    note: " After that command save your changes by pressing control-o on your keyboard then return to accept the filename. Exit the editor by pressing control-x. This takes you back to the terminal screen. You may need to flush your Mac’s DNS cache, so copy/paste the below command string into terminal, and press return: dscacheutil -flushcache. You may have to add sudo to this command, for example: sudo dscacheutil -flushcacheb. ",
    category: " Basics ",
  },
  {
    action: "View all files even hidden",
    command: "ls -a",
    note: "-a allows you to see hidden files all of them will have dots in front of names",
    category: " Basics ",
  },
  {
    action: "Navigate to home folder",
    command: "cd ~ ",
    note: "cd with nothing else returns back to home folder or same as cd ~",
    category: " Basics ",
  },
  {
    action: "Navigate to root level",
    command: "cd /",
    note: "Go to root level of your startup disk",
    category: " Basics ",
  },
  {
    action: "Navigate back to directory you were in",
    command: "cd - ",
    note: "Go back to the directory you were in",
    category: " Basics ",
  },
  {
    action: "Host file",
    command: "vi /etc/hosts",
    note: "",
    category: " Basics ",
  },
  {
    action: " Composer install project dependencies ",
    command: " composer install ",
    note: "Installs the project dependencies from the composer.lock file if present ",
    category: " Basics ",
  },
  {
    action: " Update compser itself ",
    command: " composer self-update 2.3.0 ",
    note: " version 2.3.0 ",
    category: " Basics ",
  },
  // {
  //   action: " ??????? ",
  //   command: " ??????? ",
  //   note: " ???????? ",
  //   category: " Basics ",
  // },
];

export default GitCommandData;
