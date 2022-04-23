import { createActions, createReducer } from "reduxsauce";

import { updateProps } from "../../reducers/shared";

export const { Types, Creators } = createActions(
  {
    persisted: null,
    resetStore: null,
    updateProps: ["props"],
  },
  { prefix: "application/" }
);

export const initialState = {
  currentUser: { isLogged: false },
  parkings: [],
  parking: {},
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
});
