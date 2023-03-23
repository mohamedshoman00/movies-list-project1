import React, { useState } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
const NavBar = ({ SearchMoive }) => {
  const [word, setWord] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    SearchMoive(word);
  };
  const HandleChange = (e) => {
    setWord(e.target.value);
    SearchMoive(word);
  };
  return (
    <Navbar style={{ backgroundColor: "#bc6132" }} expand="lg">
      <Container>
        <Navbar.Brand className="pe-3">
          <a href="/" style={{ color: "black", textDecoration: "none" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "70px", height: "100%" }}
            />
          </a>
        </Navbar.Brand>
        <Form
          className="d-flex col-lg-10 col-md-9 col-sm-8"
          style={{ position: "relative", height: "45px" }}
          onSubmit={HandleSubmit}
        >
          {/* <label htmlFor="search-input">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </label> */}
          <Form.Control
            style={{ height: "100%" }}
            id="search-input"
            type="search"
            placeholder="بحث"
            className="ms-2"
            aria-label="Search"
            value={word}
            onChange={(e) => HandleChange(e)}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
