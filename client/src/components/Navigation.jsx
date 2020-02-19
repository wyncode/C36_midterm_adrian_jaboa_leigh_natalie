import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



function Navigation() {
  const history = useHistory();
  const [search, setSearch] = useState('');
  
  const handleChange = e => setSearch(e.target.value);

  const handleSubmit = e => {
    e.preventDefault()
    history.push(`/search/${search}`);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ zIndex: 5 }}>
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

export default Navigation;
