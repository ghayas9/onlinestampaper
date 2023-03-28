import React,{useState} from 'react';
import './CreateForm.css'
import axios from 'axios';
import {NotificationManager} from 'react-notifications';

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
///////////////GET REDUX//////////////

const CreateForm = () => {


/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

const nv = useNavigate()
useEffect(()=>{
  if(!state){
    nv('/login')
  }
},[state])

const [serialNo,setSerialNo] = useState('');
const [userName,setUserName] = useState('');
const [licenceNo,setLicenceNo] = useState('');
const [title,setTitle] = useState('');
const [customerName,setCustomerName] = useState('');
const [customerCnic,setCustomerCnic] = useState('');
const [contactNo,setContactNo] = useState('');

const handleSubmit =(e)=>{
  e.preventDefault();
  axios({
  method:'post',
  headers:{
    'Authorization': `Bearer ${state.token}`
  },
  url:'http://localhost:9000/api/user/create/form',
  data:{
    serial_no:serialNo,
    user_name: userName,
    title: title,
    licence_no: licenceNo,
    contact: contactNo,
    customer_name: customerName,
    customer_cnic: customerCnic,
  }
  }).then((res)=>{
      console.log(res)
      nv('/totalForm')
      NotificationManager.success(`Created Successfully  `,"Success",3000)
  }).catch((err)=>{
      console.log(err)
      NotificationManager.error(`${err.response.data.message}   `,"Error",3000)
  })

}

return (<div className='container  border border-primary bg-light'>
 <div className="row">
  <div className='col-sm-12 col-lg' >
    <form  className=' form-horizontal'  style={{width:"60%"}}>
      <h3 className='h5 fw-bolder fs-5 text-lg-center text-primary'>ENTER CORRECT DATA INTO THE FORM</h3>
      <div className="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="serialNo" className='col-4 h5 fw-bolder text-primary'>Serial No</label>
        <input 
        type="text"
        className="form-control border-2 border-primary shadow "
        id="serialNo"
        value={serialNo}
        onChange={(e)=>{setSerialNo(e.target.value)}}
        />
      </div>
      <div class="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="userName" className='col-4 h5 fw-bolder text-primary'>User Name</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow"
        id="userName"
        value={userName}
        onChange={(e)=>{setUserName(e.target.value)}}
        />
      </div>
      <div class="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="licenceNo" className='col-4 h5 fw-bolder text-primary'>Licence No</label>
        <input type="text"
         className="form-control border-2 border-primary shadow"
          id="licenceNo"
          value={licenceNo}
         onChange={(e)=>{setLicenceNo(e.target.value)}}
          />
      </div>
      <div style={
        {border:"1px solid blue" , marginBottom:"20px"}
        }> </div>
      <div className="form-group d-sm-block d-lg-flex">
        <label htmlFor="title" className='col-4 h5 fw-bolder text-primary'>Title</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow "
        id="title"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
      </div>
      <div className="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="customerName" className='col-4 h5 fw-bolder text-primary'>Customer Name</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow" 
        id="customerName"
        value={customerName}
        onChange={(e)=>{setCustomerName(e.target.value)}}
        />
      </div>
      <div className="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="customerCnic"  className='col-4 h5 fw-bolder text-primary'>Customer CNIC</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow" 
        id="customerCnic"
        value={customerCnic}
        onChange={(e)=>{setCustomerCnic(e.target.value)}}
        />
      </div>
      <div className="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="contactNo" className='col-4 h5 fw-bolder text-primary'>Contact No</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow"
        id="contactNo"
        value={contactNo}
        onChange={(e)=>{setContactNo(e.target.value)}}
         />
      </div>
      <div className='text-lg-center '>
      <button  onClick={handleSubmit} className='col-lg-4 col-sm-12 btn btn-sm-block btn-primary  rounded-3 fs-5 border border-dark'>Submit</button>
      </div>
</form>
</div>
</div>
       </div>)
}

export default CreateForm;
