import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
    "div",
    null,
    React.createElement("li", null, "Tyler"),
    React.createElement("li", null, "Karen"),
    React.createElement("li", null, "Richard")
);

console.log(element);

ReactDOM.render(element, document.getElementById("root"));