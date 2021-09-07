import { GROUPID } from "../util/Settings/config";
import { BaseService } from "./BaseService";

export class UserManagerService extends BaseService {
    constructor() {
        super()
    }

    adminLogin = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, values)
    }
    GetUserList = (username = "") => {
        if (username != "") {
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${username} `)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    DeleteUser = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    SearchUser = (value) => {
        return this.get(
            `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${value}`
        );
    };

    UpdateUser = (info) => {
        return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, info);
    };
    AddUser = (info) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, info);
    };


}
export const UserService = new UserManagerService();