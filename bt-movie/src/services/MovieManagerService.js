import { GROUPID } from "../util/Settings/config";
import { BaseService } from "./BaseService";

export class MovieManagerService extends BaseService {
    constructor() {
        super()
    }

    GetBannerList = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }
    GetMovieList = (pagination) => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=${pagination}&soPhanTuTrenTrang=12`);
    }
    GetDetailMovie = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
    }

}
export const MovieService = new MovieManagerService();