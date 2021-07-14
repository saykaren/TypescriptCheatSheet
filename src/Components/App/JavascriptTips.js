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
                <a href="https://flaviocopes.com/package-json/" target="_blank" rel="noopener noreferrer"> Package.json Guide</a>
                </li>
            </ul>
        </li>
      </ul>
    </div>
  );
};

export default JavascriptTips;
