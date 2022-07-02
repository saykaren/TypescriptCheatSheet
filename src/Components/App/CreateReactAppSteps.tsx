import React from "react";
import ComponentSetup from "../Assests/ComponentSetup.jpeg";

const CreateReactAppSteps = () => {
  return (
    <>
      <ul>
        <li>Check that you have node or yarn. node -v or yarn -v</li>
        <li>
          Create app command
          <ul>
            <li>
              npm ={" "}
              <code>{`npx create-react-app <name of app> --use-npm (note make sure name is all lower case)`}</code>
            </li>
            <li>
              yarn ={" "}
              <code>{`npx create-react-app <name of app> (note make sure name is all lower case)`}</code>
            </li>
          </ul>
        </li>
        <li>cd into folder</li>
        <li>
          <code>git init</code> in terminal{" "}
        </li>
        <li>
          do yarn start or <code>npm start</code> to see is locally
        </li>
        <li>
          Delete the favicon.io document (otherwise you will not be able to
          deploy)
        </li>
        <li>Delete logo.svg same reason as above</li>
        <li>
          In App.js remove import logo from './log.svg'; and any reference to
          favicon.io in App.js and index.html file
        </li>
        <li>
          In command line do{" "}
          <code>
            {" "}
            yarn add react-useinterval or npm install react-useinterval{" "}
          </code>
          (if you want to use state in app)
        </li>
        <li>*** ADD DETAILS ON HOW TO ORGANIZE FOLDERS****</li>
        <li>Make a repository in github</li>
        <li>Initiate git on your project git init</li>
        <li>
          Follow steps from github to put into command line to connect project.
        </li>
        <li>
          {" "}
          In package.json add at the top
          <code>"homepage": "http://saykaren.github.io/saykarenaugsix",</code>
           or the equavalent
        </li>
        <li>
          Copy items from a good repository like sayKarenRecipes
          <br />
          <code>cp ThisFolder/. ~/Desktop/karenProgram/....</code>
          <br />
          copy logo in public
          <br />
          copy footer.js
          <br />
          copy asset folder (can always delete what I don't need)
          <br />
          copy styling folder (can always delete what I don't need)
          <br />
        </li>
      </ul>
      <h3>
        <a
          href="https://create-react-app.dev/docs/deployment/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Follow for steps to deploy
        </a>
      </h3>
      <ul>
        <li>npm install --save gh-pages</li>
        <li>
          {`Add the following scripts in your package.json in scripts`}
          <ul>
            <li>{`"predeploy": "npm run build",`}</li>
            <li>{`"deploy": "gh-pages -d build",`}</li>
            <li>{`"start": "react-scripts start",`}</li>
            <li>{`"build": "react-scripts build",`}</li>
          </ul>
        </li>
        <li>npm run deploy</li>
        <li>Next step see: Proper Folder Structure</li>
      </ul>
    </>
  );
};

export default CreateReactAppSteps;
