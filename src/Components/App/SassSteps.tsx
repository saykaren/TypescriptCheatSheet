import React from "react";

const SassSteps = () => {
  return (
    <>

<div className="instructionalBox">
          <h2>Add SASS Steps</h2>
          <ul>
            <li>Add with git command: yarn add node-sass</li>
            <li>Now rename ./src/App.css to ./src/App.scss</li>
            <li>
              Open ./src/App.js and you will find import './App.css'. Change it
              to import './App.<b>scss</b>'
            </li>
            <li>
              Create a sass file name it variables.scss under ./src directory.
              Typically add a directory called Styling to keep your styling
              items in.
            </li>
            <li>
              Open variables.scss file and start with $primary-color: #282c34;
              $secondary-color: #61dafb;
            </li>
            <li>
              Navigate to App.scss and add to the top @import './variables.scss'
            </li>
            <li>
              Now you can add the $primary-color instead a direct color name in
              your code so if you change colors later it will change all spots.
            </li>
            <li>Example .App-link{`{color: $secondary-color;}`}</li>
          </ul>
          <h3>Resources</h3>

<a href="https://dev.to/ruppysuppy/master-useful-css-pseudo-classes-lh2" target="_blank" rel="noopener noreferrer"> CSS Pseudo-Classes</a>


        </div>
    </>
  );
};

export default SassSteps;
