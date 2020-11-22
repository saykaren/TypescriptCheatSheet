import React from 'react';
import '../Styling/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   Cheatsheet
      </header>
      <section>
        <div>useState hooks: initial setup of Array, boolean</div>
        <div><h2>Props examples when passing useState items</h2>
        <p>{`Sending setState: (arg1: boolean) => void`} </p>
        <p>{`Not required use ? Maybe?: string`} </p>
        </div>
        <div>Interface examples
          <p>{`monthContributions?: Array<monthContributionsProps>;`}</p>
        <p>{`interface monthDataProps {`}<br/>
    {`title: string;
    cost: number;
    monthIN: number;
}

interface monthContributionsProps {
    title: string;
    contribution: number;
    monthIN: number
}

export interface TestDataProps {
    monthId: number;
    monthName: string;
    begBalance: number;
    endBalance: number;
    monthData?: Array<monthDataProps>;
    monthContributions?: Array<monthContributionsProps>;
}

export interface dataProps {
    data: Array<TestDataProps>
}

export default dataProps;
`}</p>
        </div>
        <div>example in functions (arg1: number)</div>
        <div><a href="https://dev.w3.org/html5/html-author/charref" rel="noreferrer noopener" target="_blank"> Character References</a> </div>
      </section>
    </div>
  );
}

export default App;
