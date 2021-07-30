import React from "react";
import ReactDOM from "react-dom";


class ContactList extends React.Component {
    render() {

        const people = [
            { name: "Tyler" },
            { name: "Karen" },
            { name: "Richard" }
        ];
        return <ol>
            {people.map((person) => (
                <li key={person.name}>{people.name}</li>
            ))}
        </ol>
    }
}


console.log(ContactList);

ReactDOM.render(<ContactList />, document.getElementById("root"));