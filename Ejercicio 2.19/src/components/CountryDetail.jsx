const CountryDetail = ({ country }) => (
  <div>
    <h3>{country.name.common}</h3>
    <p>Capital: {country.capital && country.capital[0]}</p>
    <p>Area: {country.area}</p>
    <img
      src={country.flags.png}
      alt={`Flag of ${country.name.common}`}
      width="100"
    />
    <h4>Languages:</h4>
    <ul>
      {Object.values(country.languages).map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
  </div>
);

export default CountryDetail;