import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "abs", className: "heading" },
  "Hello world from react!"
);

const smallHeading = React.createElement(
  "h3",
  { id: "smallHeading" },
  "What's up!"
);

const para1 = React.createElement(
  "p",
  { id: "content1" },
  "This is a paragraph one"
);
const para2 = React.createElement(
  "p",
  { id: "content2" },
  "This is a paragraph two"
);
const child = React.createElement("div", { id: "child" }, [
  heading,
  smallHeading,
]);

const child2 = React.createElement("div", { id: "child2" }, [para1, para2]);
const parent = React.createElement("div", { id: "parent" }, [child, child2]);
console.log(parent);

root.render(parent);

const root2 = ReactDOM.createRoot(document.getElementById("footer"))

const footer = React.createElement(
    "h4",
    {},
    "Footer"
)

root2.render(footer)
