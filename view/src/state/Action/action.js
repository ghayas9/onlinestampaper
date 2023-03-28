import { ErrorMessageC, ErrorMessageT, LogInAdminC, LogInC, LogOutAdminC, LogOutC, SearchEndT, SearchStartT, SuccessMessageC, SuccessMessageT } from "../Constants/Constant"

export const ChangeBar = (data) => {
    return (dispatch) => {
        dispatch({
            type: "bar",
            payload: data
        })
    }
}

export const LogInAdmin = (data) => {
    return (dispatch) => {
        dispatch({
            type: LogInAdminC,
            payload: data
        })
    }
}

export const LogOutAdmin = () => {
    return (dispatch) => {
        dispatch({
            type: LogOutAdminC
        })
    }
}
export const LogIn = (data) => {
    return (dispatch) => {
        dispatch({
            type: LogInC,
            payload: data
        })
    }
}

export const LogOut = () => {
    return (dispatch) => {
        dispatch({
            type: LogOutC
        })
    }
}

export const SuccessMessage = (data) => {
    return (dispatch) => {
        dispatch({
            type: SuccessMessageC,
            payload: data
        })
    }
}
export const SuccessMessageTimeOut = () => {
    return (dispatch) => {
        dispatch({
            type: SuccessMessageT,
        })
    }
}

export const ErrorMessage = (data) => {
    return (dispatch) => {
        dispatch({
            type: ErrorMessageC,
            payload: data
        })
    }
}
export const ErrorMessageTimeOut = () => {
    return (dispatch) => {
        dispatch({
            type: ErrorMessageT,
        })
    }
}

export const SearchStart = () => {
    return (dispatch) => {
        dispatch({
            type: SearchStartT,
        })
    }
}
export const SearchEnd = () => {
    return (dispatch) => {
        dispatch({
            type: SearchEndT,
        })
    }
}