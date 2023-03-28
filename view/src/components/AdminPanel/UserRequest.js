import React, { useState,useEffect } from 'react';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 const UserList = () => {
   const [users,setUsers] = useState([]);
   const [seletcted,setseletcted] = useState({});
   const [show, setShow] = useState(false);
   const [formDetail, setFormDtail] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   const Accept = (id) =>{
    axios.put('http://localhost:9000/api/admin/get/user/'+id)
    .then((res)=>{
     console.log(res)
     NotificationManager.success(`Accepted Succesfully`,"Notification",3000)
    })
    .catch((error)=>{
     console.log(error)
     NotificationManager.error (`Some thing went wrong`,"Error",3000)
    })
    handleClose()
    getAll()
   }
   const Delete = (id) =>{
    axios.delete('http://localhost:9000/api/admin/get/user/'+id)
    .then((res)=>{
     console.log(res)
     NotificationManager.success(`Deleted Succesfully`,"Notification",3000)
    })
    .catch((error)=>{
     console.log(error)
     NotificationManager.error (`Some thing went wrong`,"Error",3000)
    })
    handleClose()
    getAll()
   }
   
   const getAll = ()=>{
    axios.get('http://localhost:9000/api/admin/get/user')
    .then((res)=>{
     console.log(res)
      setUsers(res.data.data)
    })
    .catch((error)=>{
     console.log(error)
     
    })
   }
   useEffect(()=>{
    getAll()
   }, [])

    
   
 
  return (<div className='container border border-dark'>
          <div className="row">
            <div className="col-sm-12">
            <h1 style={{backgroundColor:'black',color:'white',padding:'2px',margin:'0px',textAlign:'center'}}>
                Unverifyed User List
                </h1>
            <table className="table" style={{border:'1px solid black'}}>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>States</th>
                </tr>
              </thead>
              <tbody>
                  {users? users.map((user,index)=>{
                      if(!user.verify){
                        return <tr onClick={()=>{
                          setseletcted(user)
                          handleShow()
                        }}>
                              <td>{user._id}</td>
                              <td>{user.first_name+" "+user.last_name}</td>
                              <td>{user.contact}</td>
                              <td>
                                {
                                  user.verify ? <button className='btn btn-success'>Verifyed</button>:
                                  <button className='btn btn-danger'>unverifyed</button>
                                }
                              </td>
                        </tr>
                      }
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
              <label htmlFor="uname" className='col-6'>Name</label>
              <label htmlFor="uname" className='col-6'>
                {seletcted.first_name+" "+seletcted.last_name}
              </label>
              
             </div>

             <div className='py-3' >
              <label htmlFor="id"  className='col-6'>ID</label>
              <label htmlFor="id"  className='col-4'>
                {seletcted._id}
              </label>
              
             </div>

             <div className='py-3' >
              <label htmlFor="contact"  className='col-6'>Contact</label>
              <label htmlFor="contact"  className='col-6'>
                {seletcted.contact}
              </label>
              
             </div>

             <div className='text-center mt-5' >
               {

                seletcted.verify ?  
                <Button onClick={()=>{Delete(seletcted._id)}} className="col-4 fw-bolder mx-2 btn btn-danger">
                   Delete
                </Button>
                :<>
                <Button onClick={()=>{
                  Accept(seletcted._id)
                 }} className="col-4 fw-bolder mx-2 btn btn-success">
                     Accept
                </Button>
                 <Button onClick={()=>{
                  Delete(seletcted._id)
                 }} className="col-4 fw-bolder mx-2 btn btn-danger">
                     Delete
                </Button>
                </>
               }
             </div>

        </Modal.Body>
      </Modal>

 </div>)
}

export default UserList;
