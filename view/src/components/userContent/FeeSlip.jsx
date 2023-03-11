import React from 'react';
import './TotalForm.css';
import feeImg from '../Images/feeSlip.jpeg'

 const FeeSlip = () => {
  return(
     <div className='container h-100 bg-primary'>
       <div className='row p-2'>


         <div className="col-lg-4 col-sm-12  p-5 my-2 bg-light">
           <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2'>
             Account No...................................................
           </h6>
           <h6 className='mx-2'>
             Bank Branch Name.....................................
           </h6>
           <h6 className='mx-2'>
             Branch Code.................................................
           </h6>
           <h6 className='mx-2'>
             Challan No....................................................
           </h6>
           <h6 className='mx-2'>
             Licence No....................................................
           </h6>
           <h6 className='mx-2'>
             Name.............................................................
           </h6>
           <h6 className='mx-2'>
            Father Name................................................
           </h6>
           <div className="col my-5  border-top border-dark ">
           <h6 className='mx-2 my-2'>
            Form Price.....................................................
           </h6>
           <h6 className='mx-2'>
            Total Form.....................................................
           </h6>
           <h6 className='mx-2'>
             Amount Paid ................................................
           </h6>
           <h6 className='mx-2'>
             Date................................................................
           </h6>
           </div>
           <h5 className='text-center'>User Copy</h5>
         </div>





         <div className="col-lg-4 col-sm-12   p-5 my-2  bg-light">
           <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2'>
             Account No...................................................
           </h6>
           <h6 className='mx-2'>
             Bank Branch Name.....................................
           </h6>
           <h6 className='mx-2'>
             Branch Code.................................................
           </h6>
           <h6 className='mx-2'>
             Challan No....................................................
           </h6>
           <h6 className='mx-2'>
             Licence No....................................................
           </h6>
           <h6 className='mx-2'>
             Name.............................................................
           </h6>
           <h6 className='mx-2'>
            Father Name................................................
           </h6>
           <div className="col my-5  border-top border-dark ">
           <h6 className='mx-2 my-2'>
            Form Price.....................................................
           </h6>
           <h6 className='mx-2'>
            Total Form.....................................................
           </h6>
           <h6 className='mx-2'>
             Amount Paid ................................................
           </h6>
           <h6 className='mx-2'>
             Date................................................................
           </h6>
           </div>
           <h5 className='text-center'>Office Copy</h5>
         </div>




         <div className="col-lg-4 col-sm-12  p-5 my-2  bg-light">
           <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2'>
             Account No...................................................
           </h6>
           <h6 className='mx-2'>
             Bank Branch Name.....................................
           </h6>
           <h6 className='mx-2'>
             Branch Code.................................................
           </h6>
           <h6 className='mx-2'>
             Challan No....................................................
           </h6>
           <h6 className='mx-2'>
             Licence No....................................................
           </h6>
           <h6 className='mx-2'>
             Name.............................................................
           </h6>
           <h6 className='mx-2'>
            Father Name................................................
           </h6>
           <div className="col my-5  border-top border-dark ">
           <h6 className='mx-2 my-2'>
            Form Price.....................................................
           </h6>
           <h6 className='mx-2'>
            Total Form.....................................................
           </h6>
           <h6 className='mx-2'>
             Amount Paid ................................................
           </h6>
           <h6 className='mx-2'>
             Date................................................................
           </h6>
           </div>
           <h5 className='text-center'>Bank Copy</h5>
         </div>
       </div>

       <div className='row '>
        <div className="col-sm-12 pb-2">
         <div className='float-end pe-5 d-flex' >
          <button className='btn col-7 rounded border-2 bg-light mx-1  fw-bolder'> Download</button>
          <button className='btn col-7 rounded border-2  bg-light  fw-bolder'>Print</button>
         </div>
        </div>
        </div>
     </div> 

    //   <div className="container ">
    //    <div className="row totalFormRow">
    //      <div className="col-lg-12 col-md-12 col-sm-12 text-center p-2">
    //       <img src={feeImg} alt="This is the fee slip form" className='img-fluid mt-3 rounded' />
    //      </div>
    //      <div className=' position-relative mb-5 mt-2'>
    //        <button className=' tfBtnDownload rounded-3 text-primary '>Download</button>
    //        <button className=' tfBtnPrint rounded-3 text-primary '>Print</button>
    //      </div>
    //    </div>
    //  </div> 
  )
}
export default FeeSlip;