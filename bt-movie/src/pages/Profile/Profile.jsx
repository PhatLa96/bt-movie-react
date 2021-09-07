import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Layout from "../../HOC/Layout";

const useStyles = makeStyles((theme) => ({
  root: {},
  intro: {
    marginLeft: "20px",
    color: "#fff",
  },
  movieImg: {
    display: "block",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
  },
  info: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
    color: "#000",
    backgroundColor: "yellow",
  },
  bg: {
    backgroundColor: "#081b27",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
function Profile() {
  const classes = useStyles();
  const { Users } = useSelector((state) => state.UserReducer);

  const { email, hoTen, maNhom, soDT, taiKhoan } = Users || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Box className={classes.bg}>
        <Container maxWidth="md" className={classes.root}>
          <Grid container spacing={3}>
            <Grid items xs={12} sm={4}>
              <img
                src="https://i.pinimg.com/originals/46/3c/f8/463cf84883077c33ada46c5876edf950.jpg"
                alt="pho"
                className={classes.movieImg}
                onError={(e) =>
                  (e.target.src = "https://picsum.photos/200/300")
                }
              />
            </Grid>
            <Grid items xs={12} sm={8}>
              <Box className={classes.intro}>
                <Typography variant="h6" className={classes.title}>
                  Username: {taiKhoan}
                </Typography>
                <Typography variant="body1" className={classes.info}>
                  Email: {email}
                </Typography>
                <Typography variant="body1" className={classes.info}>
                  Group: {maNhom}
                </Typography>
                <Typography variant="body1" className={classes.info}>
                  Phone: {soDT}
                </Typography>
                <Typography variant="body1" className={classes.info}>
                  Full name: {hoTen}
                </Typography>
                <NavLink to="/">
                  <Button className={classes.button}>Back to home</Button>
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}

export default Profile;
