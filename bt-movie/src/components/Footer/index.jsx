import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";

import _ from "lodash";

import { socialMedia } from "../../data/socialMedia";
import { Avatar, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetInfoSystem } from "../../redux/actions/TheaterAction";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  img: {
    background: `linear-gradient(180deg,#081b27,rgba(8,27,39,.8)),url("https://global-uploads.webflow.com/5fe2d564b3fa64a886a11cee/5fe2d564b3fa643be1a11d52_Photo-8.jpg")`,
    padding: "25px",
    backgroundPosition: " 0 0,50% 50%",
  },
}));

const Footer = ({ color }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { arrTheater } = useSelector((state) => state.ManagerTheater);
  const arrSystemTheater = _.map(arrTheater, (item) =>
    _.pick(item, ["maHeThongRap", "tenHeThongRap", "logo"])
  );
  const { instagram, facebook, github, homepage } = socialMedia;
  console.log(arrSystemTheater);
  useEffect(() => {
    dispatch(GetInfoSystem);
  }, []);
  return (
    <Box className={classes.img}>
      <Container maxWidth="lg">
        <Grid container className="text-left">
          <Grid item xs={12} md={4}>
            <img
              src="https://moveek.com/bundles/ornweb/img/logo.png"
              alt="cyberlearn"
              style={{ marginBottom: 50, width: 170, height: 100 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={0}>
              {arrSystemTheater.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={2}
                    md={4}
                    key={index}
                    className="text-center"
                    style={{ marginBottom: 50 }}
                  >
                    <img src={item.logo} style={{ width: 50 }} alt="" />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid xs={12} md={2} spacing={5}></Grid>
          <Grid className="text-center" item xs={12} md={2}>
            <Grid container justifyContent="left" spacing={2}>
              <Grid item md={3}>
                <HomeIcon
                  className={classes.snsIcon}
                  color={color ? "primary" : "secondary"}
                />
              </Grid>
              <Grid item md={3}>
                <FacebookIcon
                  className={classes.snsIcon}
                  color={color ? "primary" : "secondary"}
                />
              </Grid>
              <Grid item md={3}>
                <InstagramIcon
                  className={classes.snsIcon}
                  color={color ? "primary" : "secondary"}
                />
              </Grid>
              <Grid item md={3}>
                <GitHubIcon
                  className={classes.snsIcon}
                  color={color ? "primary" : "secondary"}
                />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
