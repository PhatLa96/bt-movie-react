import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { BannerAction } from "../../redux/actions/MovieListAction";

const contentStyle = {
  minHeight: "100%",
  position: "relative",
  backgroundSize: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export default function HomeCarousel(props) {
  const dispatch = useDispatch();
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  useEffect(() => {
    dispatch(BannerAction);
  }, []);

  return (
    <Carousel effect="fade" autoplay>
      {arrImg.map((item, index) => {
        return (
          <div key={index}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${item.hinhAnh})`,
              }}
            >
              <img
                style={{ opacity: 0, width: "100%",height:"750px" }}
                src={item.hinhAnh}
                alt="carousel"
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
