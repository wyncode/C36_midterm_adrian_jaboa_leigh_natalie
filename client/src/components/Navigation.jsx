import React, { useState } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import history from './history';
function Navigation(props, match) {
  console.log(props);
  const handleSelect = eventKey => alert(`selected ${eventKey}`);
  const [search, setSearch] = useState('');
  const handleChange = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  const handleSubmit = () => {
    history.push(`/search/${search}`);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown
              href="/about"
              title="Categories"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/gin">Gin</NavDropdown.Item>
              <NavDropdown.Item href="/vodka">Vodka</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={search}
              onChange={handleChange}
            />
            <Button type="submit" variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
// render(<Nav />);
export default Navigation;
//created by Natalie Lozano 02.16.2020
