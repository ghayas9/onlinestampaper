import React,{useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './login.css'

import {NotificationManager} from 'react-notifications';


//***************API*****************//

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////

const Login = () => {

    /////////////SET REDUX//////////////
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator, dispatch)
    /////////////SET REDUX//////////////

    /////////////GET REDUX//////////////
    const state = useSelector((state) => state.LogInAdmin)
    /////////////GET REDUX//////////////

    const navigate = useNavigate()
    useEffect(()=>{
      if (state) {
          navigate('/')
        }
  },[state])
    const Navigate = useNavigate();
    const [password,setPassword] =useState();
    const [userid,setUserID] =useState();

    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:9000/api/admin/signin',{
            password:password,
            email : userid
        }).then((res)=>{
            console.log(res)
            action.LogInAdmin(res.data)
            navigate('/')
            NotificationManager.success(`LogIn Successfully  `,"Success",3000)
        }).catch((err)=>{
            console.log(err)
            NotificationManager.error(`${err.response.data.message}   `,"Error",3000)
        })
    }

  return (
    <div>
      <div className="loginRow">
      <div className="col-12 position-relative" style={{display:"flex",justifyContent:"center"}}>
        <form className='col-md-6 col-lg-4 middleform bg-light rounded' onSubmit={handleSubmit}>
             <h4 className='text-center mt-5 fs-3'>LOGIN AS ADMIN</h4>
            <div className=" d-block mt-4 mb-2 ">
              <label htmlFor="userid" className='my-1 fs-5'>Email</label>
              <input type="text"
                id='userid'
                className="form-control border border-primary "
                placeholder="Enter Email"
                value={userid}
                onChange={(e)=>{setUserID(e.target.value)}}
                />
            </div>
            <div className="  d-block my-2">
              <label htmlFor="userpassword" className='my-1 fs-5'>Password</label>
              <input type="password" 
              id='userpassword' 
              className="form-control border border-primary "  
              placeholder="Enter password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className='text-center my-5'>
              <button className='col-6 btn btn-primary text-dark border-dark  rounded-2'>Login</button>
            </div>
            <div className='justify-content-between'>
              <button onClick={()=>{Navigate('/forgetPassword')}} className=' btn btn-text fw-bold text-primary'>Forgot Password</button>
              <button onClick={()=>{Navigate('/register')}} className=' btn btn-text fw-bold text-primary'>Register</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}
export default Login
