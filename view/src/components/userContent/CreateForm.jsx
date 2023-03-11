import React,{useState} from 'react';
import './CreateForm.css'

const CreateForm = () => {
const [serialNo,setSerialNo] = useState();
const [userName,setUserName] = useState();
const [licenceNo,setLicenceNo] = useState();
const [title,setTitle] = useState();
const [customerName,setCustomerName] = useState();
const [customerCnic,setCustomerCnic] = useState();
const [contactNo,setContactNo] = useState();

const handleSubmit =(e)=>{
e.preventDefault()
}

return (<div className='container  border border-primary bg-light'>
 <div className="row">
  <div className='col-sm-12 col-lg'>
    <form onSubmit={handleSubmit} className='col-7 form-horizontal  p-4'>
      <h3 className='h5 fw-bolder fs-5 text-lg-center text-primary'>ENTER CORRECT DATA INTO THE FORM</h3>
      <div className="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="serialNo" className='col-3 h5 fw-bolder text-primary'>Serial No</label>
        <input 
        type="text"
        className="form-control border-2 border-primary shadow"
        id="serialNo"
        value={serialNo}
        onChange={(e)=>{setSerialNo(e.target.value)}}
        />
      </div>
      <div class="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="userName" className='col-3 h5 fw-bolder text-primary'>User Name</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow"
        id="userName"
        value={userName}
        onChange={(e)=>{setUserName(e.target.value)}}
        />
      </div>
      <div class="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="licenceNo" className='col-3 h5 fw-bolder text-primary'>Licence No</label>
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
        <label htmlFor="title" className='col-2 h5 fw-bolder text-primary'>Title</label>
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
        <label htmlFor="customerCnic"  className='col-3 h5 fw-bolder text-primary'>Customer CNIC</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow" 
        id="customerCnic"
        value={customerCnic}
        onChange={(e)=>{setCustomerCnic(e.target.value)}}
        />
      </div>
      <div className="form-group d-lg-flex d-sm-block my-4">
        <label htmlFor="contactNo" className='col-3 h5 fw-bolder text-primary'>Contact No</label>
        <input type="text" 
        className="form-control border-2 border-primary shadow"
        id="contactNo"
        value={contactNo}
        onChange={(e)=>{setContactNo(e.target.value)}}
         />
      </div>
      <div className='text-lg-center '>
      <button type='submit' className='col-lg-4 col-sm-12 btn btn-sm-block btn-primary  rounded-3 fs-5 border border-dark'>Submit</button>
      </div>
</form>
</div>
</div>
       </div>)
}

export default CreateForm;
