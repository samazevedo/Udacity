import React from "react";
import ReactDOM from "react-dom";

const people = [
    { name: "Tyler" },
    { name: "Karen" },
    { name: "Richard" }
];

const element = <ol>
    {people.map((person) => (
        <li key={person.name}>{people.name}</li>
    ))}
</ol>

console.log(element);

ReactDOM.render(element, document.getElementById("root"));