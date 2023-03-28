import React from 'react';
import { Link} from 'react-router-dom';
import logo from './Images/logo.jpeg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { useNavigate } from 'react-router-dom';

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////

 const UserNavbar = () => {
  const nv  = useNavigate()
      /////////////SET REDUX//////////////
      const dispatch = useDispatch()
      const action = bindActionCreators(actionCreator, dispatch)
      /////////////SET REDUX//////////////
  
      /////////////GET REDUX//////////////
      const state = useSelector((state) => state.LogIn)
      /////////////GET REDUX//////////////

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
              <Nav.Link>
                  <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3" to={'/createForm'}>Create Form</Link>
              </Nav.Link>
              <Nav.Link>
                  <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3" to={'/totalForm'}>Total Form</Link>
              </Nav.Link>
              <Nav.Link>
                  <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3 px-3" to={'/feeSlip'} id="navbarDropdown" >Fee Slip </Link>
              </Nav.Link>
              <Nav.Link>
              <button className='btn btn-danger' onClick={()=>{
                    action.LogOut()
                    nv('/login')
                  }}>LogOut</button>
              </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
)}
export default UserNavbar;

