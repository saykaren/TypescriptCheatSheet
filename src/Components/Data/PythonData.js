export const PythonData = [
  {
    action: "Refactor / Find&Replace",
    command: "Cmd + R",
    note: "",
    category: "Basics",
  },
  {
    action: "Matches on text",
    command: "  //*[text()[contains(.,'ABC')]] ",
    note: "  ",
    category: " Basics ",
  },
  {
    action:
      " Find text contains 'Participants' go back two levels to find img with class ",
    command:
      " //span[text()[contains(.,'Participants')]]/../../img[contains(@Class, 'x-tree-ec-icon')] ",
    note: "",
    category: " Basics ",
  },
  {
    action: "Find image with class of x-tree-ec-icon",
    command: "img[contains(@Class, 'x-tree-ec-icon')]",
    note: "",
    category: " Basics ",
  },
    {
      action: "Find a specific instance / Click the nth item found",
      command: "Then click 'xPath://span[text()='Participants'][position()=1]'",
      note: "Count starts at 0. Above finds the second span tag with Participants in it",
      category: " Basics ",
    },
  // {
  //   action: " ??????? ",
  //   command: " ??????? ",
  //   note: " ???????? ",
  //   category: " Basics ",
  // },
];

export default PythonData;
