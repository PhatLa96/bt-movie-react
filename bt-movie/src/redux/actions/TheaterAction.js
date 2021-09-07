

import createAction from ".";
import { TheaterService } from "../../services/TheaterManagerService";
import { actionTypes } from "../types";

export const GetInfoSystem = async (dispatch) => {
    try {
        const res = await TheaterService.GetInfoTheater()
        console.log(res)
        dispatch(createAction(actionTypes.SET_SYSTEM_THEATER, res.data.content))

    } catch (err) {
        console.log(err);
    }
};
