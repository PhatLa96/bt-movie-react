import createAction from "."
import { UserService } from "../../services/UserManagerService"
import { TOKEN } from "../../util/Settings/config"
import { actionTypes } from "../types"

export const LoginAction = (values, callback) => {
    return async (dispatch) => {
        try {
            const res = await UserService.adminLogin(values)
            if (res.data.content.maLoaiNguoiDung === "QuanTri") {
                alert("đăng nhập thành công")
                localStorage.setItem(TOKEN, res.data.content.accessToken)
                localStorage.setItem("login", JSON.stringify(res.data.content));
                callback()
                dispatch(createAction(actionTypes.LOG_IN, res.data.content));
            } else {
                alert("Bạn không có quyền truy cập")
            }
        } catch (err) {
            alert("Tài khoản hoặc mật khẩu không đúng !!!")
            console.log(err)
        }
    }
}