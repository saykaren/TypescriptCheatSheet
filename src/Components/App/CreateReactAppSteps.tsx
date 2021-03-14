import React from "react";
import ComponentSetup from "../Assests/ComponentSetup.jpeg";

const CreateReactAppSteps = () => {
  return (
    <>
 
          <p>Check that you have node or yarn. node -v or yarn -v</p>
          <p>{`create-react-app <name of app> (note make sure name is all lower case)`}</p>
          <p>cd into folder</p>
          <p>do yarn start or npm start to see is locally</p>
          <p>
            Delete the favicon.io document (otherwise you will not be able to
            deploy)
          </p>
          <p>Delete logo.svg same reason as above</p>
          <p>
            In App.js remove import logo from './log.svg'; and any reference to
            favicon.io in App.js and index.html file
          </p>
          <p>
            in command line do
            <br />
            yarn add react-useinterval (if you want to use state in app)
          </p>
          <p>*** ADD DETAILS ON HOW TO ORGANIZE FOLDERS****</p>
          <p>Make a repository in github</p>
          <p>initiate git on your project git init</p>
          <p>
            Follow steps from github to put into command line to connect
            project.{" "}
          </p>
          <p>
            In package.json addd at the top
            "homepage": "http://saykaren.github.io/saykarenaugsix", or the
            equavalent
          </p>
          <a
            href="https://create-react-app.dev/docs/deployment/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Follow for steps to deploy
          </a>
          <p>npm install --save gh-pages</p>
          <p>{`Add the following scripts in your package.json:`}</p>
          <p>{`"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",`}</p>
          <p>npm run deploy</p>
        
        <p>reference how to setup app?</p>
        <div>codes for typescript and sass and useInterval for state</div>
        <p>git checkout –b development </p>
    </>
  );
};

export default CreateReactAppSteps;
