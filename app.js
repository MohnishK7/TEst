// created an h1 tag with hello world -> using React.createElement
// it basically create object --> a javascript object
// {} -> a place where we give attributes to the tag
// like id: "heading" etc

// nested html structure using react
// parent is just the object and its a react element
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]
    // React.createElement("h1", {}, "I am h1 tag")
    //if we want the sibling then we have to wrap it inside the [] -> array
  )
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );

// it will give object
// console.log(heading);
console.log(parent);

// root is the place where all the react code will run here root is document.getElementbyId
const root = ReactDOM.createRoot(document.getElementById("root"));

// render method will take this object and convert it into the heading tag and put it in the DOM

root.render(parent);
