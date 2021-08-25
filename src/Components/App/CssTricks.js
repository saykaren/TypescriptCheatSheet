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
        <li>
          user-select: none; --- disables the user from copying text from button
          made from div. So when clicking they don't accidently select it and
          other items text.
        </li>
        <li>
          div.UiButton.Disabled versus div.UiButton .Disabled
          <ul>
            <li>
              div.UiButton.Disabled - requires a div element to have both the
              class of UiButton AND Disabled to apply CSS items
            </li>
            <li>
              div.UiButton .Disabled - says if the div OR an item inside of a
              div with class UiButton has the class of Disabled these CSS items
              will apply
            </li>
          </ul>
        </li>
        <li>
          <h3>Resources</h3>
          <ul>
            <li>
              <a
                href="https://uxdesign.cc/ui-cheat-sheet-spacing-friendships-e37a6fccc407"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                CSS Friendships
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CssTricks;
