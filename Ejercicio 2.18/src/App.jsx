import Filter from "./components/Filter";
import { useState } from "react";
import { useEffect } from "react";
import ApiCountries from "./services/ApiCountries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    ApiCountries.getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Countries</h2>
      <Filter
        newText={filter}
        handleTextFilter={(event) => setFilter(event.target.value)}
      />
      <ul>
        {filtered.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
