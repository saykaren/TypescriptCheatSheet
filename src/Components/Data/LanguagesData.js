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
    php: "\"Welcome {$firstName} {$lastName}!\"",
    javascript: "\`Welcome ${firstName} ${lastName}`",
    note: "",
  },
  {
    technique: "For Each Loop",
    php: "foreach ($arr as &$value) \{$value = $value * 2;}",
    javascript: "arr.forEach((value, index, arr) => {arr[index] = value * 2})",
    note: "Mapping or reducing is better in javascript. PHP - to directly modify array elements within the loop add & to parameter"
  },
  {
    technique: "Join array elements with a string",
    php: "implode(\", \", $array) / \"Apple, Banana, Lettuce\"",
    javascript: "array.join(', ') / \"Apple, Banana, Lettuce\" ",
    note: ""
  },
  {
    technique: "Split a string by a string",
    php: "$data = \"foo:*:1023\"; list($user, $pass, $uid) = explode(\":\", $data) echo $user = foo",
    javascript: "const [user, pass, uid] = text.split(\":\") console.log(user) = foo",
    note: ""
  },
  {
    technique: "Remove duplicate values from an array",
    php: "$unique = array_unique($array)",
    javascript: "const unique = [...new Set($array)];",
    note: ""
  },
  {
    technique: "Applies the callback to the elements of the given arrays - mapping",
    php: "array_map(fn($value): int => $value * 2, range(1, 5))",
    javascript: "array.map(value => value * 2)",
    note: ""
  },
  {
    technique: "Filters elements of an array using a callback function",
    php: "array_filter($arr, function($value, $key) {return $key === 'b' || $value === 4;}, ARRAY_FILTER_USE_BOTH)",
    javascript: "arr.filter(value => value === 'b' | value === 4)",
    note: ""
  },
  {
    technique: "Convert a string to an array",
    php: "str_split($string, 3) // $string = \"How are you\", answer ['Hel', 'lo ', 'Fri', 'end'];",
    javascript: "string.split(\" \") // string = \"How are you\", answer ['How', 'are ', 'you'];",
    note: "For php to split by space use explode()"
  },
  {
    technique: "Replace all occurences of the search string with the replacement string",
    php: "str_replace(\"World\",\"Karen\",\"Hello World!\");",
    javascript: "\"Hello World!\".replace('World', 'Karen');",
    note: ''
  }
];

export default LanguagesData;
