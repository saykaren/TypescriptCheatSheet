import React from "react";

const FilterSteps = () => {
  return (
    <ul>
      <li>{`const [searchTerm, setSearchTerm] = useState(""); `}</li>
      <li>
        {`<input
type="text"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
placeholder="Search Page"
id="inputSearchTerm"
/>`}
      </li>
      <li>
        {`.filter((item) =>
item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).sort((a, b) => a.title.localeCompare(b.title))`}
      </li>
      <li>Filter first before mapping data. Filter then sort then map.</li>
    </ul>
  );
};

export default FilterSteps;
