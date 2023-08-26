export const SQLTipsData = [
  {
    action: "Time Change",
    command:
      'SELECT * FROM TABLE WHERE created_datetime <= (SUBTIME(NOW(), "4:00"));',
    note: "Find time that is older than 4 hours from the current time",
    category: "Basics",
  },
  {
    action: "unsigned",
    command: "UNSIGNED",
    note: "The “unsigned” in MySQL is a data type. Whenever we write an unsigned to any column that means you cannot insert negative numbers. Suppose, for a very large number you can use unsigned type.",
    category: "Basics",
  },
  {
    action: "CREATE UNIQUE INDEX ",
    command: "CREATE UNIQUE INDEX uidx_pid ON Persons (PersonID);",
    note: "The CREATE UNIQUE INDEX command creates a unique index on a table (no duplicate values allowed)",
    category: "Basics",
  },
  {
    action: "Check if column exists and execute a statement",
    command: "SET @exist_Check := (SELECT COUNT(*) FROM information_schema.columns WHERE TABLE_NAME=table_name AND COLUMN_NAME=column_name AND TABLE_SCHEMA=database()) SELECT @exist_Check; SET @sqlstmt := IF(@exist_Check>0,'ALTER TABLE DROP COLUMN ;', 'select '''''); SELECT @sqlstmt; PREPARE stmt FROM @sqlstmt; EXECUTE stmt ;",
    note: "",
    category: "Basics",
  }
  // { action: "START", command: "git", note: "", category: "Basics" },
];

export default SQLTipsData;
