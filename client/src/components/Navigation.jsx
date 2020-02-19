import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import img from '../photos/logo-1.png';
import RandomButton from './RandomButton';

function Navigation() {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const handleChange = e => setSearch(e.target.value);

  const handleSubmit = e => {
    // e.preventDefault()
    history.push(`/search/${search}`);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ zIndex: 5 }}>
        <Navbar.Brand href="/home"><img src={img} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/randomButton">Random Drink</Nav.Link>
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
              Search recipe
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
