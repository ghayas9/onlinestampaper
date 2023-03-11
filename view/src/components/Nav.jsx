import React from 'react';
import { Link} from 'react-router-dom';
import logo from './Images/logo.jpeg';

 const Nav = () => {
  return (
    <div className='container border border-primary bg-light rounded-top'>
      <nav class="navbar navbar-expand-lg ">
        <Link class="navbar-brand fs-4 fw-bolder" to={'/'}>
            <img src={logo} alt="This is Stamp logo" className='img-fluid w-100 h-75' />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#userMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="userMenu">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-3">
                <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3" to={'/createForm'}>Create Form</Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3" to={'/totalForm'}>Total Form</Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3 px-3" to={'/feeSlip'} id="navbarDropdown" >Fee Slip </Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3 " to={'/showForm'}>Show Form</Link>
            </li>
            <li class="nav-item mx-3">
            <i class="bi bi-question-circle text-primary fs-3 fw-bold pe-4"></i>
            </li>
            </ul>
        </div>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#adminMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminMenu">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-3">
                <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3" to={'/createForm'}>User List</Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3" to={'/totalForm'}>User Verification</Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3 px-3" to={'/feeSlip'} id="navbarDropdown" >User Status</Link>
            </li>
            <li class="nav-item mx-3">
             This is the image area and we will update in the future.
            </li>
            </ul>
        </div> */}
        </nav>
    </div>
  )
}
export default Nav;
