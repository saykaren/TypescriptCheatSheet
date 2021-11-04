export const PhpCodeData = [
  {
    action: "Concatenation",
    command: "concat with .",
    note: "",
    category: "Basics",
  },
  {
    action: "Array",
    command: "$variable[0]",
    note: "Access first item in variable array",
    category: "Basics",
  },

  {
    action: "Array - Add",
    command: "$month['jan'] = 'January'",
    note: "",
    category: "Basics",
  },
  {
    action: "Array - creation with keys",
    command:
      "$months = array('jan' => 'January', 'feb' => 'February', 'mar' => 'March');",
    note: "",
    category: "Basics",
  },
  {
    action: "Map",
    command: 'foreach($array as $value){echo "This is $value";};',
    note: "Need double quotes to use variable in echo",
    category: "Basics",
  },
  {
    action: "Static Properties",
    command:
      'class ClassName {public static $staticProp = "W3Schools";}  --- access by ClassName::$staticProp;',
    note: "Can be accessed from a method in the same class using the self keyword and double colon :: --- return self::$value; or use parent keyword inside child class",
    category: "Basics",
  },
  // { action: "START", command: "git", note: "", category: "Basics" },
];

export default PhpCodeData;
