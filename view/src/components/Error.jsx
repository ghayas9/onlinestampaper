import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const Navigate = useNavigate();
  return(<div>
        This is 4O4 page!!
        <button onClick={()=>{
             Navigate("/")
        }} className='btn btn-primary border-dark text-light m-3 '>Back</button>
      </div>)
}
export default Error;
