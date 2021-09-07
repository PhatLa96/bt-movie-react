import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import ManagerTheater from "./reducers/ManagerTheater";
import MovieListReducer from "./reducers/MovieListReducer";
import UserReducer from "./reducers/UserReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    MovieListReducer,
    UserReducer,
    CarouselReducer,
    ManagerTheater

});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store