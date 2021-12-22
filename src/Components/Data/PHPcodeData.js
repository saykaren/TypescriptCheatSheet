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
  {
    action: "Run PHP",
    command: "php <fileName>",
    note: "Or can run PHP right click file and run as PHP script",
    category: "Basics",
  },

  {
    action: "Run PHP Spec Tests",
    command: "./vendor/bin/phpspec run spec/Kgarcia",
    note: "first part is where composer is...I think then run then file of spec",
    category: "Basics",
  },
  {
    action: "Check composer",
    command: "composer why phpspec/phpspec",
    note: "",
    category: "Basics",
  },
  {
    action: "Go back",
    command: "CMD + [ ",
    note: "Goes back through clicks",
    category: "Basics",
  },
  {
    action: "New test run",
    command: "CTR + Shift + R",
    note: "",
    category: "Basics",
  },
  {
    action: "Run Tests",
    command: "CTR + R",
    note: "same as clicking green play button",
    category: "Basics",
  },
  {
    action: "New PHP Method shortcut",
    command: "pubf",
    note: "",
    category: "Basics",
  },
  {
    action: "Add Variable",
    command: "Option + Enter",
    note: "",
    category: "Basics",
  },
];

export default PhpCodeData;
