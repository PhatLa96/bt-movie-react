import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import createAction from "../../redux/actions";
import { actionTypes } from "../../redux/types";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  appbar: {
    backgroundColor: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
// const MODE = {
//   LOGIN: "login",
//   REGISTER: "register",
// };
function Header() {
  const classes = useStyles();

  // const [mode, setMode] = useState(MODE.LOGIN);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { Users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleLogoutClick = () => {
    dispatch(createAction(actionTypes.USER_LOGOUT));
    history.push("/");
    window.location.reload();
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <NavLink to="/">
            <img
              src="https://moveek.com/bundles/ornweb/img/logo.png"
              alt="cyberlearn"
              style={{width:70,height:70}}
            />
          </NavLink>
          <Typography variant="h6" className={classes.title}></Typography>
          {Users ? (
            <>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="primary"
              >
                <Typography className="mr-2">{Users.hoTen}</Typography>
                <AccountBoxIcon />
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <Button onClick={handleOpen2} color="inherit">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button onClick={handleOpen} color="inherit">
                  Register
                </Button>
              </NavLink>
            </>
          )}

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <NavLink to="/profile">
              <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
            </NavLink>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableBackdropClick
      >
        <Register closeModal={handleClose} /> */}
      {/* <Fragment>
          {mode === MODE.REGISTER && (
            <>
              <Register closeModal={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeModal={handleClose} />
              <Box textAlign="center">
                <Button
               
                  color="inherit"
                  onClick={() => setMode(MODE.REGISTER)}
                >
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </Fragment> */}
      {/* </Modal> */}
      {/* <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableBackdropClick
      >
        <Login closeModal2={handleClose2} />
      </Modal> */}
    </div>
  );
}
export default memo(Header);
