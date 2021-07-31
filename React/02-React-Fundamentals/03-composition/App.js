import React, { Component } from "react";

class ContactList extends React {
    render() {

        const people = this.props.contacts
        return <ol>
            {people.map((person) => (
                <li key={person.name}>{people.name}</li>
            ))}
        </ol>
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <ContactList contacts={[

                    { name: "Tyler" },
                    { name: "Karen" },
                    { name: "Richard" }

                ]} />
                <ContactList contacts={[

                    { name: "Amanda" },
                    { name: "Mikenzi" },
                    { name: "Ryan" }

                ]} />
            </div>
        )
    }
}
export default App;