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
  }
];

export default LanguagesData;
