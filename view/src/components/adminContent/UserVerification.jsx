import React, { useState } from 'react';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

 const UserVerification = () => {
  const [name,setName]=useState();
  const [id,setID]=useState();
  const [password,setPassword]=useState();
  const [cnic,setCNIC]=useState();
  const [contact,setContact]=useState();
  const [address,setAddress]=useState();
  const [licenceNo,setLicenceNo]=useState();
  const [city,setCity]=useState();
  
  const acceptForm = (e) =>{
    e.preventDefault();
  //   let name = 'Mustafa';
  //   let id = 19990;
  //  NotificationManager.success(`User name ${name} Contact No ${id}  `,"",3000)
  }

  const notAcceptForm = (e) =>{
    e.preventDefault();

  }

  const sendForm = (e) =>{
    e.preventDefault();

  }

  const notSendFrom = (e) =>{
    e.preventDefault();

  }



  return (<div className='container border border-dark'>
            <div className='row my-4 '>
              <div className="col-lg-7 col-sm-12 ">
              <form className='col-10 border border-dark p-5 m-5 my-3 rounded'>
                <div className='d-lg-flex my-3'>
                  <label htmlFor="username" className='col-lg-3 py-2'>User Name</label>
                  <input 
                    type="text"  
                    className='form-control'
                    id='username'
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>
                <div className='d-lg-flex my-3'>
                  <label htmlFor="cnic" className='col-lg-3 py-2'>CNIC</label>
                  <input 
                    type="numer"  
                    className='form-control'
                    id='cnic'
                    value={cnic}
                    onChange={(e)=>{setCNIC(e.target.value)}}
                    />
                </div>
                <div className='d-lg-flex my-3'>
                  <label htmlFor="contact" className='col-lg-3 py-2'>Contact</label>
                  <input 
                    type="number"  
                    className='form-control'
                    id='contact'
                    value={contact}
                    onChange={(e)=>{setContact(e.target.value)}}
                    />
                </div>
                <div className="d-lg-flex my-3">
                  <label htmlFor="address" className='col-lg-3 py-2'>Address</label>
                  <input 
                    type="text"  
                    className='form-control'
                    id='address'
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                    />
                </div>
                <div className='d-lg-flex my-3'>
                  <label htmlFor="licenceNo" className='col-lg-3 py-2'>Licence ID</label>
                  <input 
                    type="number"  
                    className='form-control'
                    id='licenceNo'
                    value={licenceNo}
                    onChange={(e)=>{setLicenceNo(e.target.value)}}
                    />
                </div>
                <div className="d-lg-flex my-3">
                  <label htmlFor="city" className='col-lg-3 py-2'>City</label>
                  <input 
                    type="text"  
                    className='form-control'
                    id='city'
                    value={city}
                    onChange={(e)=>{setCity(e.target.value)}}
                    />
                </div>
                <div className="text-center my-5">
                  <button className='btn btn-primary mx-1 col-lg-3 rounded-pill' onClick={acceptForm}>Accept</button>
                  <button className='btn btn-primary mx-1 col-lg-3 rounded-pill' onClick={notAcceptForm}>Not Accept</button>
                </div>
               </form>
              </div>
              <div className="col-lg-5 col-sm-12 ">
              <form className='col-10 border border-dark m-5 px-5 py-5 my-3 rounded'>
                <div className='d-lg-flex my-3'>
                  <label htmlFor="userId" className='col-lg-3 py-2'>User ID</label>
                  <input 
                    type="text"  
                    className='form-control'
                    id='userId'
                    value={id}
                    onChange={(e)=>{setID(e.target.value)}}
                    />
                </div>
                <div className='d-lg-flex my-3'>
                  <label htmlFor="password" className='col-lg-3 py-2'>Password</label>
                  <input 
                    type="password"  
                    className='form-control'
                    id='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div className='text-center my-3'> 
                  <button className='btn btn-primary col-4 mx-2  rounded-pill' onClick={sendForm}>Send to</button>
                  <button className='btn btn-primary col-4  rounded-pill ' onClick={notSendFrom}>Not Send</button>
                </div>
               </form>
              </div>
            </div>
        </div>)
}
export default UserVerification;