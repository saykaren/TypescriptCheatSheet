import React from "react";

const ReduceRacing = () => {
  return (
    <>
    <p>Reduce to find largest number</p>
          <p>{`var myCode =  [4, 9, 7, 2, 1, 8]; `}</p>
          <p>{`myCode.reduce((acc,num)=> acc>num ? acc: num, 0); // 9`}</p>
          <p>OR</p>
          <p>Sum of your array</p>
          <p>{`myCode.reduce((acc,num)=> acc+num, 0); `}</p>
    </>
  );
};

export default ReduceRacing;
