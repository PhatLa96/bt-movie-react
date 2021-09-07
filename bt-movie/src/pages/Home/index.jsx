import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Film from "../../components/Film/index";
import HomeCarousel from "../../components/HomeCarousel";
import ScrollBar from "../../components/ScrollMovie/ScrollMovie";
import Layout from "../../HOC/Layout";
import { MovieListAction } from "../../redux/actions/MovieListAction";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    padding: "15px",
    fontWeight: "bold",
    color: "yellow",
    backgroundColor: "#081b27",
    borderBottom: "1px solid #357945",
  },
  pos: {
    marginBottom: 12,
  },
  scroll: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    paddingTop: "80px",
    paddingLeft: "25px",
  },
  box: {
    backgroundColor: "#081b27",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  const history = useHistory();
  const { movieList } = useSelector((state) => state.MovieListReducer);
  console.log(movieList);
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const count = Math.ceil(movieList.totalCount / 12);
  console.log(props.history);

  useEffect(() => {
    dispatch(MovieListAction(pagination));
    window.scrollTo(0, 0);
  }, [pagination]);

  const handlePagination = (event, value) => {
    setPagination(value);
  };
  return (
    <Layout>
      <HomeCarousel />
      <Box className={classes.box}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={9}>
              <Typography
                className={classes.title}
                component="h2"
                variant="h4"
                align="left"
              >
                PHIM ĐỀ CỬ
              </Typography>
              <Container className="pt-4" maxWidth="lg">
                <Grid
                  style={{ borderRight: "1px solid #357945", paddingRight: 20 }}
                  container
                  spacing={2}
                  justifyContent="center"
                >
                  {movieList.items?.map((movie, index) => {
                    return (
                      <Grid
                        justifyContent="center"
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={index}
                    
                      >
                        <NavLink
                          style={{ textDecoration: "none" }}
                          to={"/detail/" + movie.maPhim}
                        >
                          <Film movie={movie} />
                        </NavLink>
                      </Grid>
                    );
                  })}
                </Grid>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className={classes.pagination}
                >
                  <Pagination
                    count={count}
                    page={pagination}
                    onChange={handlePagination}
                  />
                </div>
              </Container>
            </Grid>
            <Grid className={classes.scroll} item md={3}>
              <ScrollBar movieList={movieList} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
