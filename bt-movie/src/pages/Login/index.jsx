import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MuiAlert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";
import Layout from "../../HOC/Layout";
import { LoginAction } from "../../redux/actions/Auth";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup.string().required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      padding: theme.spacing(8),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))`,
    paddingTop:"20px",
    borderRadius:"20px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8),
    marginBottom: "138px",
    padding:"20px"
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

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { values, handleChange, errors, touched, handleBlur, isValid } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      validationSchema: schema,
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    dispatch(
      LoginAction(values, () => {
        history.push("/");
      })
    );
  };

  return (
    <div className={classes.bg}>
      <Container style={{paddingTop:30}} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
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
                  value={values.matKhau}
                />
                {touched.matKhau && (
                  <p className="text-danger  text-left m-0">{errors.matKhau}</p>
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
              ĐĂNG NHẬP
            </Button>
            <NavLink to="/">
              <Button variant="contained" fullWidth color="primary">
                Back to home
              </Button>
            </NavLink>
            <NavLink to="/register">
              <Button className="mt-3" fullWidth color="secondary">
                Do not have an account? Register now
              </Button>
            </NavLink>
          </form>
        </div>
      </Container>
    </div>
  );
}
