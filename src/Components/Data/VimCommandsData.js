export const VimCommandsData = [
  {
    action: "Jump to beginning",
    command: "ctrl+a",
    note: "Jump to beginning",
    category: "Basics",
  },
  {
    action: "Jump to end",
    command: "ctrl+e",
    note: "Jump to end",
    category: "Basics",
  },

  {
    action: "Delete Line",
    command: "dd",
    note: "Add number infront like 2dd to delete to line 2",
    category: "Basics",
  },
  { action: "Next Line", command: "o", note: "", category: "Basics" },
  {
    action: "Delete to which character",
    command: "dt <character>",
    note: "",
    category: "Basics",
  },
  { action: "Undo", command: "u", note: "", category: "Basics" },
  { action: "Write", command: "w", note: "", category: "Basics" },
  { action: "Redo", command: "Ctrl+R", note: "", category: "Basics" },
  { action: "Write and exit", command: ":wq", note: "", category: "Basics" },
  {
    action: "Move cursor forward two words",
    command: "2w",
    note: "Change number to change amount",
    category: "Basics",
  },
  {
    action: "Move cursor to end of third word",
    command: "3e",
    note: "Change number to change amount",
    category: "Basics",
  },
  {
    action: "Delete three words",
    command: "d2w",
    note: "Change number to change amount",
    category: "Basics",
  },

  // { action: "START", command: "git", note: "", category: "Basics" },
];

export default VimCommandsData;
