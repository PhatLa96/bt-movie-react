
import { actionTypes } from "../types"

const initialState = {
    arrImg: []
}

const CarouselReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case actionTypes.SET_BANNER_LIST: {
            state.arrImg = payload
            return { ...state }
        }


        default:
            return state
    }
}
export default CarouselReducer
