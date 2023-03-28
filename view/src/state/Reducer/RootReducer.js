import { combineReducers } from "redux";
import LogIn from "./LogIn";
import SuccessMessage from './SuccessMessage';
import ErrorMessage from "./ErrorMessage";
import Search from "./Search";
import Bar from "./ChangeBar";
import Admin from "./Admin";
const Reducers = combineReducers({
    LogIn,SuccessMessage,ErrorMessage,Search,Bar,Admin
});
export default  Reducers;