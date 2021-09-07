import { TOKEN } from "../../util/Settings/config";
import { actionTypes } from "../types";



const initialState = {
    Users: null
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_SIGN_UP: {
            state.Users = action.payload;
            return { ...state }
        }
        case actionTypes.USER_SIGN_IN: {
            state.Users = action.payload
            return { ...state }
        }
        case actionTypes.FETCH_ME: {
            state.Users = action.payload
            return { ...state }
        }
        case actionTypes.USER_LOGOUT: {
            localStorage.removeItem(TOKEN)
            state.Users = {}
            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default UserReducer;