import React from "react";
import fetchExample from './../Assests/fetchExample.jpeg';

const ReactQuery = () => {
  return (
    <>
    <h3>Install</h3>
      <a
        href="https://react-query.tanstack.com/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        React-Query Documentation
      </a>
      <h3>Install</h3>
      <p>npm i --save react-query</p>
      <a
        href="https://www.youtube.com/watch?v=x1rQ61otgtU"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Video for installation
      </a>
      <p>npm i --save react-query-devtools</p>
      <h3>Implement</h3>
      <p>
        Import items
        <br />
        {`import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools';`}
      </p>
      <p>
        initiate QueryClient by adding in function
        <br />
        <br />
        const queryClient = new QueryClient();
      </p>
      <p>
        In return of component then wrap the main app with QueryClient <br />
        <br />
        {`  <QueryClientProvider client={queryClient}>***YOUR APP***</QueryClientProvider>`}{" "}
      </p>
      <p>
        Then in the middle of QueryClientProvider tags add{" "}
        {`<ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />`}
      </p>
      <h3>Implement useQuery</h3>
      <p>In component {`import {useQuery} from 'react-query';`}</p>
      <p>
        In functional component before return use something to the sort of{" "}
        {`  const drugData = useQuery(
    ["drug", "url"],
    fetchURL
  );`}{" "}
        <br /> string is description and the second argument is function which
        you build above the functional component
      </p>
      <h3>Fetch</h3>
      <img src={fetchExample} alt="fetch Example"/>
    </>
  );
};

export default ReactQuery;
