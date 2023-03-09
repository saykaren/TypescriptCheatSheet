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
  }
];

export default LanguagesData;
