import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newText, setNewText] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleTextFilter = (event) => {
    setNewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const isDuplicate = persons.some((person) => person.name === newName);
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newText.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      Filter show with:{" "}
      <input type="text" value={newText} onChange={handleTextFilter} />
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" disabled={isDuplicate}>
            add
          </button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
