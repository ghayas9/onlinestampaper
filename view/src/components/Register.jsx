import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css'

const  Register = () => {
  const Navigate = useNavigate()
const [idNumber,setID] = useState();
const [firstName,setFname] = useState();
const [lastName,setLname] = useState();
const [licenceNo,setLicenceNo] = useState();
const [contact,setContact] = useState();
const [city,setCity] = useState();
const [dateOfBirth,setDOB] = useState();
const [presAddress,setPresAddress] = useState();
const [permAddress,setPermAddress] = useState();

  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/user',{
                  idNumber:idNumber,
                  firstName:firstName,
                  lastName:lastName,
                  contact:contact,
                  licenceNo:licenceNo,
                  city:city,
                  dateOfBirth:dateOfBirth,
                  presAddress:presAddress,
                  permAddress:permAddress
              })
              .then((data)=>{
                console.log(data)
              })
              .catch((err)=>{
                console.log(err)
              })
  };

  return (<div className="container">
       <div className="row registerRow">
        <div className="col-sm-12">
            <form className="col-lg-4 registerForm rounded-2" onSubmit={handleFormSubmit}>
            <h1 className="text-center my-4" >SIGNUP</h1>
              <div className="d-lg-flex my-2">
              <label  htmlFor='firstName' className="col-lg-3 fs-6 fw-bold">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control border border-primary"
                  placeholder="First Name"
                  name='firstName'
                  value={firstName}
                  onChange={(e)=>{setFname(e.target.value)}}
                />
              </div>
              <div className="d-lg-flex my-2">
              <label className="col-lg-3 fs-6 fw-bold" htmlFor='lastName'>Last Name</label>
              <input
                type="text"
                id="lastName"
                className="form-control border border-primary"
                placeholder="Last Name"
                name='lastName'
                value={lastName}
                onChange={(e)=>{setLname(e.target.value)}}
              />
              </div>
              <div className="d-lg-flex my-2">
              <label  className='col-lg-3 fs-6 fw-bold ' htmlFor='userID'>ID Number</label>
              <input
                id="userID"
                type="text"
                className="form-control border border-primary"
                placeholder="ID Number"
                name='userID'
                value={idNumber}
                onChange={(e)=>{setID(e.target.value)}}
              />
              </div>
              <div className="d-lg-flex my-2">
              <label  htmlFor='licenceNo' className='col-lg-3 fs-6 fw-bold '>Licence No</label>
              <input
                type="text"
                id="licenceNo"
                className="form-control border border-primary"
                placeholder="Licence number"
                name='licenceNo'
                value={licenceNo}
                onChange={(e)=>{setLicenceNo(e.target.value)}}
              />
              </div>
              <div className="d-lg-flex my-2">
              <label className='col-lg-3 fs-6 fw-bold ' htmlFor='contact'>Contact</label>
              <input
                type="text"
                id="contact"
                className="form-control border border-primary"
                placeholder="Phone number"
                name='contact'
                value={contact}
                onChange={(e)=>{setContact(e.target.value)}}
              />
              </div>
              <div className="d-lg-flex my-2">
              <label  className='col-lg-3 fs-6 fw-bold ' htmlFor='city'>City</label>
              <input
                type="text"
                id="city"
                className="form-control border border-primary"
                placeholder="Enter your city"
                name='city'
                value={city}
                onChange={(e)=>{setCity(e.target.value)}}
              />
              </div>
              <div className="d-lg-flex my-2">
              <label  className='col-lg-3 fs-6 fw-bold ' htmlFor='dateOfBirth'>Date of Birth</label>
              <input
                type="text"
                id="dateOfBirth"
                className="form-control border border-primary"
                placeholder="Date of Birth"
                name='dateOfBirth'
                value={dateOfBirth}
                onChange={(e)=>{setDOB(e.target.value)}}
              />
              </div>
              <div className="d-lg-block my-2">
              <label className='col-lg-12 fs-6 fw-bold ' htmlFor="presAddress">Present Address</label><br />
              <input 
                type="text"
                id="presAddress"
                className="form-control border border-primary"
                placeholder="Enter your present address"
                name="presAddress"
                value={presAddress}
                onChange={(e)=>{setPresAddress(e.target.value)}}
              /> 
              </div>
              <div className="d-lg-block my-2">
              <label className='col-lg-12 fs-6 fw-bold ' htmlFor="permAddress">Permenent Address</label><br />
              <input 
                type="text"
                id="permAddress"
                className="form-control border border-primary"
                placeholder="Enter your present address"
                name="permAddress"
                value={permAddress}
                onChange={(e)=>{setPermAddress(e.target.value)}}
              /> 
              </div>
              <div className="text-center my-4" >
                <button type="submit" className="col-5 btn btn-primary rounded-3 border-dark text-dark fs-5 fw-bold">SignUp</button>
              </div>
            </form>
        </div>
       </div>
    </div>
  );
}

export default Register;