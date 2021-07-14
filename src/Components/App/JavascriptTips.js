import * as React from "react";

const JavascriptTips = () => {
  return (
    <div className="instructionalBox">
      <ul>
        <li>
          String Literal
          <ul>
            <li>
              {" "}
              {`
var footer = Quality:`}{" "}
              &#36;{`{qualityStatus};`}
            </li>
            <li>putting a value in a string rather than concat</li>
          </ul>
        </li>
        <li>
          Object Destructuring
          <ul>
            <li>
              {`const person = {
  firstName: "Lindsay",
  lastName: "Criswell",
  city: "NYC"
}`}
            </li>
            <li>Destructuring lets us streamline this code</li>
            <li>{`const { firstName, lastName, city } = person;`}</li>
            <li>
              Access it by{" "}
              {`console.log(firstName) // Lindsay
`}{" "}
              rather than {`console.log(person.firstName) // Lindsay`}
            </li>
            <li>
              <a
                href="https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Resource
              </a>
            </li>
          </ul>
        </li>
        <li>
          Package.json
          <ul>
            <li>
              <a
                href="https://flaviocopes.com/package-json/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Package.json Guide
              </a>
            </li>
          </ul>
        </li>
        <li>
          Inherited Functions
          <ul>
            <li>
              To find the different inherited functions you can use for Array
              you can put in Array.prototype; into Chrome browser in console
            </li>
          </ul>
        </li>
        <li>
          Spread Operator
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                MDN Spread syntax (...)
              </a>
            </li>
            <li>
              <a
                href="https://www.dmcinfo.com/latest-thinking/blog/id/9668/5-great-uses-of-the-spread-operator-in-a-react-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                5 Great Uses of Spread Operator in React App
              </a>
            </li>
          </ul>
        </li>
        <li>
            CRUD
            <ul>
                <li>
                CRUD - A website must do all four Create, Read (hooks), Update, Delete
                </li>
            </ul>
        </li>
      </ul>
    </div>
  );
};

export default JavascriptTips;
