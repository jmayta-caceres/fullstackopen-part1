import React, { useState } from "react";

const App = () => {
  const fakePersons = [
    { id: 1, name: "Arto Hellas", number: "934-6598-123" },
    { id: 2, name: "Mr. Rickey Dach", number: "1-077-045-0320" },
    { id: 3, name: "Serenity Abbott", number: "+03(1)9301810931" },
    { id: 4, name: "Chaz Conn II", number: "724-248-5072" },
    { id: 5, name: "Prof. Retta Renner II", number: "1-149-786-7867x617" },
    { id: 6, name: "Hudson Yost", number: "(405)729-6382" },
  ];
  const [persons, setPersons] = useState(fakePersons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const savePerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((ele) => ele.name === newName);
    if (nameExists) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const personsToShow =
    query === ""
      ? persons
      : persons.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={query} onChange={handleSearch} type="text" />
      </div>
      <h2>add a new</h2>
      <form onSubmit={savePerson}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} type="text" />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange} type="tel" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <div key={person.id}>
          {person.name} / <em>{person.number}</em>
        </div>
      ))}
    </div>
  );
};

export default App;
