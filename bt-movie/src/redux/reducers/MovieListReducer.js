import { actionTypes } from "../types"

const initialState = {
    movieList: [],

    filmDetail: {},
}

const MovieListReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.SET_MOVIE_LIST: {
            state.movieList = payload
            return { ...state }
        }
        case actionTypes.SET_DETAIL_MOVIE: {
            state.filmDetail = payload
            return { ...state }
        }
        


        default:
            return state
    }
}
export default MovieListReducer