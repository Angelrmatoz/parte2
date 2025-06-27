const Filter = ({ newText, handleTextFilter }) => {
  return (
    <div>
      find countries:{" "}
      <input type="text" value={newText} onChange={handleTextFilter} />
    </div>
  );
};

export default Filter;
