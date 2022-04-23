import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, compose, applyMiddleware } from "redux";

import sagas from "../sagas";
import { storeConfig } from "./config";
import rootReducer from "./rootReducer";

const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false,
  diff: true,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, loggerMiddleware];

const enhancer = compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(storeConfig, rootReducer);
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store, {});

sagaMiddleware.run(sagas);

const reduxStore = () => ({ store, persistor });

export default reduxStore;
