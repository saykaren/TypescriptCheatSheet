import React from "react";

const FilterSteps = () => {
  return (
    <ul>
      <li>{`const [searchTerm, setSearchTerm] = useState(""); `}</li>
      <li>
        {`<input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Page" id="inputSearchTerm" />`}
      </li>
      <li>
        {`.filter((item) =>
item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).sort((a, b) => a.title.localeCompare(b.title))`}
      </li>
      <li>Filter first before mapping data. Filter then sort then map.</li>
      <li>
        Example of Filtering Against Different Keys
        <ul>
          <li>
            {`    .filter(`}<br/>
            {`  (item) =>`}<br/>
            {`  item.name`}<br/>
            {`   .toLocaleLowerCase()`}<br/>
            {`     .includes(searchTerm.toLocaleLowerCase()) ||`}<br/>
            {`  item.nickname`}<br/>
            {`    .toLocaleLowerCase()`}<br/>
            {`  .includes(searchTerm.toLocaleLowerCase()) ||`}<br/>
            {` item.portrayed`}<br/>
            {`   .toLocaleLowerCase()`}<br/>
            {`    .includes(searchTerm.toLocaleLowerCase()) ||`}<br/>
            {`   item.char_id`}<br/>
            {`    .toString()`}<br/>
            {`    .toLocaleLowerCase()`}<br/>
            {`    .includes(searchTerm.toLocaleLowerCase())`}<br/>
            {`  )`}
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default FilterSteps;
