import React from "react";

export default function PersonForm({
  savePerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) {
  return (
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
  );
}
