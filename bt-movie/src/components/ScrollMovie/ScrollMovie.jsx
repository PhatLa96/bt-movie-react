import { Box,Button } from "@material-ui/core";
import moment from "moment";
import React, { Fragment } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useHistory } from "react-router-dom";

const ScrollBar = ({ movieList }) => {
  console.log(movieList);
  const history = useHistory();
  return (
    <Fragment>
      <h3 className="text-warning">Top Trending</h3>
      <Scrollbars
        style={{ width: 350, height: 700 }}
        renderThumbHorizontal={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: "white",
              right: "2px",
              bottom: "2px",
              top: "2px",
              borderRadius: "3px",
              width: "5px",
            }}
          />
        )}
      >
        {movieList.items?.slice(0, 8)?.map((film) => {
          return (
            <Button
              onClick={() => history.push(`/detail/${film.maPhim}`)}
              key={film.maPhim}
            >
              <img
                src={film.hinhAnh}
                alt={film.maPhim}
                style={{width:100,minHeight:130,marginRight:15,borderRadius:5}}
                onError={(e) =>
                  (e.target.src =
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYpN-X9CnFt_KpEJXpGHKtnjWycsYeV9rvg&usqp=CAU")
                }
              />
              <div className="text-white">
                <h8>{film.tenPhim}</h8>
                <p>{moment(film.ngayKhoiChieu).format("DD/MM/YY-HH:MM:SS")}</p>
              </div>
            </Button>
          );
        })}
      </Scrollbars>
    </Fragment>
  );
};

export default ScrollBar;
