import React from 'react';
import homeImg from '../Images/home.jpeg'

 const Home = () => {
  return (<div className='container'>
           <div className="row">
               <div className="col-sm-12 gradientColor">
                 <div>
                   <img src={homeImg} alt="Home Image" className='img-fluid w-100 h-75' /> 
                  </div>
               </div>
           </div>
       </div>)
}

export default Home;
