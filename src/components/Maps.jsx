import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import datas from "./data.json";
import { Card, Row, Col, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaSearch } from "react-icons/fa";
// import CountryDetails from "../pages/CountryDetails";

export default function Maps() {
  const shuffledData = datas.sort(() => Math.random() - 0.5);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  useEffect(() => {
    const results = shuffledData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results.slice(0, 8));
  }, [searchTerm, shuffledData]);

  useEffect(() => {
    if (selectedRegion) {
      const results = shuffledData.filter(
        (item) => item.region.toLowerCase() === selectedRegion.toLowerCase()
      );
      setSearchResults(results.slice(0, 8));
    }
  }, [selectedRegion, shuffledData]);

  return (
    <div className="mt-20">
      <Container>
        <div className="d-flex sm:flex-row flex-col justify-content-between">
          <div className="inline-flex">
            <div className="input-group">
              <div className="input-group-append">
                <span className="input-group-text bg-gray-800 h-full">
                  <FaSearch className="text-white" />
                </span>
              </div>
              <input
                type="text"
                placeholder="Search for a country ..."
                className="form-control bg-gray-800"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
          </div>

          <DropdownButton
            id="dropdown-basic-button"
            className="bg-gray-900 border-none rounded-lg border-gray-900 sm:w-auto max-w-full"
            title="Filter by Region"
          >
            <Dropdown.Item
              href="#/action-1"
              className="bg-gray-800 border-none text-white sm:w-auto max-w-full"
              onClick={() => handleRegionChange("Africa")}
            >
              Africa
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              className="bg-gray-800 border-none text-white sm:w-auto max-w-full"
              onClick={() => handleRegionChange("Americas")}
            >
              Americas
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              className="bg-gray-800 border-none text-white sm:w-auto max-w-full"
              onClick={() => handleRegionChange("Asia")}
            >
              Asia
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-4"
              className="bg-gray-800 border-none text-white sm:w-auto max-w-full"
              onClick={() => handleRegionChange("Europe")}
            >
              Europe
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-5"
              className="bg-gray-800 border-none text-white sm:w-auto max-w-full"
              onClick={() => handleRegionChange("Oceania")}
            >
              Oceania
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <Row className="mt-20 mb-16">
          {searchResults.map((data) => (
            <Col key={data.name} sm={6} md={3}>
              <Link
                to={`/country/${data.name}`}
                className="no-underline text-black"
              >
                <Card className="mb-6 card">
                  <div>
                    <img
                      src={data.flags.png}
                      alt={data.name}
                      className="w-full bg-center bg-no-repeat bg-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-3">{data.name}</h3>
                      <h4 className="text-xs">
                        <span className="font-bold text-xs">Population:</span>{" "}
                        {data.population}
                      </h4>
                      <h4 className="text-xs">
                        <span className="font-bold text-xs">Region:</span>{" "}
                        {data.region}
                      </h4>
                      <h4 className="text-xs">
                        <span className="font-bold text-xs">Capital:</span>{" "}
                        {data.capital}
                      </h4>
                    </div>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
