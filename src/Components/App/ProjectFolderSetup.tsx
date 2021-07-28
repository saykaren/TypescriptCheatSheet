import React from "react";

const ProjectFolderSetup = () => {
  return (
    <div className="leftCentered">
      <ul>
        <li>src/</li>
        <ul>
          <li>
            Components/
            <ul>
              <li>
                App/ (components)
                <ul>
                  <li>App.js</li>
                  <li>Footer.tsx</li>
                </ul>
              </li>

              <li>Interface/ (inteface objects)</li>
              <li>
                Styling/ (SCSS files)
                <ul>
                  <li>App.scss</li>
                  <li>variables.scss</li>
                </ul>
              </li>
              <li>
                Testing
                <ul>
                  <li>App.test.js</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            Assets/ (images)
            <ul>
              <li>photo.jpeg</li>
            </ul>
          </li>
          <li>
            Data/ (data sets)
            <ul>
              <li>myData.js</li>
            </ul>
          </li>
          <li>index.cs</li>
          <li>index.js</li>
          <li>reportWebVital.js</li>
          <li>setupTest.js</li>
        </ul>
        <li>
          public
          <ul>
            <li>index.html</li>
            <li>manifest.json</li>
            <li>robots.txt</li>
            <li>favicon</li>
          </ul>
        </li>
        <li>.gitirnore</li>
        <li>README.md</li>
        <li>package-lock.json</li>
        <li>package.json</li>
        <li>tsconfig.json (if Typescript added)</li>
      </ul>
    </div>
  );
};

export default ProjectFolderSetup;
