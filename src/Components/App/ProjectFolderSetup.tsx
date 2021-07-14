import React from "react";

const ProjectFolderSetup = () => {
  return (
    <>
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
                <li>Assets/ (images)</li>
                <li>Data/ (data sets)</li>
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
          </ul>
        </ul>
        <div>
          <a
            href="https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            React File Structure
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectFolderSetup;
