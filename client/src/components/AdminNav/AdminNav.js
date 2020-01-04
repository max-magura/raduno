import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./AdminNav.css";

class AdminNav extends React.Component {
  render() {
    return (
    <Navbar className="navbar color-adminNav admin-navbar" expand="lg" variant="light">
      <Navbar.Brand href="#">My Events</Navbar.Brand>
      <Button className="align-right btn-primary2" type="submit">Logout</Button>
    </Navbar>
    )
  }
};


export default AdminNav;
