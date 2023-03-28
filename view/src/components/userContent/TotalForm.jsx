import React, { useState } from 'react';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
///////////////GET REDUX//////////////

const TotalForm = () => {
  const [users,setUsers]= useState([])

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

const nv = useNavigate()
useEffect(()=>{
  if(!state){
    nv('/login')
  }else{
    getForm()
  }
},[state])


const getForm =()=>{
  axios({
  method:'get',
  headers:{
    'Authorization': `Bearer ${state.token}`
  },
  url:'http://localhost:9000/api/user/get/form'
  }).then((res)=>{
      console.log(res)
      setUsers(res.data.data)
      // NotificationManager.success(`Created Successfully  `,"Success",3000)
  }).catch((err)=>{
      console.log(err)
      NotificationManager.error(`${err.response.data.message}   `,"Error",3000)
  })

}

  return (
    <div className="container" style={{overflowX:'scroll',border:'1px solid black'}}>
      <table class="table" style={{border:'1px solid black'}}>
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Contact</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                  {users? users.map((user)=>{
                           return <tr >
                                 <td>{user.serial_no}</td>
                                 <td>{user.user_name}</td>
                                 <td>{user.title}</td>
                                 <td>{user.contact}</td>
                                 <td>
                                  <button disabled={!user.accepted} onClick={()=>{nv('/showForm/'+user._id)}} className={user.accepted ? 'btn btn-primary':'btn btn-danger'}>SHOW</button>
                                 </td>
                           </tr>
                   } ):<p className='text-center fs-2 fw-bolder'>No user</p>}
              </tbody>
            </table>
    </div>
  )
}
export default TotalForm;
