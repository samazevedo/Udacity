import React from "react";
import ReactDOM from "react-dom";

const people = [
    { name: "Tyler" },
    { name: "Karen" },
    { name: "Richard" }
];

const element = React.createElement(
    "div",
    null,
    people.map((person) => (
        React.createElement('li', { key: person.name }, person.name)
    ))
);

console.log(element);

ReactDOM.render(element, document.getElementById("root"));