import createAction from "."
import { UserService } from "../../services/UserManagerService"
import { actionTypes } from "../types"

export const UserAction = (username = "") => {
    return async (dispatch) => {
        try {
            const res = await UserService.GetUserList(username)
            dispatch(createAction(actionTypes.GET_USER, res.data.content))
        } catch (err) {
            console.log(err)
        }
    }
}

export const DeleteUserAction = (taiKhoan, deleteSuccess, deleteError) => {
    return async (dispatch) => {
        try {
            const res = await UserService.DeleteUser(taiKhoan)
            deleteSuccess()
            console.log(res)
        } catch (err) {
            deleteError()
            console.log(err)
        }
    }
}

export const SearchUserAction = (value) => {
    return async (dispatch) => {
        try {
            const res = await UserService.SearchUser(value);
            dispatch(createAction(actionTypes.GET_USER, res.data.content))
            console.log(res)
        } catch (error) {
            console.log(error.reponce);
        }
    };
};

export const UpdateUserAction = (info, updateSuccess, updateError, newPage) => {
    return async (dispatch) => {
        try {
            const res = await UserService.UpdateUser(info);
            updateSuccess()
            newPage()
            console.log(res)
        } catch (error) {
            updateError()
            console.log(error);
        }
    };
};
export const AddUserAction = (info, addSuccess, addError, newPage) => {
    return async (dispatch) => {
        try {
            const res = await UserService.AddUser(info);
            addSuccess()
            newPage()
            console.log(res)
        } catch (error) {
            addError()
            console.log(error);
        }
    };
};