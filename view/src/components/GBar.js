import React from 'react';
import { Link} from 'react-router-dom';
import logo from './Images/logo.jpeg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

 const UserNavbar = () => {
  return (
        <Navbar collapseOnSelect expand="sm" bg='light' className='border border-dark rounded-top'>
        <Container>
            <Navbar.Brand>
                <Link class="navbar-brand fs-4 fw-bolder" to={'/'}>
                <img src={logo} alt="This is Stamp logo" className='img-fluid w-100 h-75' />
              </Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ms-auto">
              <Nav.Link><Link className='btn border border-primary fs-6 fw-bold shadow-lg text-primary' to={'/login'}>LogIn As User</Link></Nav.Link>
              <Nav.Link><Link className='btn border border-primary fs-6 fw-bold shadow-lg text-primary' to={'/admin/login'}>LogIn As Admin</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
)}
export default UserNavbar;
