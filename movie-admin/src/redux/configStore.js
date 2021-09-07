import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./reducers/LoginReducer";
import UserReducer from "./reducers/UserReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    UserReducer,
    LoginReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store