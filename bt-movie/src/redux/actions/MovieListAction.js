
import createAction from ".";
import { MovieService } from "../../services/MovieManagerService";
import { actionTypes } from "../types";

export const MovieListAction = (pagination) => {
    return async (dispatch) => {
        try {
            const res = await MovieService.GetMovieList(pagination)
            console.log(res)
            dispatch(createAction(actionTypes.SET_MOVIE_LIST, res.data.content))
        } catch (err) {
            console.log(err)
        }
    }

}
export const movieInfoAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const res = await MovieService.GetDetailMovie(maPhim)
            dispatch(createAction(actionTypes.SET_DETAIL_MOVIE, res.data.content))

        } catch (err) {
            console.log(err)
        }
    }
}
export const BannerAction = async (dispatch) => {

    try {
        const res = await MovieService.GetBannerList()
        dispatch(createAction(actionTypes.SET_BANNER_LIST, res.data.content))

    } catch (err) {
        console.log(err)
    }

}