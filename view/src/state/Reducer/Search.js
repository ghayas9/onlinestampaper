
import { SearchEndT, SearchStartT } from "../Constants/Constant"

const Search = (state = false , action) =>{
    if(action.type===SearchStartT){
        return true
    }
    else if (action.type===SearchEndT){
        return false
    }else{
        return false
    }
}

export default Search