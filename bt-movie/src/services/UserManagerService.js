import { BaseService } from "./BaseService";

export class UserManagerService extends BaseService {
    constructor() {
        super()
    }

    RegisterUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, values)
    }
    LoginUser = (values) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, values)
    }
    GetInfoUser = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
    

}
export const UserService = new UserManagerService();