import React,{useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'

const Login = () => {
    const Navigate = useNavigate();
    const [password,setPassword] =useState();
    const [userid,setUserID] =useState();

    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:5001/api/user',{
            password:password,
            id : userid
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
      Navigate('/home');
    }

  return (
    <div className='container '>
      <div className="row  loginRow">
      <div className="col-sm-12 position-relative">
        <form className='col-3 middleform bg-light rounded' onSubmit={handleSubmit}>
             <h4 className='text-center mt-5 fs-3'>LOGIN</h4>
            <div className=" d-block mt-4 mb-2 ">
              <label htmlFor="userid" className='my-1 fs-5'>ID Number</label>
              <input type="text"
                id='userid'
                className="form-control border border-primary "
                placeholder="Enter ID number"
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
              <button onClick={()=>{Navigate('/forgetPassword')}} className='ms-2  btn btn-text fw-bold text-primary'>Forgot Password</button>
              <button onClick={()=>{Navigate('/register')}} className='ms-3  btn btn-text fw-bold text-primary'>Register</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}
export default Login
