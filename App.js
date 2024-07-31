const heading = React.createElement(
  "h1",
  { title: "React !" },
  "Hello from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// create the structure using the React

//   <div id="Parent">
//   <div id="child">
//     <h1></h1>
//   </div>
// </div>

const elements = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello this is react")
  )
);

root.render(elements);
