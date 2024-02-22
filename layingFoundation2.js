import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading = (
//   <h1 className="head" tabIndex="5">
//     Hello Buddy JSX 🚀
//   </h1>
// );

//React Component
//two type of components -> 1) class based components - OLD 2) functional components - NEW

//Functional Based components -> just a normal js function
// returns some jsx elements
// or we can say that fun comp -> returns a react element

const Title = () => {
  return (
    <h1 className="title" tabIndex="5">
      Hello Bro
    </h1>
  );
};

//react element
const title1 = (
  <h3 className="title1" tabIndex="5">
    Hello Bro1
  </h3>
);
// component inside component => component composition

//NOTE : we can write js code in jsx if we {any js code}
const number = 1000;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h2>{number + 100}</h2>
      {title1}
      <h1>Namaste React function component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//render the component
root.render(<HeadingComponent />);

// render the heading
//root.render(heading);
