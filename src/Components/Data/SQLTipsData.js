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
    command:
      "SET @exist_Check := (SELECT COUNT(*) FROM information_schema.columns WHERE TABLE_NAME=table_name AND COLUMN_NAME=column_name AND TABLE_SCHEMA=database()) SELECT @exist_Check; SET @sqlstmt := IF(@exist_Check>0,'ALTER TABLE DROP COLUMN ;', 'select '''''); SELECT @sqlstmt; PREPARE stmt FROM @sqlstmt; EXECUTE stmt ;",
    note: "",
    category: "Basics",
  },
  {
    action: "Check if a column exists",
    command:
      "SELECT COUNT(*) FROM information_schema.columns WHERE TABLE_NAME= AND COLUMN_NAME= AND TABLE_SCHEMA=database()",
    note: "",
    category: "Basics",
  },
  {
    action: "Find other tables a column is foreign keyed to",
    command:
      "SELECT TABLE_NAME, COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE REFERENCED_TABLE_SCHEMA = '' AND REFERENCED_TABLE_NAME = '' AND REFERENCED_COLUMN_NAME = '';",
    note: "",
    category: "Basics",
  },
  {
    action: "Adds two or more expressions together with a separator",
    command: "concat_ws('-', '303', '555', '5555')",
    note: "First parameter is the separator",
    category: "Basics",
  },
  {
    action: "Converts the text to upper-case",
    command: "UPPER('hello world') OR UCASE('hello world')",
    note: "",
    category: 'Basics',
  },
  {
    action: "Converts the text to lower-case",
    command: "LCASE('HELLO WORLD');",
    note: "",
    category: 'Basics'
  },
  {
    action: "Extracts a substring from a string",
    command: "SUBSTRING('Hello World', 1, 4) -- returns 'Hell'",
    note: "",
    category: 'Basics'
  },
  {
    action: "Count modes",
    command: "SELECT customer_id, name, ROW_NUMBER() OVER (partition by customer_id, name ORDER BY customer_id, bill_to_customer_id) unique_id FROM customer_table;",
    note: "",
    category: 'Basics'
  },
  {
    action: "Shows the statement used to create the specified table",
    command: "SHOW CREATE TABLE `tableName`",
    note: "",
    category: 'Basics'
  },
  {
    action: "Terminates the stored procedure or function",
    command: "LEAVE [stored_procedure]",
    note: "",
    category: 'Basics'
  },
  {
    action: "Find foreign key constraints with column constraints",
    command: "SELECT kcu.*, rc.DELETE_RULE, rc.UPDATE_RULE FROM information_schema.KEY_COLUMN_USAGE kcu LEFT JOIN information_schema.REFERENTIAL_CONSTRAINTS rc ON kcu.CONSTRAINT_NAME = rc.CONSTRAINT_NAME WHERE kcu.REFERENCED_TABLE_NAME = '' AND kcu.REFERENCED_COLUMN_NAME = '';",
    note: "",
    category: 'Basics'
  }
  // { action: "START", command: "git", note: "", category: "Basics" },
];

export default SQLTipsData;
