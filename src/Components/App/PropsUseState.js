import React from "react";
import incomingProps from "../Assests/incomingProps.jpeg";
import useStateImage from "../Assests/useState_setState.jpeg";

const PropsUseState = () => {
  return (
    <>
      <p>
        {`Sending a useState item you need to have return as void. Example: setState: (arg1: boolean) => void`}{" "}
      </p>
      <p>{`Not required use ? Maybe?: string`} </p>
      <img src={incomingProps} alt="incoming Props" />
      <p>{`Other items to think of is if any argruments are passed and you need to list those as arg1, arg2 with the type of item that is being sent.`}</p>
      <img src={useStateImage} alt="useState Set" />
      <p>{`When initially setting state you can also set the type of object it is. See examples above but such as contributionTitle will 
  start as a string so I used useState<string>(''). Or for other states that start as numbers such as exampleSelection I used useState<number>(0)`}</p>
    </>
  );
};

export default PropsUseState;
