import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { apiMiddleware } from "./middleware/api";
import { toastMiddleware } from "./middleware/toast";

const sagaMiddleware = createSagaMiddleware();
const allMiddleware = [apiMiddleware, toastMiddleware, sagaMiddleware];

if (import.meta.env.VITE_ENV === "dev") {
  allMiddleware.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...allMiddleware));

// sagaMiddleware.run(rootSaga);

export default store;
