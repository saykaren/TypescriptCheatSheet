(this.webpackJsonpcheatsheet=this.webpackJsonpcheatsheet||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),a=r.n(c),o=r(4),s=r.n(o),i=(r(10),r(2)),l=(r(11),[{action:"Start tracking",command:"git init",note:"",category:"Basics"},{action:"Make a new file",command:"touch <filename+type>",note:"Example (touch example.html or example.js or example.css",category:"Basics"},{action:"Download latest changes in project",command:"git pull",note:"",category:"Basics"},{action:"Create new directory",command:"Mkdir <name-of-your_directory",note:"AKA file",category:"Basics"},{action:"Status of changes",command:"git status",note:"",category:"Basics"},{action:"Check a version",command:"(application) -version",note:"example: node -version or npm -version",category:"Basics"},{action:"Add work from staging",command:"git add",note:"If you do git add . (with period it will add all files in staging",category:"Basics"},{action:"Commit Work",command:"git commit -m '<message here>'",note:"<> not needed",category:"Basics"},{action:"Push to Github",command:"git push origin <branchName>",note:"Never push to master you need to be on a branch and push to a branch",category:"Basics"},{action:"Make a file with data in it",command:"Echo 'Hello World' <filename>",note:"This will put Hello World in the filename you put",category:"Basics"},{action:"Create a branch",command:"git checkout -b <New_branch_name>",note:"",category:"Branching"},{action:"Checkout older version",command:"git checkout <sha>",note:"",category:"Branching"},{action:"Delete Branches",command:"git branch -d <branch_name>",note:"",category:"Branching"},{action:"Change head back to a given commit",command:"git reset <commit>",note:"",category:"Branching"},{action:"Checkout branch or main",command:"git checkout <branch or main>",note:"",category:"Branching"},{action:"List out branches",command:"git branch -a",note:"",category:"Branching"},{action:"Merge Back",command:"git checkout master git merge <branch_name>",note:"",category:"Branching"},{action:"Go to main directory",command:"cd ~",note:"",category:"Navigation"},{action:"Move to a folder",command:"cd <folder name>",note:"",category:"Navigation"},{action:"Go back a folder",command:"cd ..",note:"",category:"Navigation"},{action:"Exit",command:".exit",note:"",category:"Navigation"},{action:"Check items in folder",command:"ls",note:"",category:"Navigation"},{action:"Recent updates",command:"git log",note:"",category:"Navigation"},{action:"Sha of current state",command:"git describe --always",note:"",category:"Basics"},{action:"Remove",command:"rm -rf <file name>",note:"",category:"Removing"},{action:"Kill this program",command:"<control>+C",note:"You hit those keys",category:"Removing"},{action:"Delete all files in folder",command:"rm -f*",note:"",category:"Removing"},{action:"Rename",command:"git mv <old_file_name><new_file_name>",note:"",category:"Removing"},{action:"Delete File",command:"git rm --cached <file_name>",note:"",category:"Removing"},{action:"Stash Changes",command:"git stash",note:"Bring back stash by git stash pop",category:"Removing"},{action:"Create App",command:"npx create-react-app <name_all_lower_case>",note:"",category:"Creation"},{action:"Start App",command:"yarn start or npm start ",note:"",category:"Creation"},{action:"Confirm Remote Setup",command:"git remove -v",note:"",category:"Remote"},{action:"Add Upstream",command:"git remote add upstream <link>",note:"",category:"Remote"},{action:"Change Origin Link",command:"git remote set-url origin <link>",note:"",category:"Remote"},{action:"Open Program",command:"open -a vscode",note:"Open vscode",category:"Open"},{action:"Clone",command:"git clone <file_link>",note:"",category:"Clone"},{action:"Fetching/pulling down code",command:"fetch",note:"",category:"Branching"},{action:"Update Code",command:"git pull",note:"",category:"Branching"},{action:"Get from upstreamn main",command:"git pull upstream main",note:"",category:"Branching"},{action:"Difference in code",command:"git diff -cached",note:"",category:"Branching"},{action:"Rewrite commits",command:"git rebase -i main - autosquash",note:"I is for interactive",category:"Branching"},{action:"Shows all the commits",command:"git reflog",note:"Shows all the commits that have happened",category:"Other"},{action:"Push code up",command:"git push -u origin HEAD",note:"If you are on the latest verision of the branch",category:"Branching"},{action:"Install specific version",command:"npm install [package-name]@[version-number]",note:"",category:"Basics"},{action:"Up one level",command:"~",note:"Tilde",category:"Basics"},{action:"Go up one level from head",command:"Git checkout HEAD~",note:"Tilde",category:"Basics"},{action:"Checks out 2 from where you are at",command:"Git checkout HEAD~2",note:"Goes back 2 commits",category:"Basics"},{action:"1 commit back from main",command:"Git checkout main~1 ",note:"",category:"Basics"},{action:"Start",command:"git",note:"",category:"Basics"},{action:"Safely pull data",command:"git fetch",note:"Fetch is always safe",category:"Basics"},{action:"Fetches and merges (merge isn't always safe",command:"git pull",note:"Merge isn't always safe",category:"Basics"},{action:"Suggested push",command:" git push -u origin HEAD --force-with-lease",note:"Dave approved",category:"Basics"},{action:"Latest Code with Rebase",command:"git pull --rebase origin master",note:"Give me the latest code from origin server but rebase the branch I am on, on top of the latest merge from origin",category:"Basics"},{action:"START",command:"git",note:"",category:"Basics"},{action:"START",command:"git",note:"",category:"Basics"},{action:"START",command:"git",note:"",category:"Basics"}]),j=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"tableColumn",children:"Action"}),Object(n.jsx)("th",{className:"tableColumn",children:"Git command"}),Object(n.jsx)("th",{className:"tableColumn",children:"Note"})]}),l&&l.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tableColumn",children:e.action}),Object(n.jsx)("td",{className:"tableColumn",children:e.command}),Object(n.jsx)("td",{className:"tableColumn",children:e.note})]})}))]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Resources"}),Object(n.jsx)("a",{href:"https://ohshitgit.com/",rel:"noopener",target:"_blank",children:"Oh Shit Git Resource"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"http://gitimmersion.com/lab_03.html",rel:"noopener",target:"_blank",children:"Basic Git"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://git-school.github.io/visualizing-git/",rel:"noopener",target:"_blank",children:"Visual Git"})]})]})},h=r.p+"static/media/ComponentSetup.a49055b3.jpeg",d=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("img",{src:h,alt:"Component Setup",className:"imageGroup"})})},m=r.p+"static/media/incomingProps.dbfc857f.jpeg",b=r.p+"static/media/useState_setState.7cddcdd3.jpeg",p=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["Sending a useState item you need to have return as void. Example: setState: (arg1: boolean) => void"," "]}),Object(n.jsxs)("p",{children:["Not required use ? Maybe?: string"," "]}),Object(n.jsx)("img",{src:m,alt:"incoming Props",className:"imageGroup"}),Object(n.jsx)("p",{children:"Other items to think of is if any argruments are passed and you need to list those as arg1, arg2 with the type of item that is being sent."}),Object(n.jsx)("img",{src:b,alt:"useState Set",className:"imageGroup"}),Object(n.jsx)("p",{children:"When initially setting state you can also set the type of object it is. See examples above but such as contributionTitle will \n  start as a string so I used useState<string>(''). Or for other states that start as numbers such as exampleSelection I used useState<number>(0)"})]})},g=r.p+"static/media/interface.d315b9cd.jpeg",u=function(){return Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsx)("img",{src:g,alt:"interface",className:"imageGroup"}),Object(n.jsxs)("p",{children:["Start with the lowest level for example the ingredients level and determine that object. Then put that interface item into the next.\n        As you can see in ReceipeDataInterface ingredients references Array<IngredientsInterface> meaning this section is an array of the object described above it."," "]}),Object(n.jsx)("p",{children:"Secondly notice instructions you can see is set as an array of strings Array<string>"})]})},x=r.p+"static/media/InterfacePropsExample.684c975c.jpeg",O=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"Add TypeScript to existing app you must first install it. In git navigate into your project and do npm install --save typescript OR yarn add typescript"}),Object(n.jsx)("p",{children:"Next rename any file to be TypeScript file (e.g. App.js to App.tsx). Restart your development server"}),Object(n.jsx)("p",{children:"Under components make an Interface folder to hold interface objects.  "}),Object(n.jsx)("img",{src:g,alt:"Interface",className:"imageGroup"}),Object(n.jsx)("p",{children:"Example of interface props"}),Object(n.jsx)("img",{src:x,alt:"Interface Props Example",className:"imageGroup"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",rel:"noreferrer noopener",target:"_blank",children:"TypeScript Handbook for JS Programmers"})]})},f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAbUlEQVQoz2NgGLTgv+z/8P/1aDD8vyyykvL/P/9jAz//l8OUJAO5C//b/Tf8z4JiugZQ9P//ZBCT8f+b/9v+R4PNOvWfG80Z24CyjAz/1YCSkf+fQC1IRVMUCRRTI1IRMdYR5XAig4DIwBxkAABE/LubDJP3LAAAAABJRU5ErkJggg==",y=function(e){var t=e.title,r=e.htmlElement,a=e.propsActive,o=Object(c.useState)(!1),s=Object(i.a)(o,2),l=s[0],j=s[1];return Object(n.jsx)(n.Fragment,{children:a||l?Object(n.jsxs)("div",{className:"instructionalBox active",children:[Object(n.jsxs)("h2",{children:[" ",Object(n.jsx)("img",{src:f,className:"exit",alt:"Toggle off",onClick:function(e){return j(!l)}})," ",t," "]}),Object(n.jsxs)("section",{className:"section-main",children:[" ",r]}),Object(n.jsx)("img",{src:f,className:"exit",alt:"Toggle off",onClick:function(e){return j(!l)}})]}):Object(n.jsxs)("div",{className:"instructionalBox inactive",onClick:function(e){return j(!l)},children:[Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAbElEQVQoz2NgGLTgv+z/8P/1aDD8vyyykvL/P/9jAz//l8OUJAO5C/9roJjM8t/wvx1Q9P//ZBCX8f+b/9vQLOf+fwpsTvT/bUBZRob/akBuJJqiVKh1T/5HAkk1IhURYx1RDicyCIgMzEEGABbyu5sORT6eAAAAAElFTkSuQmCC",className:"exit",alt:"Toggle on",onClick:function(e){return j(!l)}}),Object(n.jsx)("h2",{className:"TitleClosed",children:t})]})})},v=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"Check that you have node or yarn. node -v or yarn -v"}),Object(n.jsx)("p",{children:"npx create-react-app <name of app> (note make sure name is all lower case)"}),Object(n.jsx)("p",{children:"cd into folder"}),Object(n.jsx)("p",{children:"do yarn start or npm start to see is locally"}),Object(n.jsx)("p",{children:"Delete the favicon.io document (otherwise you will not be able to deploy)"}),Object(n.jsx)("p",{children:"Delete logo.svg same reason as above"}),Object(n.jsx)("p",{children:"In App.js remove import logo from './log.svg'; and any reference to favicon.io in App.js and index.html file"}),Object(n.jsxs)("p",{children:["in command line do",Object(n.jsx)("br",{}),"yarn add react-useinterval or npm install react-useinterval (if you want to use state in app)"]}),Object(n.jsx)("p",{children:"*** ADD DETAILS ON HOW TO ORGANIZE FOLDERS****"}),Object(n.jsx)("p",{children:"Make a repository in github"}),Object(n.jsx)("p",{children:"initiate git on your project git init"}),Object(n.jsxs)("p",{children:["Follow steps from github to put into command line to connect project."," "]}),Object(n.jsx)("p",{children:'In package.json addd at the top "homepage":\xa0"http://saykaren.github.io/saykarenaugsix",\xa0or the equavalent'}),Object(n.jsx)("a",{href:"https://create-react-app.dev/docs/deployment/",rel:"noreferrer noopener",target:"_blank",children:"Follow for steps to deploy"}),Object(n.jsx)("p",{children:"npm install --save gh-pages"}),Object(n.jsx)("p",{children:"Add the following scripts in your\xa0package.json:"}),Object(n.jsx)("p",{children:'"scripts": {\n+   "predeploy": "npm run build",\n+   "deploy": "gh-pages -d build",\n  "start": "react-scripts start",\n  "build": "react-scripts build",'}),Object(n.jsx)("p",{children:"npm run deploy"}),Object(n.jsx)("p",{children:"reference how to setup app?"}),Object(n.jsx)("div",{children:"codes for typescript and sass and useInterval for state"}),Object(n.jsx)("p",{children:"git checkout \u2013b development\xa0"})]})},A=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"instructionalBox",children:Object(n.jsx)("a",{href:"https://dev.w3.org/html5/html-author/charref",rel:"noreferrer noopener",target:"_blank",children:"Character References"})}),Object(n.jsx)("div",{className:"instructionalBox",children:Object(n.jsx)("a",{href:"https://material.io/resources/icons/?style=baseline",rel:"noreferrer noopener",target:"_blank",children:"Icons"})})]})},k=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"instructionalBox",children:[Object(n.jsx)("h2",{children:"Add SASS Steps"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Add with git command: yarn add node-sass"}),Object(n.jsx)("li",{children:"Now rename ./src/App.css to ./src/App.scss"}),Object(n.jsxs)("li",{children:["Open ./src/App.js and you will find import './App.css'. Change it to import './App.",Object(n.jsx)("b",{children:"scss"}),"'"]}),Object(n.jsx)("li",{children:"Create a sass file name it variables.scss under ./src directory. Typically add a directory called Styling to keep your styling items in."}),Object(n.jsx)("li",{children:"Open variables.scss file and start with $primary-color: #282c34; $secondary-color: #61dafb;"}),Object(n.jsx)("li",{children:"Navigate to App.scss and add to the top @import './variables.scss'"}),Object(n.jsx)("li",{children:"Now you can add the $primary-color instead a direct color name in your code so if you change colors later it will change all spots."}),Object(n.jsxs)("li",{children:["Example .App-link","{color: $secondary-color;}"]})]}),Object(n.jsx)("h3",{children:"Resources"}),Object(n.jsx)("a",{href:"https://dev.to/ruppysuppy/master-useful-css-pseudo-classes-lh2",target:"_blank",rel:"noopener noreferrer",children:" CSS Pseudo-Classes"})]})})},w=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"With Array.filter(), you don't have to create the new array beforehand. You can define the variable as the output of\xa0Array.filter().\xa0 Inside the\xa0Array.filter() callback function, return true if the item should be added to the new array, and false if it shouldn\u2019t. Under-the-hood,\xa0Array.filter() loops through each item in the original array, runs your callback method on each item, creates a new array, and pushes the items that return true.\xa0"}),Object(n.jsx)("p",{children:'var\xa0wizards = [{name: "Hermione Granger", house: "Gryffindor" }, {name: "Cedric Diggory", house: "Hufflepuff" },]'}),Object(n.jsx)("p",{children:'var\xa0myHuffArray\xa0=\xa0wizards.filter(x=>(x.house==="Hufflepuff"));\xa0'}),Object(n.jsx)("p",{children:"OR"}),Object(n.jsx)("p",{children:'var people = [ \n\n{id : "1", name : "abc", gender : "m", age :"15" }, {id : "2", name : "a", gender : "m", age :"25" }, \n\n{id : "3", name : "efg", gender : "f", age :"5" },  {id : "4", name : "hjk", gender : "m", age :"35" }, \n\n{id : "5", name : "ikly", gender : "m", age :"41" }, {id : "6", name : "ert", gender : "f", age :" 30" }, \n\n{id : "7", name : "qwe", gender : "f", age :" 31" }, {id : "8", name : "bdd", gender : "m", age :" 78" } \n\n],  '}),Object(n.jsx)("p",{children:"  id_filter = [1,4,5,8],"}),Object(n.jsx)("p",{children:"people.filter((person) => id_filter.includes(person.id)) "})]})},C=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"Reduce to find largest number"}),Object(n.jsx)("p",{children:"var myCode =  [4, 9, 7, 2, 1, 8]; "}),Object(n.jsx)("p",{children:"myCode.reduce((acc,num)=> acc>num ? acc: num, 0); // 9"}),Object(n.jsx)("p",{children:"OR"}),Object(n.jsx)("p",{children:"Sum of your array"}),Object(n.jsx)("p",{children:"myCode.reduce((acc,num)=> acc+num, 0); "})]})},S=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:'var myObj = [{ first: "Romeo", last: "Montague" }, \n          { first: "Mercutio", last: null}, {first: "Tybalt", last: "Capulet"},{first: "Tybalt", last: "Capulet", age: 40,}] '}),Object(n.jsx)("p",{children:'result = myObj.map(x=>x.last == "Capulet" ? x.last : 1 ); '}),Object(n.jsx)("p",{children:"OR"}),Object(n.jsx)("p",{children:"const library = [{author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},\n{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, \n{ author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; "}),Object(n.jsx)("p",{children:"var result10 = library.map(x=>( (!x.readingStatus) ? `Need to read ${x.title} by ${x.author}` : `Already read ${x.title} by ${x.author}`));"}),Object(n.jsx)("p",{children:""}),Object(n.jsx)("p",{children:""})]})},E=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://create-react-app.dev/docs/getting-started",rel:"noreferrer noopener",target:"_blank",children:"Create React App Tips"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://balsamiq.com/learn/courses/wireframing/",rel:"noreferrer noopener",target:"_blank",children:"UI information wireframes"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://kentcdodds.com/blog/prop-drilling",rel:"noreferrer noopener",target:"_blank",children:"Prop Drilling"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://mtlynch.io/human-code-reviews-1/",rel:"noreferrer noopener",target:"_blank",children:"Code Reviews"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://css-tricks.com/considerations-styling-modal/",rel:"noreferrer noopener",target:"_blank",children:"Modal info"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.draw.io/",rel:"noreferrer noopener",target:"_blank",children:"Draw"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.figma.com/",rel:"noreferrer noopener",target:"_blank",children:"Figma - WireFrame UI/UX Tool"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://wireframe.cc/",rel:"noreferrer noopener",target:"_blank",children:"WireFrame"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://uxplanet.org/5-free-quick-wireframe-tools-for-ui-ux-designers-in-2017-189e6a594fda",rel:"noreferrer noopener",target:"_blank",children:"6 Free Quick Wireframe Tools"}),Object(n.jsx)("br",{})]})},_=r.p+"static/media/sayKarenWhite.a7e3b86e.png",R=function(){return Object(n.jsxs)("footer",{id:"footer",className:"footerDetails",children:[Object(n.jsxs)("section",{children:["Website created by:",Object(n.jsx)("a",{href:"http://saykaren.com",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:_,className:"footerDetails",id:"sayKarenLogo",alt:"sayKaren.com"})})]}),Object(n.jsx)("section",{className:"music",children:Object(n.jsx)("a",{href:"https://open.spotify.com/playlist/5CcMpyH0f05YXqwNrHEvHz",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAoElEQVQ4y+XRsRGCQBBGYcylDGIqMIGEoqgES6AIynBIIYIZCKSAz8TAQ0BDZ/zDd/t2d26j6Pcjc9VaLFpX2XFxorFOI9krv5gxKqXOzlKlEbPLdvcJtTigsRrTxhQNaqc3flKjWeMcQ9j9ZcqAPIQVyt3PKFGF6IZ0V0hxC9Gd7YWeS3EPEQ4vtH5/vdQ3/E+F7qPQhUKhPxR6RfSreQA220TIeeIt/QAAAABJRU5ErkJggg==",alt:"music"})})})]})},B=r.p+"static/media/PropsComponentSetupImage.2bad29c9.jpeg",I=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("img",{src:B,alt:"Component Setup",className:"imageGroup"})})},N=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"Command to start python enter python3 in terminal "}),Object(n.jsx)("p",{children:"Command to end CRL + D"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("ol",{children:Object(n.jsx)("a",{href:"https://levelup.gitconnected.com/a-guide-to-upgrade-your-python-to-3-9-44ccb3eae31a",rel:"noreferrer noopener",target:"_blank",children:"Install and check Python Version"})}),Object(n.jsx)("ol",{children:Object(n.jsx)("a",{href:"https://realpython.com/run-python-scripts/",rel:"noreferrer noopener",target:"_blank",children:"Run Python"})}),Object(n.jsx)("ol",{children:Object(n.jsx)("a",{href:"https://www.python.org/",rel:"noreferrer noopener",target:"_blank",children:"Python Resource"})}),Object(n.jsx)("ol",{children:Object(n.jsx)("a",{href:"https://www.pythoncheatsheet.org/",rel:"noreferrer noopener",target:"_blank"})}),Object(n.jsx)("ol",{children:Object(n.jsx)("a",{href:"https://behave.readthedocs.io/en/stable/tutorial.html",rel:"noreferrer noopener",target:"_blank",children:"Behave Resource"})}),Object(n.jsxs)("ol",{children:["      ",Object(n.jsx)("a",{href:"https://www.freecodecamp.org/learn/scientific-computing-with-python/",rel:"noreferrer noopener",target:"_blank",children:"Scientific Computing with Python - FreeCodeCamp"})]})]})]})},F=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"leftCentered",children:["- src/",Object(n.jsx)("br",{}),"-- Components/",Object(n.jsx)("br",{}),"--- App/ (components)",Object(n.jsx)("br",{}),"---- App.js",Object(n.jsx)("br",{}),"---- Footer.tsx",Object(n.jsx)("br",{}),"--- Assets/ (images)",Object(n.jsx)("br",{}),"--- Data/ (data sets)",Object(n.jsx)("br",{}),"--- Interface/ (inteface objects)",Object(n.jsx)("br",{}),"--- Styling/ (SCSS files) ",Object(n.jsx)("br",{}),"---- App.scss ",Object(n.jsx)("br",{})]})})},T=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("p",{children:'<a href="https://saykaren.com" target="_blank" rel="noopener noreferrer"> sayKaren</a>'})})},D=function(){return Object(n.jsxs)("section",{className:"leftCentered",children:[Object(n.jsx)("div",{children:"Definition: Hook that runs side-effects independently of rendering"}),Object(n.jsx)("div",{children:"import {useEffect} from 'react'; "}),Object(n.jsx)("div",{children:"useEffect( {callBack},  [dependencies]);"}),Object(n.jsx)("div",{children:"Dependencies executes callBack only if the dependencies have changed between reenderings."}),Object(n.jsx)("div",{children:"    If dependency is not provided callBack will run after every rendering."}),Object(n.jsx)("div",{children:" If an empty array then the callBack runs once after the initial rendering"}),Object(n.jsx)("div",{children:"       If dependencies are state values the callBack runs only when any dependency value changes. "}),Object(n.jsxs)("a",{href:"https://blog.logrocket.com/useeffect-vs-uselayouteffect/",target:"_blank",rel:"noopener noreferrer",children:[" ","useEffect vs. useLayoutEffect"]}),Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"https://dmitripavlutin.com/react-useeffect-explanation/",target:"_blank",rel:"noopener noreferrer",children:[" ","useEffect explained"]}),Object(n.jsx)("br",{})]})},P=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://www.digitalocean.com/community/tutorials/react-class-components",target:"_blank",rel:"noopener noreferrer",children:"Class Component Overview in React"})," ",Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://dev.to/danielleye/react-class-component-vs-function-component-with-hooks-13dg",target:"_blank",rel:"noopener noreferrer",children:"Class Component VS Function Component with Hooks"})," ",Object(n.jsx)("br",{})]})},G=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://www.w3.org/WAI/standards-guidelines/wcag/",rel:"noreferrer noopener",target:"_blank",children:"Web Content Accessibility Guidelines"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.w3.org/WAI/ER/tools/",rel:"noreferrer noopener",target:"_blank",children:"Evaluation Tool List"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://color.a11y.com/Contrast/",rel:"noreferrer noopener",target:"_blank",children:"Testing Font Contrast"}),Object(n.jsx)("br",{})]})},Q=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"http://eloquentjavascript.net/",rel:"noreferrer noopener",target:"_blank",children:"Eloquent JavaScript - Covering the language and runtime specifics."}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"http://speakingjs.com/",rel:"noreferrer noopener",target:"_blank",children:"Speaking JavaScript - In-depth guide beginning with the basics."}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"http://addyosmani.com/resources/essentialjsdesignpatterns/book/",rel:"noreferrer noopener",target:"_blank",children:"JavaScript Design Patterns - Classical and JavaScript specific design patterns."}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://mostly-adequate.gitbooks.io/mostly-adequate-guide/",rel:"noreferrer noopener",target:"_blank",children:"Mostly Adequate Guide to Functional Programming - Excellent primer to functional programming using JavaScript."}),Object(n.jsx)("br",{})]})},z=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://regexr.com/",rel:"noreferrer noopener",target:"_blank",children:"RegEx testing"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.regextester.com/93821",rel:"noreferrer noopener",target:"_blank",children:"RegEx help with examples"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://htmlcheatsheet.com/js/",rel:"noreferrer noopener",target:"_blank",children:"JS / CSS / HTML Cheatsheet"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://jex.im/regulex/#!flags=&re=%5E(a%2B%7Cb%5Ba-f%5D)*%3F%24",rel:"noreferrer noopener",target:"_blank",children:"Regulex - Visual resource of RegEx"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://regex101.com",rel:"noreferrer noopener",target:"_blank",children:"RegEx sandbox and explantion"}),Object(n.jsx)("br",{})]})},M=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://mockaroo.com",rel:"noreferrer noopener",target:"_blank",children:"MockData"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://github.com/public-apis/public-apis",rel:"noreferrer noopener",target:"_blank",children:"APIs for testing"}),Object(n.jsx)("br",{})]})},U=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://frontend.turing.edu/lessons/",rel:"noreferrer noopener",target:"_blank",children:"Frontend Turing School Lessons"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://javascript30.com/",rel:"noreferrer noopener",target:"_blank",children:"Javascript 30 days"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw",rel:"noreferrer noopener",target:"_blank",children:"Codevolution - React Table Tutorial"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.freecodecamp.org/",rel:"noreferrer noopener",target:"_blank",children:"Free Code Camp"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://mastery.games/flexboxzombies/",rel:"noreferrer noopener",target:"_blank",children:"Flexbox Zombies - CSS Flexbox"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://developer.mozilla.org/en-US/",rel:"noreferrer noopener",target:"_blank",children:"MDN Web Docs"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://github.com/mvillaloboz/open-source-cs-degree",rel:"noreferrer noopener",target:"_blank",children:"Open-Source Computer Science Degree"}),Object(n.jsx)("br",{})]})},q=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Add Jest"}),Object(n.jsxs)("a",{href:"https://github.com/testing-library/jest-dom",target:"_blank",rel:"noopener noreferrer",children:[" ","JEST Installation"]}),Object(n.jsx)("p",{children:"npm install --save-dev @testing-library/jest-dom"}),Object(n.jsx)("h3",{children:"Add enzyme"}),Object(n.jsx)("p",{children:"npm i --save-dev enzyme enzyme-adapter-react-16"}),Object(n.jsx)("h3",{children:"Add Chai"}),Object(n.jsx)("p",{children:"npm install chai-enzyme --save-dev"}),Object(n.jsx)("p",{children:"in setupTests.js add"}),Object(n.jsx)("p",{children:"import Enzyme from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\n\nEnzyme.configure({ adapter: new Adapter() });"}),Object(n.jsx)("h3",{children:"Resources"}),Object(n.jsxs)("a",{href:"https://www.youtube.com/watch?v=XNzVMP7Mnxg",target:"_blank",rel:"noopener noreferrer",children:[" ","Video Tutorial"]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"https://www.youtube.com/watch?v=ZfvOHRX-FDM",target:"_blank",rel:"noopener noreferrer",children:[" ","React Query Based Component"]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"https://enzymejs.github.io/enzyme/docs/installation/",target:"_blank",rel:"noopener noreferrer",children:[" ","Enzyme Installation"]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675",target:"_blank",rel:"noopener noreferrer",children:[" ","Enzyme Testing - Medium article"]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"https://medium.com/@kaiz.hudda/how-to-setup-jest-enzyme-in-your-existing-react-app-in-5-mins-bf21841f4738",target:"_blank",rel:"noopener noreferrer",children:[" ","How to Setup Jest and Enyme in React App in 5 minutes"]})]})},L=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"https://sqlzoo.net/wiki/SELECT_Quiz",rel:"noreferrer noopener",target:"_blank",children:"Select Quiz"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.youtube.com/watch?v=7S_tz1z_5bA&t=299s",rel:"noreferrer noopener",target:"_blank",children:"MySQL Tutorial for Beginners"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://www.sqlteaching.com/#!group_by",rel:"noreferrer noopener",target:"_blank",children:"SQL Teaching"}),Object(n.jsx)("br",{})]})},H=r.p+"static/media/fetchExample.fec3e836.jpeg",J=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Install"}),Object(n.jsxs)("a",{href:"https://react-query.tanstack.com/overview",target:"_blank",rel:"noopener noreferrer",children:[" ","React-Query Documentation"]}),Object(n.jsx)("h3",{children:"Install"}),Object(n.jsx)("p",{children:"npm i --save react-query"}),Object(n.jsxs)("a",{href:"https://www.youtube.com/watch?v=x1rQ61otgtU",target:"_blank",rel:"noopener noreferrer",children:[" ","Video for installation"]}),Object(n.jsx)("p",{children:"npm i --save react-query-devtools"}),Object(n.jsx)("h3",{children:"Implement"}),Object(n.jsxs)("p",{children:["Import items",Object(n.jsx)("br",{}),"import { QueryClient, QueryClientProvider, useQuery } from 'react-query'\nimport {ReactQueryDevtools} from 'react-query/devtools';"]}),Object(n.jsxs)("p",{children:["initiate QueryClient by adding in function",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"const queryClient = new QueryClient();"]}),Object(n.jsxs)("p",{children:["In return of component then wrap the main app with QueryClient ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"  <QueryClientProvider client={queryClient}>***YOUR APP***</QueryClientProvider>"," "]}),Object(n.jsxs)("p",{children:["Then in the middle of QueryClientProvider tags add"," ","<ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />"]}),Object(n.jsx)("h3",{children:"Implement useQuery"}),Object(n.jsxs)("p",{children:["In component ","import {useQuery} from 'react-query';"]}),Object(n.jsxs)("p",{children:["In functional component before return use something to the sort of"," ",'  const drugData = useQuery(\n    ["drug", "url"],\n    fetchURL\n  );'," ",Object(n.jsx)("br",{})," string is description and the second argument is function which you build above the functional component"]}),Object(n.jsx)("h3",{children:"Fetch"}),Object(n.jsx)("img",{src:H,alt:"fetch Example"})]})},V=[{action:"Stateless Fuction component",command:"sfc",note:"",category:"Basics"},{action:"Import useState",command:"imrs",note:"",category:"Basics"},{action:"useEffect",command:"uef",note:"",category:"Basics"},{action:"useState Declare",command:"usf",note:"",category:"Basics"}],W=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"tableColumn",children:"Action"}),Object(n.jsx)("th",{className:"tableColumn",children:"Git command"}),Object(n.jsx)("th",{className:"tableColumn",children:"Note"})]}),V&&V.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"tableColumn",children:e.action}),Object(n.jsx)("td",{className:"tableColumn",children:e.command}),Object(n.jsx)("td",{className:"tableColumn",children:e.note})]})}))]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Resources"}),Object(n.jsx)("a",{href:"https://ohshitgit.com/",rel:"noopener",target:"_blank",children:"Oh Shit Git Resource"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"http://gitimmersion.com/lab_03.html",rel:"noopener",target:"_blank",children:"Basic Git"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://git-school.github.io/visualizing-git/",rel:"noopener",target:"_blank",children:"Visual Git"})]})]})},K=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain",rel:"noreferrer noopener",target:"_blank",children:"Github Custom Domains"}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:"Follow these steps"}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"Navigate to settings-pages- custom domain = Add custom domain (for all others than main do a sub domain like sayplay.saykaren.com"}),Object(n.jsx)("li",{children:"Save"}),Object(n.jsx)("li",{children:"Update DNS (godaddy add the A records with name = @ (@ = the main domain which is saykaren.com) value = the IP address github gave. (ONLY FIRST starting custom domain)"}),Object(n.jsx)("li",{children:"For sub domains I believe I need to add a CNAME record of host = drug (whatever the subdomain is) then value = drug.saykaren.com (where the website will be will need to test out)"}),Object(n.jsx)("li",{children:"Go to code in vscode."}),Object(n.jsx)("li",{children:"In code switch gh-pages branch and pull down the CNAME so that doesn't get overwritten."}),Object(n.jsx)("li",{children:"Ensure to pull the CNAME on gh-pages branch into local so it doesn't get lost"}),Object(n.jsx)("li",{children:"switch to main make branch to update the package.json homepage to the new url (for others remember to do sub domain like drug.saykaren.com)"}),Object(n.jsx)("li",{children:"commit branch code and push up"}),Object(n.jsx)("li",{children:"merge changes"}),Object(n.jsx)("li",{children:"switch to main git pull"}),Object(n.jsx)("li",{children:"All looks good then npm run deploy"}),Object(n.jsx)("li",{children:"Navigate back into github to this repository to settings-pages- if it says your site is READY to be published then click the Theme Chooser and do minimal."}),Object(n.jsx)("li",{children:"Now it should show your site is published in green."})]})]})},Z=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),r=t[0],a=t[1],o=Object(c.useState)(!1),s=Object(i.a)(o,2),l=(s[0],s[1]),h=Object(c.useState)(r),m=Object(i.a)(h,2),b=m[0],g=m[1];Object(c.useEffect)((function(){l(!1)}),[r]);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",onClick:function(e){return l(!0),a(!r),void g(!r)},children:"sayKaren's Cheatsheet"}),Object(n.jsxs)("section",{className:"instructionSection",children:[Object(n.jsx)(y,{title:"Props Examples - Passing useState Items",htmlElement:Object(n.jsx)(p,{}),propsActive:b}),Object(n.jsx)(y,{title:"Interface Examples",htmlElement:Object(n.jsx)(u,{}),propsActive:b}),Object(n.jsx)(y,{title:"Character References and Icons",htmlElement:Object(n.jsx)(A,{}),propsActive:b}),Object(n.jsx)(y,{title:"Create a React App",htmlElement:Object(n.jsx)(v,{}),propsActive:b}),Object(n.jsx)(y,{title:"Git Commands",htmlElement:Object(n.jsx)(j,{}),propsActive:b}),Object(n.jsx)(y,{title:"Add SASS Step by Step",htmlElement:Object(n.jsx)(k,{}),propsActive:b}),Object(n.jsx)(y,{title:"Functional Component Intial Setup",htmlElement:Object(n.jsx)(d,{}),propsActive:b}),Object(n.jsx)(y,{title:"Filter Fun",htmlElement:Object(n.jsx)(w,{})}),Object(n.jsx)(y,{title:"Reduce Racing",htmlElement:Object(n.jsx)(C,{}),propsActive:b}),Object(n.jsx)(y,{title:"Mapping Madness",htmlElement:Object(n.jsx)(S,{}),propsActive:b}),Object(n.jsx)(y,{title:"Adding TypeScript",htmlElement:Object(n.jsx)(O,{}),propsActive:b}),Object(n.jsx)(y,{title:"Component Initial Setup with Interface Props",htmlElement:Object(n.jsx)(I,{}),propsActive:b}),Object(n.jsx)(y,{title:"Python Behave",htmlElement:Object(n.jsx)(N,{}),propsActive:b}),Object(n.jsx)(y,{title:"Proper Folder Structure",htmlElement:Object(n.jsx)(F,{}),propsActive:b}),Object(n.jsx)(y,{title:"HTML Basic",htmlElement:Object(n.jsx)(T,{}),propsActive:b}),Object(n.jsx)(y,{title:"UseEffect Help",htmlElement:Object(n.jsx)(D,{}),propsActive:b}),Object(n.jsx)(y,{title:"Class Component Help",htmlElement:Object(n.jsx)(P,{}),propsActive:b}),Object(n.jsx)(y,{title:"ADA Compliant",htmlElement:Object(n.jsx)(G,{}),propsActive:b}),Object(n.jsx)(y,{title:"Free eBooks",htmlElement:Object(n.jsx)(Q,{}),propsActive:b}),Object(n.jsx)(y,{title:"RegEx and Online CheatSheet",htmlElement:Object(n.jsx)(z,{}),propsActive:b}),Object(n.jsx)(y,{title:"APIs and Mock Data",htmlElement:Object(n.jsx)(M,{}),propsActive:b}),Object(n.jsx)(y,{title:"Tutorials",htmlElement:Object(n.jsx)(U,{}),propsActive:b}),Object(n.jsx)(y,{title:"Testing Testing....",htmlElement:Object(n.jsx)(q,{}),propsActive:b}),Object(n.jsx)(y,{title:"SQL",htmlElement:Object(n.jsx)(L,{}),propsActive:b}),Object(n.jsx)(y,{title:"React-Query",htmlElement:Object(n.jsx)(J,{}),propsActive:b}),Object(n.jsx)(y,{title:"React Snippets",htmlElement:Object(n.jsx)(W,{}),propsActive:b}),Object(n.jsx)(y,{title:"Custom Domain",htmlElement:Object(n.jsx)(K,{}),propsActive:b}),Object(n.jsx)(y,{title:"Resources",htmlElement:Object(n.jsx)(E,{}),propsActive:b})]}),Object(n.jsx)(R,{})]})},Y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,13)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root")),Y()}},[[12,1,2]]]);
//# sourceMappingURL=main.5eaefde4.chunk.js.map