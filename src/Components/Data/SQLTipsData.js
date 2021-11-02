export const SQLTipsData = [
    {
      action: "Time Change",
      command: "SELECT * FROM TABLE WHERE created_datetime <= (SUBTIME(NOW(), \"4:00\"));",
      note: "Find time that is older than 4 hours from the current time",
      category: "Basics",
    },
  
      // { action: "START", command: "git", note: "", category: "Basics" },
  ];
  
  export default SQLTipsData;
  