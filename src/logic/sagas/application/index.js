import { put, takeLatest, select } from "redux-saga/effects";

import { Types as RootTypes } from "../../redux/rootReducer";
import { Types as ApplicationTypes } from "../../reducers/application";

export const persisted = function* () {
  const { currentUser } = yield select((state) => state.application);
  console.log(currentUser);
};

export const resetStore = function* () {
  yield put({ type: RootTypes.RESET });
};

const applicationSagas = [
  takeLatest(ApplicationTypes.PERSISTED, persisted),
  takeLatest(ApplicationTypes.RESET_STORE, resetStore),
];

export default applicationSagas;
