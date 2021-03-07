import React from "react";
import "../Styling/App.scss";
import interfaceExample from "../Assests/interface.jpeg";
import incomingProps from "../Assests/incomingProps.jpeg";
import inline from "../Assests/Inline.jpeg";
import useStateImage from "../Assests/useState_setState.jpeg";

import GitCommands from "./GitCommands";

const App =()=> {
  return (
    <div className="App">
      <header className="App-header">sayKaren's Cheatsheet</header>
      <section className="instructionSection">
        <div className="instructionalBox">
          <h2>Props examples when passing useState items</h2>
          <p>
            {`Sending a useState item you need to have return as void. Example: setState: (arg1: boolean) => void`}{" "}
          </p>
          <p>{`Not required use ? Maybe?: string`} </p>
          <img src={incomingProps} alt="incoming Props" />
          <p>{`Other items to think of is if any argruments are passed and you need to list those as arg1, arg2 with the type of item that is being sent.`}</p>
          <img src={useStateImage} alt="useState Set" />
          <p>{`When initially setting state you can also set the type of object it is. See examples above but such as contributionTitle will 
          start as a string so I used useState<string>(''). Or for other states that start as numbers such as exampleSelection I used useState<number>(0)`}</p>
        </div>
        <div className="instructionalBox">
          <h2>Interface Examples </h2>
          <img src={interfaceExample} alt="interface" />
          <p>
            {`Start with the lowest level for example the ingredients level and determine that object. Then put that interface item into the next.
          As you can see in ReceipeDataInterface ingredients references Array<IngredientsInterface> meaning this section is an array of the object described above it.`}{" "}
          </p>
          <p>{`Secondly notice instructions you can see is set as an array of strings Array<string>`}</p>
        </div>
        <div className="instructionalBox">
          <h2>Inline Typescript </h2>
          <img src={inline} alt="inline" />
          <p>{``} </p>
          <p>{``}</p>
        </div>

        <div className="instructionalBox">
          <a
            href="https://dev.w3.org/html5/html-author/charref"
            rel="noreferrer noopener"
            target="_blank"
          >
            Character References
          </a>
        </div>
        <div className="instructionalBox">
          <a
            href="https://material.io/resources/icons/?style=baseline"
            rel="noreferrer noopener"
            target="_blank"
          >
            Icons
          </a>
        </div>
        <div className="instructionalBox">
          <h2>Create a React App</h2>
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
        </div>
        <p>reference how to setup app?</p>
        <div>codes for typescript and sass and useInterval for state</div>
        <p>git checkout –b development </p>
        <GitCommands/>

        <div className="instructionalBox">
          <h2>Add SASS Steps</h2>
          <ul>
            <li>Add with git command: yarn add node-sass</li>
            <li>Now rename ./src/App.css to ./src/App.scss</li>
            <li>Open ./src/App.js and you will find import './App.css'. Change it to import './App.<b>scss</b>'</li>
            <li>Create a sass file name it variables.scss under ./src directory. Typically add a directory called Styling to keep your styling items in.</li>
            <li>Open variables.scss file and start with $primary-color: #282c34; $secondary-color: #61dafb;</li>
            <li>Navigate to App.scss and add to the top @import './variables.scss'</li>
            <li>Now you can add the $primary-color instead a direct color name in your code so if you change colors later it will change all spots.</li>
            <li>Example .App-link{`{color: $secondary-color;}`}</li>
          </ul>
          <p></p>
          <p></p>

        </div>
        <div className="instructionalBox">
          <h2>Filter Fun</h2>
          <p>
            With Array.filter(), you don't have to create the new array
            beforehand. You can define the variable as the output
            of Array.filter().  Inside the Array.filter() callback function,
            return true if the item should be added to the new array, and false
            if it shouldn’t. Under-the-hood, Array.filter() loops through each
            item in the original array, runs your callback method on each item,
            creates a new array, and pushes the items that return true. 
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
        </div>
        <div className="instructionalBox">
          <h2>Reduce Racing</h2>
          <p>Reduce to find largest number</p>
          <p>{`var myCode =  [4, 9, 7, 2, 1, 8]; `}</p>
          <p>{`myCode.reduce((acc,num)=> acc>num ? acc: num, 0); // 9`}</p>
          <p>OR</p>
          <p>Sum of your array</p>
          <p>{`myCode.reduce((acc,num)=> acc+num, 0); `}</p>
        </div>
        <div className="instructionalBox">
          <h2>Mapping Madness</h2>
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
        </div>
      </section>
    </div>
  );
}

export default App;
