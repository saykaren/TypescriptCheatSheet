import React from "react";

const CssTricks = () => {
  return (
    <div>
      <ul>
        <li>
          <h3>Example</h3>
          <ul>
            <li>
              Has to be in an element but doesn't need to be a specific element
            </li>
            <li>{`root: {
                   --main-bg-color: brown;
                }`}</li>
            <li>
              Calling it:{" "}
              {`element {
                  background-color: var(--main-bg-color);
                  }`}
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            CSS variables
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CssTricks;
