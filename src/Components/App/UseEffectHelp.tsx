import React from "react";

const UseEffectHelp = () => {
  return (
    <section className="leftCentered">
      <div>
        Definition: Hook that runs side-effects independently of rendering
      </div>
      <div>{"import {useEffect} from 'react'; "}</div>
      <div>{"useEffect( {callBack},  [dependencies]);"}</div>
      <div>
        {
          "Dependencies executes callBack only if the dependencies have changed between reenderings."
        }
      </div>
      <div>
        {
          "    If dependency is not provided callBack will run after every rendering."
        }
      </div>
      <div>
        {
          " If an empty array then the callBack runs once after the initial rendering"
        }
      </div>
      <div>
        {
          "       If dependencies are state values the callBack runs only when any dependency value changes. "
        }
      </div>

      <a
        href="https://blog.logrocket.com/useeffect-vs-uselayouteffect/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        useEffect vs. useLayoutEffect
      </a>
      <br />
      <a
        href="https://dmitripavlutin.com/react-useeffect-explanation/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        useEffect explained
      </a>
      <br />
    </section>
  );
};

export default UseEffectHelp;
