import { Link, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import datas from "../components/data.json";
import Navbar from "../components/Navbars";
import { FaArrowLeft } from "react-icons/fa";

export default function CountryDetails() {
  const { name } = useParams();
  const country = datas.find((data) => data.name === name);

  if (!country) {
    return <div>Country not found</div>;
  }
  return (
    <>
      <Navbar />
      <Container className="container-fluid">
        <div className="mt-20">
          <Link to="/home">
            <Button className="bg-gray-800 border-gray-800 px-4 inline-flex justify-center items-center">
              <FaArrowLeft className="mr-3" />
              Back
            </Button>
          </Link>

          <div className="flex">
            <div>
              <img src={country.flags.png} alt={country.name} />
            </div>
            <div>
              <h2>{country.name}</h2>
              <div className="flex">
                <ul>
                  <li>
                    <span>Native Name: </span>
                    {country.nativeName}
                  </li>
                  <li>
                    <span>Population: </span>
                    {country.population}
                  </li>
                  <li>
                    <span>Region: </span>
                    {country.region}
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    {country.subregion}
                  </li>
                  <li>
                    <span>Capital: </span>
                    {country.capital}
                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Top Level Domain: </span>
                    {country.topLevelDomain}
                  </li>
                  <li>
                    <span>Currencies: </span>
                    {country.currencies.map((currency) => currency.code)}
                  </li>
                  <li>
                    <span>Languages: </span>
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
