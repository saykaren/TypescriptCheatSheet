import React from "react";
import ComponentSetup from "../Assests/ComponentSetup.jpeg";

const MappingMadness = () => {
  return (
    <>
 <p>{`var myObj = [{ first: "Romeo", last: "Montague" }, 
          { first: "Mercutio", last: null}, {first: "Tybalt", last: "Capulet"},{first: "Tybalt", last: "Capulet", age: 40,}] `}</p>
          <p>{`result = myObj.map(x=>x.last == "Capulet" ? x.last : 1 ); `}</p>
          <p>OR</p>
          <p>{`const library = [{author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; `}</p>
          <p>{`var result10 = library.map(x=>( (!x.readingStatus) ? \`Need to read \${x.title} by \${x.author}\` : \`Already read \${x.title} by \${x.author}\`));`}</p>
          <p>{``}</p>
          <p>{``}</p>
    </>
  );
};

export default MappingMadness;
