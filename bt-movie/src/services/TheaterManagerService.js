import { GROUPID } from "../util/Settings/config";
import { BaseService } from "./BaseService";

export class ManagerTheaterService extends BaseService {
    constructor() {
        super()
    }

    GetInfoTheater = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }


}
export const TheaterService = new ManagerTheaterService();