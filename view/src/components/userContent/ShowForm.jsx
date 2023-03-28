import React, { useEffect, useState } from 'react';

import stamp from '../Images/stamp.png';

import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

const ShowForm = () => {

  const [form ,setform] = useState({})
/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

  const {id} =  useParams()

  const getForm = ()=>{
    axios({
      method:'get',
      headers:{
        'Authorization': `Bearer ${state.token}`
      },
      url:'http://localhost:9000/api/user/get/form/'+id
      }).then((res)=>{
          console.log(res)
          setform(res.data.data)
          // NotificationManager.success(`Created Successfully  `,"Success",3000)
      }).catch((err)=>{
          console.log(err)
          // NotificationManager.error(`${err.response.data.message}   `,"Error",3000)
      })
  }

  useEffect(getForm,[])

  const componentRef = useRef();

  return (
    <div className='container border border-primary bg-light'>
      <div className='row'>
        <div className="col-lg-2 bg-primary text-center">

        <ReactToPrint
          trigger={() => <button className='btn bg-light text-primary  my-3 mt-5  fs-5 fw-bold  border-dark rounded-3' onClick={() =>{} }>Download</button>}
          content={() => componentRef.current}
        />
         <br />
         <button className=' btn bg-light text-primary  fs-5 fw-bold border-dark rounded-3' onClick={() =>{} }>Print</button>
        </div>
        <div className='col-sm-12 col-md-10  my-2'>
          <div style={{ width:'100%',padding:'5px', }} ref={componentRef}>
          <div  style={{ width:'100%',border:'5px solid black' ,height:'1045px'}} >
              <img src={stamp} alt="" srcset="" style={{width:'100%',}}/>
              <div style={{padding:'10px'}}>
                    <div className="row" style={{borderBottom:'2px solid black'}} >
                          <div className="col-4 b">
                            <h5>Serial No : {form.serial_no}</h5>
                          </div>
                          <div className="col-4 b">
                          <h5>Seller Name : {form.user_name}</h5>
                          </div>
                          <div className="col-4 b">
                          <h5>ID : {123456}</h5>
                          </div>
                    </div>
                    <div className="row" style={{borderBottom:'2px solid black'}}>
                          <div className="col-4 b">
                            <h5>Customer Name : {form.customer_name}</h5>
                          </div>
                          <div className="col-4 b">
                          <h5>Contact : {form.contact}</h5>
                          </div>
                          <div className="col-4 b">
                          <h5>Licence No : {form.licence_no}</h5>
                          </div>
                    </div>
                    <h5 style={{borderBottom:'2px solid black'}}>Title  : {form.title}</h5>
                    
              </div>
          </div>
          </div>
         {/* <img src={firstImg} alt="This is the stamp..." /> */}
        </div>
      </div>
  
    </div>
        
        // <input type='button' style={{ position: 'relative', float: 'right' }}
        //   onClick={() => print(ids)} value='Stampa' />

  )
}
export default ShowForm;