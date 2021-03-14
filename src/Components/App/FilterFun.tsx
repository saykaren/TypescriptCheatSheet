import React from "react";
import ComponentSetup from "../Assests/ComponentSetup.jpeg";

const FilterFun = () => {
  return (
    <>
      <p>
        With Array.filter(), you don't have to create the new array beforehand.
        You can define the variable as the output of Array.filter().  Inside
        the Array.filter() callback function, return true if the item should be
        added to the new array, and false if it shouldn’t.
        Under-the-hood, Array.filter() loops through each item in the original
        array, runs your callback method on each item, creates a new array, and
        pushes the items that return true. 
      </p>
      <p>{`var wizards = [{name: "Hermione Granger", house: "Gryffindor" }, {name: "Cedric Diggory", house: "Hufflepuff" },]`}</p>
      <p>{`var myHuffArray = wizards.filter(x=>(x.house==="Hufflepuff")); `}</p>
      <p>OR</p>
      <p>{`var people = [ 

{id : "1", name : "abc", gender : "m", age :"15" }, {id : "2", name : "a", gender : "m", age :"25" }, 

{id : "3", name : "efg", gender : "f", age :"5" },  {id : "4", name : "hjk", gender : "m", age :"35" }, 

{id : "5", name : "ikly", gender : "m", age :"41" }, {id : "6", name : "ert", gender : "f", age :" 30" }, 

{id : "7", name : "qwe", gender : "f", age :" 31" }, {id : "8", name : "bdd", gender : "m", age :" 78" } 

],  `}</p>
      <p>{`  id_filter = [1,4,5,8],`}</p>
      <p>{`people.filter((person) => id_filter.includes(person.id)) `}</p>
    </>
  );
};

export default FilterFun;
