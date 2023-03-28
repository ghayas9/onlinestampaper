import { LogInAdminC, LogOutAdminC,  } from "../Constants/Constant";
import jwt_decode from "jwt-decode";
// import { Jwt } from "jsonwebtoken";

const JwtKey = 'LogIn'

const init = null
const Admin = (state = init , action) =>{
    if(action.type===LogInAdminC){
        localStorage.setItem('admin', action.payload.token);
        const decoded = jwt_decode(action.payload.token);
        const data = {token:action.payload.token,data:decoded}
        console.log(data)
        return data
    }
    else if(action.type===LogOutAdminC){
        localStorage.removeItem('admin')
        return null
    }
    else{
       if(!state){
        const token = localStorage.getItem('admin')
            if(token){
            const decoded = jwt_decode(token)
            state = {token,data:decoded}
            }else{
                return state
            }
       }
        return state
    }
}

export default Admin