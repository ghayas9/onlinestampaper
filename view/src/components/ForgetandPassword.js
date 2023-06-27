import React,{useState} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './login.css'

import {NotificationManager} from 'react-notifications';


//***************API*****************//

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////



export default function ForgetandPassword() {
  /////////////SET REDUX//////////////
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreator, dispatch)
  /////////////SET REDUX//////////////

  /////////////GET REDUX//////////////
  const state = useSelector((state) => state.LogIn)
  /////////////GET REDUX//////////////

  const navigate = useNavigate()
  useEffect(()=>{
    if (state) {
        navigate('/')
      }
},[state])
  const Navigate = useNavigate();
  const [password,setPassword] =useState('');
  const [cpassword,setcPassword] =useState('');
  const {token } = useParams()

  const handleSubmit =(event)=>{
      event.preventDefault();
      axios.post('http://localhost:9000/api/user/forgot/password/'+token,{
         password,
         cpassword
      }).then((res)=>{
          console.log(res)
          navigate('/login')
          NotificationManager.success(`Password Changed  `,"Success",3000)
      }).catch((err)=>{
          console.log(err)
          NotificationManager.error(`${err.response.data.message}   `,"Error",3000)
      })
  }

return (
  <div>
    <div className="loginRow" >
    <div className="col-12 position-relative" style={{display:"flex",justifyContent:"center"}}>
      <form className='col-md-6 col-lg-4 middleform bg-light rounded' onSubmit={handleSubmit}>
           <h4 className='text-center mt-5 fs-3'>Forgot Password </h4>
          <div className=" d-block mt-4 mb-2 ">
            <label htmlFor="userid" className='my-1 fs-5'>Password</label>
            <input type="text"
              id='userid'
              className="form-control border border-primary "
              placeholder="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              />
          </div>
          <div className=" d-block mt-4 mb-2 ">
            <label htmlFor="userid" className='my-1 fs-5'>Conform Password</label>
            <input type="text"
              id='userid'
              className="form-control border border-primary "
              placeholder="conform Password"
              value={cpassword}
              onChange={(e)=>{setcPassword(e.target.value)}}
              />
          </div>
          <div className='text-center my-5'>
            <button className='col-6 btn btn-primary text-dark border-dark  rounded-2'>send</button>
          </div>
          {/* <div className='justify-content-between'>
            <button onClick={()=>{Navigate('/forgetPassword')}} className=' btn btn-text fw-bold text-primary'>Forgot Password</button>
            <button onClick={()=>{Navigate('/register')}} className=' btn btn-text fw-bold text-primary'>Register</button>
          </div> */}
      </form>
      </div>
    </div>
  </div>
)
}


