import React from "react";
import interfaceImage from "../Assests/interface.jpeg";
import InterfacePropsExample from "../Assests/InterfacePropsExample.jpeg";

const AddTypeScript = () => {
  return (
    <>
      <ul>
        <li>
          Add TypeScript to existing app you must first install it. In git
          navigate into your project
        </li>
        <li>
          npm install --save typescript @types/node @types/react
          @types/react-dom @types/jest
        </li>
        <li>
          {`Next rename any file to be TypeScript file (e.g. App.js to App.tsx). Restart your development server`}
        </li>
        <li>
          Under components make an Interface folder to hold interface objects.
        </li>
      </ul>

      <img src={interfaceImage} alt="Interface" className="imageGroup" />
      <ul>
        <li>Example of interface props</li>
      </ul>

      <img
        src={InterfacePropsExample}
        alt="Interface Props Example"
        className="imageGroup"
      />
      <br />
      <div>
        <h2>useState inline interface</h2>
        <p>{`const [data, setData] = useState<RecipeDataInterface[]>(RecipeData);`}</p>
      </div>
      <div>
        <p>Inline declaration it will be a string or an array of elements. </p>
        <p>{`content: string|JSX.Element[];`}</p>
        <p>
          {`{title||"Error"}`} Indicates in Javascript or Typescript give the
          title prop or show the string Error
        </p>
      </div>
      <h2>Resources</h2>
      <ul>
        <li>
          <a
            href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
            rel="noreferrer noopener"
            target="_blank"
          >
            TypeScript Handbook for JS Programmers
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=Z5iWr6Srsj8 "
            rel="noreferrer noopener"
            target="_blank"
          >
            YouTube: React TypeScript Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://blog.bitsrc.io/why-and-how-use-typescript-in-your-react-app-60e8987be8de"
            rel="noreferrer noopener"
            target="_blank"
          >
            Why and How to use TypeScript in your React App
          </a>
        </li>
        <li>
          <a
            href="https://create-react-app.dev/docs/adding-typescript/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Adding TypeScript
          </a>
        </li>
        <li>
          <a
            href="https://www.typescriptlang.org/docs/"
            rel="noreferrer noopener"
            target="_blank"
          >
            TypeScript Documentation
          </a>
        </li>
      </ul>
    </>
  );
};

export default AddTypeScript;
