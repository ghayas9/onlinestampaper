import React from 'react';
import '../components/professions.css';

import { Link } from 'react-router-dom';

const Professions = () => {
  return (
    <div className='container  border border-dark'>
      <div className="row professionRow">
        <div className="col-sm-12">
          <div className=' border border-dark col-6 text-center py-5'>
             <Link className='btn btn-primary col-2 mx-2' to={'/'}>
            Admin
             </Link>
             <Link className='btn btn-primary col-2 mx-2' to={'/'}>
             User
             </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Professions;