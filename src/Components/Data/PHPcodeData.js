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
  {
    action: "Outputs info about PHP Configuration",
    command: "phpinfo();",
    note: "This includes information about PHP compilation options and extensions, the PHP version, server information and environment (if compiled as a module), the PHP environment, OS version information, paths, master and local values of configuration options, HTTP headers, and the PHP License.",
    category: "Basics",
  },
  {
    action: "Date",
    command: 'date("Y-m-d H:i:s")',
    note: "Gives todays date with hour, minute and seconds",
    category: "Basics",
  },
  {
    action: "Null coalesce assignment operator",
    command: "$address['street'] ??= '' ",
    note: "Rather than do $address['street'] = $address['street'] ?? '' do the above null coalesce.",
    category: "Basics",
  },
  {
    action: "Null coalesce operator",
    command: "$x ?? $y;",
    note: "Same as saying isset($x) ? $x : $y; If $x is an empty string it will equal '' ($x empty string).",
    category: "Basics",
  },
  {
    action: "Elvis Operator",
    command: "$x ?: $y",
    note: "Equivalent to $x ? $x : $y; If $x is empty string it will equal $y. If $x was '0' or false then it will equal $y",
    category: "Basics",
  },
  {
    action: "isset()",
    command: "isset($x)",
    note: "If $x = null it will be false. If it hasn't been declared it will be false",
    category: "Basics",
  },
  {
    action: "empty()",
    command: "empty($x)",
    note: "Checks if variable is emtpy or not. Empty is considered for '', NULL, FALSE, '0', 0.0, 0, array()",
    category: "Basics",
  },
  {
    action: "Template Literal",
    command: '"Hello {$name}, how are you?"',
    note: "Template literal needs to be in double quotes. Can also do {${$object->getName()}} or {$square->width} or {$arr['key']} or {$arr['foo'][3]}",
    category: "Basics",
  },
  // {
  //   action: "????",
  //   command: "????",
  //   note: "",
  //   category: "Basics",
  // },
];

export default PhpCodeData;
