import React from "react";
import fetchDataExample from "../Assests/fetch_data_example.jpeg";
import fetchDataExampleTwo from "../Assests/fetchExample.jpeg";
import fetchSpecificGroup from "../Assests/fetchSpecificGroup.jpeg";
import fetchCharacters from "../Assests/fetchCharacters.jpeg";

const FetchDataExamples = () => {
  return (
      <>
    <ul>
      <li>
        <img src={fetchDataExample} alt="fetch data" />
      </li>
      <li>
        <img src={fetchDataExampleTwo} alt="Fetch data" />
      </li>
      <li>
        <img src={fetchSpecificGroup} alt="Fetch Specific items" />
      </li>
      <li>
        <img src={fetchCharacters} alt="Fetch Characters" />
      </li>
    </ul>
    <a href="https://codeburst.io/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd" target="_blank" rel="noopener noreferrer"> Fetch Data from API with React Hooks</a>
    </>
  );
};

export default FetchDataExamples;
