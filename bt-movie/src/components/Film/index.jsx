import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./Film_Flip.css";
import { history } from "../../App";
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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
export default function Film(props) {
  const classes = useStyles();
  const { movie } = props;
  return (
    <div className="flip-card mb-5 mr-2" style={{ width: "100%" }}>
      <div className="flip-card-inner" style={{ position: "relative" }}>
        <div
          className="flip-card-front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 10,
          }}
        >
          <img
            src={movie.hinhAnh}
            alt="Avatar"
            style={{ width: "100%", height: 300, borderRadius: 10 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/300/300";
            }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{
            position: "relative",
            backgroundColor: "rgba(0,0,0,.9)",
            width: "100%",
            borderRadius: 10,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.5)",
              width: "100%",
        
            }}
          >
            <img
              src={movie.hinhAnh}
              alt="Avatar"
              style={{ width: "100%", height: 300, borderRadius: 10 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ borderRadius: 5 }}
        className="bg-dark text-center cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold"
      >
        ĐẶT VÉ
      </div>
    </div>
  );
}
