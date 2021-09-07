import React, { Fragment } from "react";
import { Button, message, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import {
  DeleteUserAction,
  SearchUserAction,
  searchUserAction,
  UserAction,
} from "../../redux/actions/UserAction";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Search from "antd/lib/transfer/search";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useState } from "react";
import { debounce } from "lodash";
export default function Dashboard() {
  const { Search } = Input;
  const [valueSearch, setValueSearch] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { arrUsers } = useSelector((state) => state.UserReducer);
  console.log(arrUsers);
  const data = arrUsers;

  useEffect(() => {
    if (valueSearch) {
      const timer = setTimeout(() => {
        dispatch(SearchUserAction(valueSearch));
      }, 500);
      return () => clearTimeout(timer);
    } else dispatch(UserAction());
  }, [dispatch, valueSearch]);
  const deleteSuccess = () => {
    message.success({
      content: "Xóa người dùng thành công",
      style: { marginTop: "20px", color: "blue" },
      duration: 1.5,
    });
  };

  const deleteError = () => {
    message.error({
      content: "Xóa người thất bại",
      style: { marginTop: "20px", color: "red" },
      duration: 1.5,
    });
  };
  const columns = [
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
    },
    {
      title: "Số điên thoại",
      dataIndex: "soDt",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mã loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => a.maLoaiNguoiDung.length - b.maLoaiNguoiDung.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      render: (text, user) => {
        return (
          <Fragment>
            <Button>
              <EditOutlined
                className="edit-button text-info"
                onClick={() =>
                  history.push(`/admin/users/edit/${user.taiKhoan}`)
                }
              />
            </Button>
            <Button>
              <DeleteOutlined
                className="delete-button text-danger"
                onClick={() => {
                  alert("Bạn có muốn xóa tài khoản này không");
                  dispatch(
                    DeleteUserAction(user.taiKhoan, deleteSuccess, deleteError)
                  );
                }}
              />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  // const onSearch = (value) => {
  //   console.log(value);
  //   dispatch(UserAction(value));
  // };


  return (
    <Fragment>
      <h1>Danh sách người dùng</h1>
      {/* <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      /> */}
      <Search
        placeholder="Tìm kiếm người dùng"
        allowClear
        enterButton={<SearchOutlined />}
        size="large"
        onChange={(e) => setValueSearch(e.target.value)}
        className="mb-4"
      />
   
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"taiKhoan"}
      />
    </Fragment>
  );
}
