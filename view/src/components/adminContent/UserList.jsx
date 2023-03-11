import React, { useState,useEffect } from 'react';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';


 const UserList = () => {
   const [users,setUsers] = useState();
   const [show, setShow] = useState(false);
   const [formDetail, setFormDtail] = useState(false);
   const Navigate = useNavigate();
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const formClose = () => setFormDtail(false);
   const formShow = () => setFormDtail(true);
   const [name,setName] = useState();
   const [id,setID] = useState();
   const [contact,setContact] = useState();
   const [amount,setAmount] = useState();
  
   useEffect(()=>{
    axios.get('http://localhost:5000/api/user')
         .then((res)=>{
              setUsers(res.data)
         })
         .catch((error)=>{
          console.log(error)
         })

   }, [])

  //   let name = 'Mustafa';
  //   let id = 19990;
  //  NotificationManager.success(`User name ${name} Contact No ${id}  `,"",3000)
 
  return (<div className='container border border-dark'>
          <div className="row">
            <div className="col-sm-12">
            <table class="table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                  {users? users.map((user)=>{
                           return <tr onClick={handleShow}>
                                 <td>{user.idNumber}</td>
                                 <td>{user.firstName+" "+user.lastName}</td>
                                 <td>{user.contact}</td>
                           </tr>
                   } ):<p className='text-center fs-2 fw-bolder'>No user</p>}
              </tbody>
            </table>
            </div>
          </div>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        centered
      >
        <Modal.Body className='p-5 bg-light rounded '>
             <div className='py-3' >
              <label htmlFor="uname" className='col-4'>Name</label>
              <input type="text"
               id='uname'
               name='uname'
               value={name}
               onChange={(e)=>{setName(e.target.value)}}  
               />
             </div>

             <div className='py-3' >
              <label htmlFor="id"  className='col-4'>ID</label>
              <input type="text"
               id='id'
               name='id'
               value={id}
               onChange={(e)=>{setID(e.target.value)}}  
               />
             </div>

             <div className='py-3' >
              <label htmlFor="contact"  className='col-4'>Contact</label>
              <input type="text"
               id='contact'
               name='contact'
               value={contact}
               onChange={(e)=>{setContact(e.target.value)}}  
               />
             </div>

             <div className='py-3' >
              <label htmlFor="totalForm"  className='col-4'>Total Form</label>
              <button className='btn btn-outline-primary col-3 mx-5 fw-bold rounded-pill' onClick={formShow}>Show</button>
             </div>

             <div className='py-3' >
              <label htmlFor="amount"  className='col-4'>Amount</label>
              <input type="text"
               id='amount'
               name='amount'
               value={amount}
               onChange={(e)=>{setAmount(e.target.value)}}  
               />
             </div>
             <div className='text-center mt-5'>
               <Button onClick={()=>{Navigate('/')}} className="col-4 fw-bolder ">
             <i class="bi bi-chevron-left fw-bold mx-1"></i>
                Go Back</Button>
             </div>

        </Modal.Body>
      </Modal>
    {/*  This is the show form Modal  */}
      <Modal
        show={formDetail}
        onHide={formClose}
        keyboard={false}
        size="sm"
      >
        <Modal.Body className='bg-light border border-dark border-1 rounded shadow'>
          <h4 className='text-center my-4 text-primary'>
          <i class="bi bi-chevron-double-left fw-bold mx-1"></i>
            Form Detail</h4>
          <p className='col-12'>
            Serial No....................................................
          </p>
        </Modal.Body>
      </Modal>

 </div>)
}

export default UserList;
