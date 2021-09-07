import { actionTypes } from "../types";

let admin = {};
const logged = localStorage.getItem("login");
if (logged) {
  admin = JSON.parse(logged);
}

const initialState = {
  adminLogin: admin,
};

export const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOG_IN: {
      state.adminLogin = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
