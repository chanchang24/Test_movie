import callApi from "utils/callApi"

const userApi ={
    loginApi(user){
        return callApi('QuanLyNguoiDung/DangNhap','POST',user)
    },
    addUserApi(user,token){
        return callApi('QuanLyNguoiDung/ThemNguoiDung','POST', user, token)
    },
    getAllUserApi(){
        return callApi('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
    }

}
export default userApi;