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
    action: "Change head back to a given commit",
    command: "git reset <commit>",
    note: "",
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
    note: "",
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
    action: "Remove",
    command: "rm -rf <file name>",
    note: "",
    category: "Removing",
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
    action: "Difference in code",
    command: "git diff -cached",
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
    note: "Shows all the commits that have happened",
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
    command: "git pull --rebase origin master",
    note: "Give me the latest code from origin server but rebase the branch I am on, on top of the latest merge from origin.",
    category: "Basics",
  },
  {
    action: "Fix last commit",
    command: "git commit --amend",
    note: "This command is convenient for adding new or updated files to the previous commit. It is also a simple way to edit or add comments to the previous commit. ",
    category: "Basics",
  },
  // { action: "START", command: "git", note: "", category: "Basics" },
  // { action: "START", command: "git", note: "", category: "Basics" },
];

export default GitCommandData;
