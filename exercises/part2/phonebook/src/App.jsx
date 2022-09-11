import React, { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
      <Filter query={query} handleSearch={handleSearch} />

      <h3>add a new</h3>
      <PersonForm
        savePerson={savePerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
