export const LanguagesData = [
  {
    technique: "String to lowercase",
    php: "strtolower()",
    javascript: "toLowerCase() or toLocaleLowerCase()",
    dataType: "string",
    note: "",
  },
  {
    technique: "Array contains specific value",
    php: "in_array('Apple', $array)",
    javascript: "array.includes('Apple')",
    dataType: "array",
    note: "See Checks if a given key or index exists for checking key/index rather than value",
  },
  {
    technique: "Check type is array",
    php: "is_array($array)",
    javascript: "Array.isArray(value)",
    dataType: "array",
    note: "",
  },
  {
    technique: "Checks if a given key or index exists",
    php: "array_key_exists('id', $array)",
    javascript: "obj.hasOwnProperty('key')",
    dataType: "array",
    note: "",
  },
  {
    technique: "Template Literal",
    php: '"Welcome {$firstName} {$lastName}!" / class people { public $john = "John Smith";} $juices = array("apple", "orange"); $people = new people(); "$people->john drank some $juice[1] juice." -- Answer "John Smith drank some orange juice."}',
    javascript: "`Welcome ${firstName} ${lastName}`",
    dataType: "string",
    note: "",
  },
  {
    technique: "For Each Loop",
    php: "foreach ($arr as &$value) {$value = $value * 2;}",
    javascript: "arr.forEach((value, index, arr) => {arr[index] = value * 2})",
    dataType: "array",
    note: "Mapping or reducing is better in javascript. PHP - to directly modify array elements within the loop add & to parameter",
  },
  {
    technique: "Join array elements with a string",
    php: 'implode(", ", $array) / "Apple, Banana, Lettuce"',
    javascript: "array.join(', ') / \"Apple, Banana, Lettuce\" ",
    dataType: "array",
    note: "",
  },
  {
    technique: "Split a string by a string",
    php: '$data = "foo:*:1023"; list($user, $pass, $uid) = explode(":", $data) echo $user = foo',
    javascript:
      'const [user, pass, uid] = text.split(":") console.log(user) = foo',
    dataType: "string",
    note: "",
  },
  {
    technique: "Remove duplicate values from an array",
    php: "$unique = array_unique($array)",
    javascript: "const unique = [...new Set($array)];",
    dataType: "string",
    note: "",
  },
  {
    technique:
      "Applies the callback to the elements of the given arrays - mapping",
    php: "array_map(fn($value): int => $value * 2, range(1, 5)) or array_map(fn($value): int => $value * 2, $myArray)",
    javascript: "array.map(value => value * 2)",
    dataType: "array",
    note: "",
  },
  {
    technique: "Filters elements of an array using a callback function",
    php: "array_filter($arr, function($value, $key) {return $key === 'b' || $value === 4;}, ARRAY_FILTER_USE_BOTH)",
    javascript: "arr.filter(value => value === 'b' | value === 4)",
    dataType: "array",
    note: "",
  },
  {
    technique: "Convert a string to an array",
    php: "str_split($string, 3) // $string = \"How are you\", answer ['Hel', 'lo ', 'Fri', 'end'];",
    javascript:
      "string.split(\" \") // string = \"How are you\", answer ['How', 'are ', 'you'];",
    dataType: "string",
    note: "For php to split by space use explode()",
  },
  {
    technique:
      "Replace all occurences of the search string with the replacement string",
    php: 'str_replace("World","Karen","Hello World!");',
    javascript: "\"Hello World!\".replace('World', 'Karen');",
    dataType: "string",
    note: "strstr() php replaces the first occurrence. strtr() translates the chars one by one. Javascript also has replaceFirst() and replaceAll()",
  },
  {
    technique: "Length of a string",
    php: 'strlen("Hello World!")',
    javascript: "string.length",
    dataType: "string",
    note: "",
  },
  {
    technique: "Translate characters or replace substrings",
    php: "strtr(\"ÿou\", array('ÿ'=>'y')",
    javascript: "\"ÿou\".replace('ÿ', 'y')",
    dataType: "string",
    note: "",
  },
  {
    technique: "Return part of a string",
    php: 'substr("abcdef", 2, -1) = "cde"',
    javascript: "'abcdef'.substring(2,5)",
    dataType: "string",
    note: "",
  },
  {
    technique: "Split string by a regular expression",
    php: "preg_split('/[\\s]+/', 'hypertext language programming');",
    javascript: "string.split('/[\\s]+/');",
    dataType: "string",
    note: "",
  },
  {
    technique: "Set cookies",
    php: 'setcookie("username", "John Doe", strtotime( \'+20 days\' ));',
    javascript:
      'document.cookie="username=John Doe;expires=Thu, 18 Dec 2013 12:00:00 UTC";',
    dataType: "cookies",
    note: "",
  },
  {
    technique: "Get cookies",
    php: 'htmlspecialchars($_COOKIE["name"]);',
    javascript: "decodeURIComponent(document.cookie).split(';');",
    dataType: "cookies",
    note: "",
  },
  {
    technique: "Constants and importing",
    php: "public const THEME_COLOR = '#69BE28'; MyClass::THEME_COLOR",
    javascript:
      "export const THEME_COLOR = '#69BE28'; import {THEME_COLOR as THEME) from './constants';",
    dataType: "string",
    note: "",
  },
  {
    technique: "Check empty",
    php: "empty($variable)",
    javascript: "variable.length===0 | variable === null",
    dataType: "string",
    note: "",
  },
  {
    technique: "Add to array",
    php: "$array = array(); $array[] = $newValue or array_push($array, $newValue)",
    javascript: "array.push(newValue)",
    dataType: "array",
    note: "",
  },
  {
    technique:
      "Find the position of the first occurrence of a substring in a string",
    php: "strpos(\"Hello World!\", 'o', 5);",
    javascript: "\"Hello World!\".indexOf('o', 5);",
    dataType: "string",
    note: "answer 7",
  },
  {
    technique: "Access Object Properties",
    php: "$this->property (non-static) / self::$property (static)",
    javascript: "obj.prop / obj['prop'] / { prop } = obj",
    dataType: "object",
    note: "",
  },
  {
    technique: "Return the values from a single column in input array",
    php: "$first_names = array_columns($records, 'first_name');",
    javascript: "myarray.map( x => {return x['key']})",
    dataType: "array",
    note: "",
  },
  {
    technique: "Array length",
    php: "count($myArray)",
    javascript: "myArray.length",
    dataType: "array",
    note: "",
  },
  {
    technique: "Add one or more elements to the beginning of an array",
    php: "array_unshift($myArray, 'apple', 'orange');",
    javascript: "myArray.unshift('newOne');",
    dataType: "array",
    note: "",
  },
  {
    technique: "Map array of objects to change objects - returns boolean",
    php: "array_walk(['first_key' => 'first_value'], function(&$key, $value) { $value*2 });",
    javascript:
      "data.forEach((dataObject, index) => { data[index] = dataObject * 2});",
    dataType: "array",
    note: "",
  },
  {
    technique: "Map array of objects and get keys and values",
    php: "array_map(['first_key' => 'first_value'], function(&$key, $value) { $objKey = $key; $objValue = $value});",
    javascript:
      "data.map((dataObject) => {const objKey = Object.keys(dataObject)[0]; const objValue = dataObject[`${objKey}`];});",
    dataType: "array",
    note: "",
  },
  {
    technique:
      "Change contents of an array by removing or replacing existing elements and/or adding new elements",
    php: "array_splice(&$myArray, 1, 0, 'addition')",
    javascript:
      "['Jan', 'March', 'April', 'June'].splice(1, 0, 'Feb'); note: splice(start, deleteCount, item0, item1, ....)",
    dataType: "array",
    note: "",
  },
  {
    technique:
      "Find the position of the first occurrence of a case-insensitive substring in a string",
    php: "stripos('Can you find the X in this string?', 'x'); note if the string starts with your needle to find it returns 0 so might need to do !== false if checking empty on value",
    javascript:
      "'Can you find the X in this string?'.toLocaleLowerCase().indexOf('x')",
    dataType: "string",
    note: "",
  },
  {
    technique: "Merge one or more arrays",
    php: "array_merge($array1, $array2)",
    javascript:
      "mergeArrays = [...array1, ...array2] or mergeArrays = array1.concat(array2)",
    dataType: "array",
    note: "",
  },
  {
    technique: "Get Object Keys",
    php: "array_keys($myArray)",
    javascript: "Object.keys(myObject);",
    dataType: "object",
    note: "",
  },
  {
    technique: "For Loop",
    php: "for ($i = 1; $i < count($myArray); $i++){ $myArray[i] + 2}",
    javascript: "for (let i = 0; i < myArray.length; i++){ myArray[i] + 2}",
    dataType: 'loop',
    note: '',
  },
  {
    technique: "While Loop",
    php: "$i = 0; $n = 0; while ($i < 10) {$n++; $i+= n;} ",
    javascript: "let i = 0; let n = 0; while (i < 10) {n++; i+= n;}",
    dataType: 'loop',
    note: '',
  },
  {
    technique: "Switch",
    php: "switch ($value) { case 0: $message = 'Hello'; break; default: $message = 'Goodbye'}",
    javascript: "switch(value) { case 0: const message = 'Hello'; break; default: const message = 'Goodbye';}",
    dataType: 'loop',
    note: '',
  },
  {
    technique: "Dates",
    php: "date(format, timestamp) / date('Y-m-d H:i:s')",
    javascript: "const currentDate = new Date(); // datetime = `${currentdate.getMonth()}/${currentdate.getDate()}/${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}`;",
    dataType: 'date',
    note: 'H - 24 hour, h - 12 hour, i - minutes, s - seconds, a - am or pm, l - day of the week',
  },
  {
    technique: 'String to Time/Date',
    php: 'date("Y-m-d h:i:sa", strtotime("10:30pm April 15 2023");',
    javascript: 'const currentDate = new Date(); // datetime = `${currentdate.getMonth()}/${currentdate.getDate()}/${currentdate.getFullYear()} ${currentdate.getHours()}:${currentdate.getMinutes()}`;',
    dataType: 'date',
    note: '',
  },
  {
    technique: 'Get Unix timesteamp for a date',
    php: 'mktime($hour, $minute, $second, $month, $day, $year); / mktime(0, 0, 0, 7, 1, 2000); / $tomorrow  = mktime(0, 0, 0, date("m")  , date("d")+1, date("Y"));',
    javascript: 'const timeStamp = Date.now()',
    dataType: 'date',
    note: 'new Date() - creates a Date object representing the current date/time // Date.now() - returns the number of milliseconds since midnight 01 January, 1970 UTC',
  },
  {
    technique: 'Concatentation',
    php: '$myString = "Hello $name"; or \'Hello \'. $name; or $myString = \'Hello\'; $myString .= $name; or $myString = "Hello {$name}s" if concat right next to variable wrap in brackets',
    javascript: '`Hello ${name}`; or \'Hello \' + name; or str += name or [\'Hello\', \'World\'].join(\' \') or \'Hello \'.concate(\'World\', \'!\')',
    dataType: 'string',
    note: ''
  },
  {
    technique: 'Returns/Filters array entries that match regex pattern',
    php: '$input = ["Red", "Pink", "Green", "Purple"]; $result = preg_grep("/^p/i", $input);',
    javascript: 'const filteredFruits = ["apple", "banana", "kiwi", "grape"].filter(fruit => fruit.match(/a/))',
    dataType: 'array',
    note: ''
  },
  {
    technique: 'Set the internal pointer of an array to its first element',
    php: 'reset($myArray);',
    javascript: 'myArray[0]',
    dataType: 'array',
    note: ''
  },
  {
    technique: 'Return the current element in an array',
    php: 'current($myArray);',
    javascript: 'myArray[0]',
    dataType: 'array',
    note: 'Every array has an internal pointer to its "current" element, which is initialized to the first element inserted into the array.'
  },
  {
    technique: 'Return the last element in an array',
    php: 'end($myArray);',
    javascript: 'myArray[myArray.length-1]',
    dataType: 'array',
    note: ''
  }
];

export default LanguagesData;
