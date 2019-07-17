import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import budgetReducer from "./ducks/budgetReducer.js";
import userReducer from "./ducks/userReducer.js";

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));