const init = 0
const ChangeBar = (state = init , action) =>{
    if(action.type==="bar"){
        state = action.payload
        return state
    }
   if(localStorage.getItem('token') && state == 0 ){
    return 1
   }
    return state  
}
export default ChangeBar