import React from "react";
import MovieList from "./MovieListHOC";
import UserList from "./UserList";
export default function DemoHOC() {
  return (
    <div className="container">
      <div className="row">
        <UserList dataSource="http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"/> 
        <MovieList dataSource="http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01" />
      </div>
    </div>
  );
}
