import React from "react";

const ObjectOrientedProgramming = () => {
  return (
    <section>
      <details>
        <summary>Encapsulation</summary>
        <ul>
          <li>
            {" "}
            OOP encapsulate by binding the data and functions which operate on
            that data into a single unit. Can hide private details of class and
            only expose functionality that is important for interfacing with it.
            *Bundling of data and behaviors, that are similar, together.
            description/data are $variables behaviors turn into methods ()
          </li>
        </ul>
      </details>

      <details>
        <summary>Abstraction</summary>
        <ul>
          <li>
            In OOP, we might have a class defined to represent the human body.
            One might define some functions as part of its publicly facing
            interface such as “walk()” or “eatFood().” Calling code could call
            these functions and remain completely oblivious to the complex inner
            workings of the human body and its necessary functions to perform
            the act of walking or eating. These details are completely hidden in
            the implementation of the walk() and eatFood() body functions and
            are, therefore, us abstracted away from the end user. In these
            cases, it’s not important for calling code to understand how the
            brain coordinates walking or how the stomach manages digesting the
            food, but rather simply that a human walked or ate.
          </li>
          <li>
            Access to something complex without knowing the inner workings -
            allows us to call those methods without worrying about the inner
            workings
          </li>
        </ul>
      </details>
      <details>
        <summary>Inheritance</summary>
        <ul>
          <li>
            if a class inherits from another class, it automatically obtains a
            lot of the same functionality and properties from that class and can
            be extended to contain separate code and data. A nice feature of
            inheritance is that it often leads to good code reuse since a parent
            class’ functions don’t need to be re-defined in any of its child
            classes.
          </li>
          <li>Create a hierarchical relationship between items</li>
        </ul>
      </details>
      <details>
        <summary>Polymorphism</summary>
        <ul>
          <li>
            Uniform treatment of classes - if parent class "Animal" has method
            to makeNoise, the child class can override the function that is
            inherited to be "meow" / "bark" (cat class, dog class for example)
            <li>
              Multiple functions of the same name doing something specific
            </li>
            <li>
              A method can be added to each child class to overwrite the parent
              method to be specific
            </li>
          </li>{" "}
        </ul>
      </details>
    </section>
  );
};

export default ObjectOrientedProgramming;
