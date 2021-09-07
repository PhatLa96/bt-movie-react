import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieInfoAction } from "../../redux/actions/MovieListAction";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import moment from "moment";
import { Container, Grid, Button } from "@material-ui/core";
import "../../assets/style.css";
import { Rating } from "@material-ui/lab";
import Layout from "../../HOC/Layout";
import { useHistory } from "react-router";
export default function Detail(props) {
  const { filmDetail } = useSelector((state) => state.MovieListReducer);
  const { movieList } = useSelector((state) => state.MovieListReducer);
  const history = useHistory();
  console.log(filmDetail);
  const dispatch = useDispatch();
  console.log(props.history);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(movieInfoAction(id));
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${filmDetail.hinhAnh})`,
          backgroundSize: "100%",
          backgroundPosition: "cener",
          backgroundRepeat: "no-repeat",
          marginTop: "70px",
        }}
      >
        <CustomCard
          style={{
            paddingTop: 150,
            minHeight: "100vh",
            background: `linear-gradient(to top, rgb(10, 32, 41), transparent 100%)`,
          }}
          effectColor="#000"
          color="#000"
          blur={10}
        >
          <Container maxWidth="md" className="text-white">
            <Grid container>
              <Grid
                item
                xs={12}
                md={8}
                justifyContent="center"
                className="text-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={filmDetail.hinhAnh}
                    alt="123"
                    style={{ width: 250, height: 300 }}
                    onError={(e) =>
                      (e.target.src = "https://picsum.photos/id/237/200/300")
                    }
                  />
                  <div className="ml-4 text-left">
                    <p className="text-sm">
                      Ngày chiếu:{" "}
                      {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                    </p>
                    <h2 className="text-white">{filmDetail.tenPhim}</h2>
                    <p> {filmDetail.moTa?.substr(0, 100) + "..."}</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <h1
                  style={{
                    marginLeft: "27%",
                    color: "yellow",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Đánh giá
                </h1>
                <h1
                  style={{ marginLeft: "15%" }}
                  className="text-green-400 text-2xl"
                >
                  <Rating name="size-large" defaultValue={5} size="large" />
                </h1>
                <div className={`c100 p100} big `}>
                  <span className="text-white">100%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </CustomCard>
      </div>
    </Layout>
  );
}
