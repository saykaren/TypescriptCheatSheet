import React from "react";
import interfaceExample from "../Assests/interface.jpeg";

const InterfaceExamples = () => {
  return (
    <>
      {" "}
      <img src={interfaceExample} alt="interface" className="imageGroup"/>
      <p>
        {`Start with the lowest level for example the ingredients level and determine that object. Then put that interface item into the next.
        As you can see in ReceipeDataInterface ingredients references Array<IngredientsInterface> meaning this section is an array of the object described above it.`}{" "}
      </p>
      <p>{`Secondly notice instructions you can see is set as an array of strings Array<string>`}</p>
    </>
  );
};

export default InterfaceExamples;
