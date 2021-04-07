import React from "react";
import interfaceImage from "../Assests/interface.jpeg";
import InterfacePropsExample from '../Assests/InterfacePropsExample.jpeg';

const AddTypeScript = () =>{

    return(
<>
        <p>
          Add TypeScript to existing app you must first install it. In git
          navigate into your project and do npm install --save typescript OR
          yarn add typescript
        </p>
        <p>
          {`Next rename any file to be TypeScript file (e.g. App.js to App.tsx). Restart your development server`}
        </p>
        <p>Under components make an Interface folder to hold interface objects.  </p>
        <img src={interfaceImage} alt="Interface" className="imageGroup"/>
        <p>Example of interface props</p>
        <img src={InterfacePropsExample} alt="Interface Props Example" className="imageGroup"/><br/>
        <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
         rel="noreferrer noopener"
         target="_blank"
         >TypeScript Handbook for JS Programmers</a>
      </>
    );
};

export default AddTypeScript;