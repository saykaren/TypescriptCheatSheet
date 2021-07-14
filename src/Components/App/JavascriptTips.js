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
      </ul>
    </div>
  );
};

export default JavascriptTips;
