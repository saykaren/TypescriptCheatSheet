import React from "react";

const HTTPMethods = () => {
  return (
    <section>
        Hello
        <ul>
        <li>
          <details>
            <summary>GET</summary>
            <ul>
              <li> data appended to URL (size limit servers)</li>
              <li>{`$_GET PHP global variable`}</li>
            </ul>
          </details>
          <details>
            <summary>POST</summary>
            <ul>
              <li> data is in the body of the HTTP request (no size limit, might be limit on server)</li>
              <li>{`$_POST ($_FILES for uploads) PHP global variable`}</li>
            </ul>
          </details>
        </li>
        </ul>
    </section>
  );
};

export default HTTPMethods;
