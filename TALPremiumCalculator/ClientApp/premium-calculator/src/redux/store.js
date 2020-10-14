import { createStore, applyMiddleware } from "redux";
import reducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
