import { actionTypes } from "../types"

const initialState = {
    arrUsers: [],

}
const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.GET_USER: {
            state.arrUsers = payload
            return { ...state }
        }
     

        default:
            return state
    }
}

export default UserReducer