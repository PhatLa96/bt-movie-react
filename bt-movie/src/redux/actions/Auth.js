import createAction from ".";
import { UserService } from "../../services/UserManagerService";
import { TOKEN } from "../../util/Settings/config";
import { actionTypes } from "../types";
export const SignUpAction = (values, callback) => {
    return async (dispatch) => {
        try {
            const res = await UserService.RegisterUser(values)
            dispatch(createAction(actionTypes.USER_SIGN_UP, res.data.content));

            alert("Đăng ký thành công")
        } catch (err) {
            alert("Tài khoản hoặc email đã tồn tại")
            console.log(err);
        }

    }

}

export const LoginAction = (values, callback) => {
    return async (dispatch) => {
        try {
            const res = await UserService.LoginUser(values)
            dispatch(createAction(actionTypes.USER_SIGN_IN, res.data.content))
            callback()
            alert("đăng nhập thành công")
            console.log(res)
            localStorage.setItem(TOKEN, res.data.content.accessToken)



        } catch (err) {
            alert("Tài khoản hoặc mật khẩu không đúng !!!")
            console.log(err)
        }
    }
}
export const fetchMe = () => {
    return async (dispatch) => {
        try {
            const res = await UserService.GetInfoUser()
            console.log(res)
            dispatch(createAction(actionTypes.FETCH_ME, res.data.content))
        } catch (err) {
            console.log(err)
        }
    }
}