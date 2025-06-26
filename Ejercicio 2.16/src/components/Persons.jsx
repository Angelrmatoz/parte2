const Persons = ({ persons, handleDelete }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id, person.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;