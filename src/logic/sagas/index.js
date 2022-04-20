import { all } from "redux-saga/effects";

import applicationSagas from "./application";
import dataSagas from "./data";

export default function* root() {
  yield all([...applicationSagas, ...dataSagas]);
}
