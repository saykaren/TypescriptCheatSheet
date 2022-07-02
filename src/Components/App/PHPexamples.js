import React, { useState } from "react";

const PHPexamples = () => {
  return (
    <section>
      <h3>Null coalesce assignment operator</h3>
      <div>{`$address['street'] = $address['street'] ?? ' '; turns to $address['street'] ??= ' ';`}</div>
      <a
        href="https://www.php.net/manual/en/language.operators.assignment.php"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Assignment Operators
      </a>
    </section>
  );
};

export default PHPexamples;
