import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const TitleComponent = () => <h1 id="title">This is PageTitle</h1>;
const numberOfVisits = 863;
const numberOfVisitsPara = <p>number of Visits: {numberOfVisits}</p>;

const HeadingComponent = () => (
  <div id="container">
    {TitleComponent()}
    <TitleComponent></TitleComponent>
    <TitleComponent />
    {numberOfVisitsPara}
    <h2>{console.log("This is JS")}</h2>
    <h2 id="heading" className="heading">
      This is a heading using JSX
    </h2>
  </div>
);

root.render(<HeadingComponent />);
