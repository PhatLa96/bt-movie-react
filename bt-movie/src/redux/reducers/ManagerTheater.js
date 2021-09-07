import { actionTypes } from "../types"


const initialState = {
    arrTheater: []
}

const ManagerTheater = (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.SET_SYSTEM_THEATER: {
            state.arrTheater = payload
            return { ...state }
        }


        default:
            return state
    }
}
export default ManagerTheater