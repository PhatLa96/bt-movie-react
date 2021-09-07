import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { message } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import {
  AddUserAction,
  UpdateUserAction,
} from "../../redux/actions/UserAction";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("*UserName is Required"),
  matKhau: yup.string().required("*Password is Required"),
  email: yup.string().required("*Email is Required").email("*Email is Invalid"),
  soDt: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "*Phone is Invalid"),
  maNhom: yup.string().required("*GroupID is Required"),
  hoTen: yup.string().required("*FullName is Required"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    marginTop: theme.spacing(3),
  },
}));

export default function AddUser(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const { arrUsers } = useSelector((state) => state.UserReducer);

  const currencies = [
    {
      value: "QuanTri",
      label: "Quản trị",
    },
    {
      value: "KhachHang",
      label: "Khách hàng",
    },
  ];

  const {
    handleChange,
    values,
    setFieldValue,
    errors,
    isValid,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP05",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });
  console.log(values);
  const addSuccess = () => {
    message.success({
      content: "Thêm người dùng thành công",
      style: { marginTop: "20px", color: "blue" },
      duration: 1.5,
    });
  };

  const addError = () => {
    message.error({
      content: "Tài khoản hoặc gmail đã có người sử dụng",
      style: { marginTop: "20px", color: "red" },
      duration: 1.5,
    });
  };
  const newPage = () => {
    history.push("/admin/users");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    dispatch(AddUserAction(values, addSuccess, addError, newPage));
  };

  return (
    <Container component="main" maxWidth="lg">
      <h1>Thêm người dùng</h1>
      <CssBaseline />
      <div className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.taiKhoan}
            name="taiKhoan"
            variant="outlined"
            autoFocus
            required
            fullWidth
            id="taiKhoan"
            label="Tài khoản"
            autoFocus
          />
          {touched.taiKhoan && (
            <p className="text-danger  text-left m-0">{errors.taiKhoan}</p>
          )}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.matKhau}
            className={classes.textfield}
            variant="outlined"
            required
            fullWidth
            name="matKhau"
            label="Mật khẩu"
            type="password"
            id="matKhau"
            autoComplete="current-password"
          />
          {touched.matKhau && (
            <p className="text-danger  text-left m-0">{errors.matKhau}</p>
          )}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.soDt}
            className={classes.textfield}
            name="soDt"
            variant="outlined"
            required
            fullWidth
            id="soDt"
            label="Số điện thoại"
          />
          {touched.soDt && (
            <p className="text-danger  text-left m-0">{errors.soDt}</p>
          )}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hoTen}
            className={classes.textfield}
            name="hoTen"
            variant="outlined"
            required
            fullWidth
            id="hoTen"
            label="Họ và tên"
          />
          {touched.hoTen && (
            <p className="text-danger  text-left m-0">{errors.hoTen}</p>
          )}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={classes.textfield}
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          {touched.email && (
            <p className="text-danger  text-left m-0">{errors.email}</p>
          )}
          <TextField
            className={classes.textfield}
            id="outlined-select-currency-native"
            name="maLoaiNguoiDung"
            select
            label="Loại người dùng"
            fullWidth
            value={values.maLoaiNguoiDung}
            onChange={(e) => setFieldValue("maLoaiNguoiDung", e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Thêm
          </Button>
        </form>
      </div>
    </Container>
  );
}
