import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import Layout from "../../HOC/Layout";
import { SignUpAction } from "../../redux/actions/Auth";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup.string().required("Password is required"),
  hoTen: yup.string().required("Họ và tên is required"),
  soDt: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]+$/g, "Phone must be number!!!!"),
  email: yup.string().required("Email is required").email("Email is invalid"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))`,
    paddingTop: "20px",
    borderRadius: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.

    paddingInline:"20px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bg: {
    backgroundImage: `url("https://tix.vn/app/assets/img/icons/bg2.jpg")`,
    marginTop: "-60px",
    width: "100%",
    height: "108vh",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
}));

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { Users } = useSelector((state) => state.UserReducer);
  console.log(Users);
  const { values, handleChange, errors, touched, handleBlur, isValid } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP05",
        hoTen: "",
      },
      validationSchema: schema,
      // validateOnMount: true,
    });
  console.log(values);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValid) return;
    dispatch(SignUpAction(values));
  };
  // useEffect(() => {
  //   if (SignUpUser) {
  //     closeModal();
  //     // console.log(closeModal());
  //   }
  // }, [SignUpUser]);
  return (
    <div className={classes.bg}>
      <Container style={{paddingTop:10}} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="taiKhoan"
                  variant="outlined"
                  autoFocus
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài khoản"
                  autoFocus
                  value={values.taiKhoan}
                />
                {touched.taiKhoan && (
                  <p className="text-danger  text-left m-0">
                    {errors.taiKhoan}
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ĐĂNG KÝ
            </Button>
            <NavLink to="/">
              <Button variant="contained" fullWidth color="primary">
                Back to home
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button className="mt-3" fullWidth color="primary">
                Do you already have an account? Login now
              </Button>
            </NavLink>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
};
export default Register;
