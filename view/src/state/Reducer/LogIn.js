import { LogInC, LogOutC } from "../Constants/Constant";
import jwt_decode from "jwt-decode";
// import { Jwt } from "jsonwebtoken";



const JwtKey = 'LogIn'

const init = null
const LogIn = (state = init , action) =>{
    if(action.type===LogInC){
        localStorage.setItem('token', action.payload.token);
        const decoded = jwt_decode(action.payload.token);
        // Jwt.verify(action.payload.token,"JwtKey",(err,data)=>{
        //     if(err){
        //         state = null
        //     }else{
        //         state = {}
        //         state.data = data
        //         state.token =action.payload.token
        //     }
        // })
        const data = {token:action.payload.token,data:decoded}
        console.log(data)
        return data
    }
    else if(action.type===LogOutC){
        localStorage.removeItem('token')
        return null
    }
    else{
       if(!state){
        const token = localStorage.getItem('token')
            if(token){
            //     jwt.verify(token,JwtKey,(err,data)=>{
            //         if(err){
            //             state = null
            //         }else{
            //             state = {}
            //             state.data = data
            //             state.token =token
            //         }
            // })
            const decoded = jwt_decode(token)
            state = {token,data:decoded}
            }else{
                return state
            }
       }
        return state
    }
}

export default LogIn