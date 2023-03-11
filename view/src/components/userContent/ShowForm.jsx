import React, { createElement } from 'react';
import firstImg from '../Images/firstImg.jpeg';

const ShowForm = () => {

  return (
    <div className='container border border-primary bg-light'>
      <div className='row'>
        <div className="col-lg-2 bg-primary text-center">
         <button className='btn bg-light text-primary  my-3 mt-5 col-lg-8 fs-5 fw-bold  border-dark rounded-3' >Download</button>
         <br />
         <button className=' btn bg-light text-primary col-lg-8 fs-5 fw-bold border-dark rounded-3'>Print</button>
        </div>
        <div className='col-sm-10 text-center my-2'>
         <img src={firstImg} alt="This is the stamp..." />
        </div>
      </div>
  
    </div>
  )
}
export default ShowForm;