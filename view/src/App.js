import Login from "./components/Login";
import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Register from "./components/Register";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Error from "./components/Error";
import CreateForm from "./components/userContent/CreateForm";
import TotalForm from "./components/userContent/TotalForm";
import FeeSlip from "./components/userContent/FeeSlip";
import ShowForm from "./components/userContent/ShowForm";
// import ForgetPassword from "./components/ForgetPassword";
// import UserList from "./components/adminContent/UserList";
// import UserVerification from "./components/adminContent/UserVerification";
// import UserStatus from "./components/adminContent/UserStatus";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
// import Example from "./FirstBootstrap";
// import Button from  'react-bootstrap/Button';

import AdminHome from "./components/AdminPanel/Home";
import AdminNav from "./components/AdminPanel/Navbar";
import UserRequest from "./components/AdminPanel/UserRequest";
import PaperList from "./components/AdminPanel/PaperList";
import PaperRequest from "./components/AdminPanel/PaperRequest";
import UserList from "./components/AdminPanel/UserList";
import LogInAdminPage from "./components/AdminPanel/LoginAdmin";

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import GBar from "./components/GBar";
///////////////GET REDUX//////////////

export default function App() {

   /////////////GET REDUX//////////////
   const user = useSelector((user) => user.LogIn)
   const admin = useSelector((admin) => admin.Admin)
   /////////////GET REDUX//////////////


   const genralRoutes = [
    {
      path:"/login",
      component:<Login/>
    },
    {
      path:'/admin/login',
      component:<LogInAdminPage/>
    },
    {
      path:"/register",
      component:<Register/>
    },
    {
      path:"/",
      component:<Home/>
    },
   ]
  const userRoutes =  [
    {
      path:"/",
      component:<Home/>
    },
    
    {
      path:"/createForm",
      component:<CreateForm/>
    },
    {
      path:"/totalForm",
      component:<TotalForm/>
    },
    {
      path:"/feeSlip",
      component:<FeeSlip/>
    },
    {
      path:"/showForm/:id",
      component:<ShowForm/>
    },
  ]

  const AdminRoutes = [
    {
      path:'/',
      componet:<AdminHome/>
    },
    {
      path:'/user/list',
      componet:<UserList/>
    },
    {
      path:'/user/request',
      componet:<UserRequest/>
    },
    {
      path:'/paper/list',
      componet:<PaperList/>
    },
    {
      path:'/paper/request',
      componet:<PaperRequest/>
    }
  ]


 return (
    <div className="container">
      <NotificationContainer/>
      <Router>
          {/* TopBar Selection */}
            {
              user ? <Nav/> : admin ? <AdminNav/> : <GBar/>
            }
          {/* TopBar Selection */}
        <Routes>

        {/* Not LogIn */}
            {
                !user && !admin ? 
                    genralRoutes.map((e)=>{
                      return(
                        <Route path={e.path} element={e.component}/>
                      )
                    }):null
            }
        {/* User Panel */}
            {
            user ? 
              // <Nav/> 
                userRoutes.map((e)=>{
                  return(
                    <Route path={e.path} element={e.component}/>
                  )
                })
            :null
            }
          {/* User Panel */}


          {/* Admin Panel */}
            {
              admin?
                // <AdminNav/>
                  AdminRoutes.map((e)=>{
                    return(
                      <Route path={e.path} element={e.componet}/>
                    )
                  })
              :null
            }
          {/* Admin Panel */}

          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}


