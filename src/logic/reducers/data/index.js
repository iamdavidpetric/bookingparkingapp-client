import { createActions, createReducer } from "reduxsauce";

import { updateProps } from "../../reducers/shared";

export const { Types, Creators } = createActions(
  {
    updateProps: ["props"],
  },
  { prefix: "data/" }
);

export const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
});
