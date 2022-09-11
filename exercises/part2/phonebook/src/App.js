import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "934-6598-123" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} - {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
