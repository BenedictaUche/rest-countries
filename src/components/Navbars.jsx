import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbars() {
  function clickHandler() {
    alert("I love you");
  }

  return (
    <Navbar className="bg-gray-800 fixed-top">
      <Container className="container-fluid">
        <Navbar.Brand
          href="#home"
          className="text-white font-bold text-lg sm:text-xl"
        >
          Where in the world?
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <a href="">
            <Navbar.Text
              className="text-white flex justify-between"
              onClick={clickHandler}
            >
              <FaMoon className="text-white" />
              <FaSun />
              Light Mode
            </Navbar.Text>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
