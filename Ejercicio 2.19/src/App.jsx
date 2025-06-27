import Filter from "./components/Filter";
import { useState } from "react";
import { useEffect } from "react";
import ApiCountries from "./services/ApiCountries";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

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
      {selectedCountry ? (
        <CountryDetail country={selectedCountry} />
      ) : (
        <>
          {filtered.length > 10 && (
            <p>Too many matches, specify another filter</p>
          )}
          {filtered.length <= 10 && filtered.length > 1 && (
            <ul>
              {filtered.map((country) => (
                <li key={country.cca3}>
                  {country.name.common}
                  <button onClick={() => setSelectedCountry(country)}>
                    show
                  </button>
                </li>
              ))}
            </ul>
          )}
          {filtered.length === 1 && (
            <div>
              <h3>{filtered[0].name.common}</h3>
              <p>Capital: {filtered[0].capital && filtered[0].capital[0]}</p>
              <p>Area: {filtered[0].area}</p>
              <img
                src={filtered[0].flags.png}
                alt={`Flag of ${filtered[0].name.common}`}
                width="100"
              />
              <h4>Languages:</h4>
              <ul>
                {Object.values(filtered[0].languages).map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
