export const LanguagesData = [
  {
    technique: "String to lowercase",
    php: "strtolower()",
    javascript: "toLowerCase() or toLocaleLowerCase()",
    note: "",
  },
  {
    technique: "Array contains specific value",
    php: "in_array('Apple', $array)",
    javascript: "array.includes('Apple')",
    note: "See Checks if a given key or index exists for checking key/index rather than value",
  },
  {
    technique: "Check type is array",
    php: "is_array($array)",
    javascript: "Array.isArray(value)",
    note: "",
  },
  {
    technique: "Checks if a given key or index exists",
    php: "array_key_exists('id', $array)",
    javascript: "obj.hasOwnProperty('key')",
    note: "",
  },
  {
    technique: "Template Literal",
    php: '"Welcome {$firstName} {$lastName}!"',
    javascript: "`Welcome ${firstName} ${lastName}`",
    note: "",
  },
  {
    technique: "For Each Loop",
    php: "foreach ($arr as &$value) {$value = $value * 2;}",
    javascript: "arr.forEach((value, index, arr) => {arr[index] = value * 2})",
    note: "Mapping or reducing is better in javascript. PHP - to directly modify array elements within the loop add & to parameter",
  },
  {
    technique: "Join array elements with a string",
    php: 'implode(", ", $array) / "Apple, Banana, Lettuce"',
    javascript: "array.join(', ') / \"Apple, Banana, Lettuce\" ",
    note: "",
  },
  {
    technique: "Split a string by a string",
    php: '$data = "foo:*:1023"; list($user, $pass, $uid) = explode(":", $data) echo $user = foo',
    javascript:
      'const [user, pass, uid] = text.split(":") console.log(user) = foo',
    note: "",
  },
  {
    technique: "Remove duplicate values from an array",
    php: "$unique = array_unique($array)",
    javascript: "const unique = [...new Set($array)];",
    note: "",
  },
  {
    technique:
      "Applies the callback to the elements of the given arrays - mapping",
    php: "array_map(fn($value): int => $value * 2, range(1, 5))",
    javascript: "array.map(value => value * 2)",
    note: "",
  },
  {
    technique: "Filters elements of an array using a callback function",
    php: "array_filter($arr, function($value, $key) {return $key === 'b' || $value === 4;}, ARRAY_FILTER_USE_BOTH)",
    javascript: "arr.filter(value => value === 'b' | value === 4)",
    note: "",
  },
  {
    technique: "Convert a string to an array",
    php: "str_split($string, 3) // $string = \"How are you\", answer ['Hel', 'lo ', 'Fri', 'end'];",
    javascript:
      "string.split(\" \") // string = \"How are you\", answer ['How', 'are ', 'you'];",
    note: "For php to split by space use explode()",
  },
  {
    technique:
      "Replace all occurences of the search string with the replacement string",
    php: 'str_replace("World","Karen","Hello World!");',
    javascript: "\"Hello World!\".replace('World', 'Karen');",
    note: "strstr() php replaces the first occurrence. strtr() translates the chars one by one. Javascript also has replaceFirst() and replaceAll()",
  },
  {
    technique: "Length of a string",
    php: 'strlen("Hello World!")',
    javascript: "string.length",
    note: "",
  },
  {
    technique: "Translate characters or replace substrings",
    php: "strtr(\"ÿou\", array('ÿ'=>'y')",
    javascript: "\"ÿou\".replace('ÿ', 'y')",
  },
  {
    technique: "Return part of a string",
    php: 'substr("abcdef", 2, -1) = "cde"',
    javascript: "'abcdef'.substring(2,5)",
    note: "",
  },
  {
    technique: "Split string by a regular expression",
    php: "preg_split('/[\\s]+/', 'hypertext language programming');",
    javascript: "string.split('/[\\s]+/');",
    note: "",
  },
  {
    technique: "Set cookies",
    php: 'setcookie("username", "John Doe", strtotime( \'+20 days\' ));',
    javascript:
      'document.cookie="username=John Doe;expires=Thu, 18 Dec 2013 12:00:00 UTC";',
    note: "",
  },
  {
    technique: "Get cookies",
    php: 'htmlspecialchars($_COOKIE["name"]);',
    javascript: "decodeURIComponent(document.cookie).split(';');",
    note: "",
  },
  {
    technique: "Constants and importing",
    php: "public const THEME_COLOR = '#69BE28'; MyClass::THEME_COLOR",
    javascript:
      "export const THEME_COLOR = '#69BE28'; import {THEME_COLOR as THEME) from './constants';",
    note: "",
  },
  {
    technique: "Check empty",
    php: "empty($variable)",
    javascript: "variable.length===0 | variable === null",
    note: "",
  },
  {
    technique: "Add to array",
    php: "$array = array(); $array[] = $newValue or array_push($array, $newValue)",
    javascript: "array.push(newValue)",
    note: "",
  },
  {
    technique:
      "Find the position of the first occurrence of a substring in a string",
    php: "strpos(\"Hello World!\", 'o', 5);",
    javascript: "\"Hello World!\".indexOf('o', 5);",
    note: "answer 7",
  },
  {
    technique: "Access Object Properties",
    php: "$this->property (non-static) / self::$property (static)",
    javascript: "obj.prop / obj['prop'] / { prop } = obj",
    note: "",
  },
  {
    technique: "Return the values from a single column in input array",
    php: "$first_names = array_columns($records, 'first_name');",
    javascript: "myarray.map( x => {return x['key']})",
    note: "",
  },
];

export default LanguagesData;
