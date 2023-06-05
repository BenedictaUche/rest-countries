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

          <div className="flex justify-between mt-20">
            <div>
              <img src={country.flags.png} alt={country.name} />
            </div>
            <div>
              <h2 className="font-bold text-3xl mb-4">{country.name}</h2>
              <div className="flex">
                <ul>
                  <li>
                    <span className="font-bold">Native Name: </span>
                    {country.nativeName}
                  </li>
                  <li>
                    <span className="font-bold">Population: </span>
                    {country.population}
                  </li>
                  <li>
                    <span className="font-bold">Region: </span>
                    {country.region}
                  </li>
                  <li>
                    <span className="font-bold">Sub Region: </span>
                    {country.subregion}
                  </li>
                  <li>
                    <span className="font-bold">Capital: </span>
                    {country.capital}
                  </li>
                </ul>

                <ul>
                  <li>
                    <span className="font-bold">Top Level Domain: </span>
                    {country.topLevelDomain}
                  </li>
                  <li>
                    <span className="font-bold">Currencies: </span>
                    {country.currencies.map((currency) => currency.code)}
                  </li>
                  <li>
                    <span className="font-bold">Languages: </span>
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </li>
                </ul>
              </div>
              <div className="flex">
                <h2 className="font-bold">Border Countries</h2>
                <Link to={`/country/${country.name}`}>
                  {country.borders.map((border) => (
                    <Button
                      key={border}
                      className="bg-gray-800 ml-5 border-gray-800 inline-flex justify-between"
                    >
                      {border}
                    </Button>
                  ))}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
