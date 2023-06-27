import React, { useState } from 'react';
import './TotalForm.css';
import './FeeSlip.css';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
 const FeeSlip = () => {
  const perRate = 100
  const [account , setAccount] = useState('')
  const [branch , setBranch] = useState('')
  const [code , setCode] = useState('')
  const [challan , setChallan] = useState('')
  const [Licence , setLicence] = useState('')
  const [name , setName] = useState('')
  const [fname , setFName] = useState('')
  const [tt ,settt] = useState('1')
  const [mdata,setdate] = useState((new Date().toDateString())+'')
  const componentRef = useRef();
  return(
     <div className='container bg-primary' style={{overflow:'hidden',display:'flex',justifyContent:'center',flexDirection:"column"}} >
      <div className="overF" style={{overflowX:'scroll',padding:"20px",width:'100%'}}>
      <div className='row' style={{ width:'277mm'}}  ref={componentRef}>
        
         <div className="col-4  my-2 bg-light br-1">
           <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Account No </span><span style={{width:'63%',borderBottom:'2px dotted black'}}>{account}</span>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Bank Branch Name </span><div style={{borderBottom:'2px dotted black',width:'45%'}}>{branch}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Branch Code </span><div style={{borderBottom:'2px dotted black',width:'60%'}}>{code}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Challan No </span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{challan}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Licence No </span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{Licence}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Name </span><div style={{borderBottom:'2px dotted black',width:'75%'}}>{name}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Name Father</span><div style={{borderBottom:'2px dotted black',width:'60%'}}>{fname}</div>
           </h6>

           <div className="col my-5  border-top border-dark ">

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Form Price</span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{500}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Total Form</span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{tt}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Amount Paid</span><div style={{borderBottom:'2px dotted black',width:'58%'}}>{parseInt(tt)*500}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Date </span><div style={{borderBottom:'2px dotted black',width:'75%'}}>{mdata}</div>
           </h6>

           </div>
           <h5 className='text-center'>User Copy</h5>
         </div>

         
         <div className="col-4  my-2  bg-light br-2">
         <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Account No </span><span style={{width:'63%',borderBottom:'2px dotted black'}}>{account}</span>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Bank Branch Name </span><div style={{borderBottom:'2px dotted black',width:'45%'}}>{branch}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Branch Code </span><div style={{borderBottom:'2px dotted black',width:'60%'}}>{code}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Challan No </span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{challan}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Licence No </span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{Licence}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Name </span><div style={{borderBottom:'2px dotted black',width:'75%'}}>{name}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Name Father</span><div style={{borderBottom:'2px dotted black',width:'60%'}}>{fname}</div>
           </h6>

           <div className="col my-5  border-top border-dark ">

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Form Price</span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{500}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Total Form</span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{tt}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Amount Paid</span><div style={{borderBottom:'2px dotted black',width:'58%'}}>{parseInt(tt)*500}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Date </span><div style={{borderBottom:'2px dotted black',width:'75%'}}>{mdata}</div>
           </h6>
           </div>
           <h5 className='text-center'>Office Copy</h5>
         </div>




         <div className="col-4   my-2  bg-light br-3">
         <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Account No </span><span style={{width:'63%',borderBottom:'2px dotted black'}}>{account}</span>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Bank Branch Name </span><div style={{borderBottom:'2px dotted black',width:'45%'}}>{branch}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Branch Code </span><div style={{borderBottom:'2px dotted black',width:'60%'}}>{code}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Challan No </span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{challan}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Licence No </span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{Licence}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Name </span><div style={{borderBottom:'2px dotted black',width:'75%'}}>{name}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Name Father</span><div style={{borderBottom:'2px dotted black',width:'60%'}}>{fname}</div>
           </h6>

           <div className="col my-5  border-top border-dark ">

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Form Price</span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{perRate}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Total Form</span><div style={{borderBottom:'2px dotted black',width:'63%'}}>{tt}</div>
           </h6>

           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Amount Paid</span><div style={{borderBottom:'2px dotted black',width:'58%'}}>{parseInt(tt)*perRate}</div>
           </h6>
           <h6 className='mx-2' style={{display:"flex"}}>
            <span style={{display:'block',marginRight:'10px'}}> Date </span><div style={{borderBottom:'2px dotted black',width:'75%'}}>{mdata}</div>
           </h6>
           </div>
           <h5 className='text-center'>Bank Copy</h5>
         </div>
       </div>
        </div>



        
       <div className='row m-2'>
        <div className="col-sm-12 pb-2">
         <div className='float-end pe-5 d-flex' >
    <ReactToPrint
        trigger={() => <button className='btn col-7 rounded border-2 bg-light mx-1  fw-bolder' > Download</button>}
        content={() => componentRef.current}
      />
      <ReactToPrint
        trigger={() => <button className='btn col-7 rounded border-2  bg-light  fw-bolder'>Print</button>}
        content={() => componentRef.current}
      />
          
          
         </div>
        </div>
        </div>

        <div>
            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'>Accont No</label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={account}
                onChange={(e)=>{setAccount(e.target.value)}}
                />
            </div>


            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'>Bank Branch Name</label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={branch}
                onChange={(e)=>{setBranch(e.target.value)}}
                />
            </div>


            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'>Branch Code</label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={code}
                onChange={(e)=>{setCode(e.target.value)}}
                />
            </div>


            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'>Challan No</label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={challan}
                onChange={(e)=>{setChallan(e.target.value)}}
                />
            </div>

            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'>Licence No</label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={Licence}
                onChange={(e)=>{setLicence(e.target.value)}}
                />
            </div>

            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'> Name </label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
            </div>
            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'> Father Name </label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={fname}
                onChange={(e)=>{setFName(e.target.value)}}
                />
            </div>


            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'> Total Form </label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={tt}
                onChange={(e)=>{settt(e.target.value)}}
                />
            </div>

            <div className="form-group d-lg-flex d-sm-block my-4">
                <label htmlFor="acc" className='col-4 h5 fw-bolder'> Date </label>
                <input 
                type="text"
                className="form-control border-2 border-primary shadow "
                id="acc"
                value={mdata}
                onChange={(e)=>{setdate(e.target.value)}}
                />
            </div>


        </div>
        
     </div> 
  )
}
export default FeeSlip;
