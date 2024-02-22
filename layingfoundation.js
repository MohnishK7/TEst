import React from "react";
import ReactDOM from "react-dom/client";

// React Elements
// react element are same as dom elements

// when we render this element into the DOM it become html element
//react.createElement is the object
// react.crateELement => ReactElement- js Object => HTML elememnt(render)

//jsx -> javaScript and jsx are different
// jsx is easy -> we merge the html and js together
// jsx is html like syntax looks like xml or html
// jsx is not html inside javascript
// jsx is just a syntax and react element is the object
// jsx a developer friendly
// javaScript is the code that jsx can understand

//h1 tag using jsx
// jsx code is transpiled before it reaches the js engine
// parcel is doing translate -> parcel is the manager
// babel a javascript compiler are installed by the parcel -> convert the jsx code that js engine understand

// JSX => react.crateELement => ReactElement- js Object => HTML elememnt(render)

// if we are writing in the multiple line we have to wrap it inside the ()
const heading = <h1 id="heading">Hello Buddy JSX 🚀</h1>;

console.log(heading);

// below is the core react element --> below code is not developer friendly
// const heading = React.createElement("h1", { id: "heading" }, "Hello Mohnish");
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// takes the object and convert it into html and push it into browser(replace)
root.render(heading);
