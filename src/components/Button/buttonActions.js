import * as types from "./buttonActionTypes";

export const loadingStart = (loading) => ({
  type: types.LOADING_START,
  payload: loading,
});
export const loadingEnd = (loading) => ({
  type: types.LOADING_END,
  payload: loading,
});
