import Axios from "axios";

const apiUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = () => {
    return Axios.get(apiUrl).then(response => response.data);
};

export default { getAllCountries };