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
      <h3 className="headers">Form Example</h3>
      <a
        href="https://github.com/saykaren/PHPexamples"
        target="_blank"
        rel="noopener noreferrer"
      >
        PHP Examples
      </a>
      <h3 className="headers">Other</h3>
      <details>
        <summary>htmlspecialchars</summary>
        why we did the <code>htmlspecialchars()</code> is to eliminate
        cross-site scripting Cross-Site Scripting (XSS) attacks are a type of
        injection, in which malicious scripts are injected into otherwise benign
        and trusted websites. XSS attacks occur when an attacker uses a web
        application to send malicious code, generally in the form of a browser
        side script, to a different end user. Flaws that allow these attacks to
        succeed are quite widespread and occur anywhere a web application uses
        input from a user within the output it generates without validating or
        encoding it.
      </details>
      <h3 className="headers">Magic Methods</h3>
      <div>
        magic method = constructor method is example of one __construct does
        something each time the class is instantiated
      </div>
      <a
        href="https://www.php.net/manual/en/language.oop5.magic.php"
        target="_blank"
        rel="noopener noreferrer"
      >
        Magic methods documentation
      </a>
      <div>Anti-Pattern in Object-Oriented Programming OOP</div>
      <a
        href="https://en.wikipedia.org/wiki/God_object"
        target="_blank"
        rel="noopener noreferrer"
      >
        God Object
        <br />
      </a>
      <details>
        <summary>What is anti-pattern in object-oriented programming?</summary>
        An anti-pattern in OOP is a God object which performs a lot of functions
        which would be better separated into different objects.
      </details>
    </section>
  );
};

export default PHPexamples;
