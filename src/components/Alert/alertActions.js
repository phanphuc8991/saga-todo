import * as types from "./alertActionTypes";

export const alertShow = (alert) => ({
  type: types.ALERT_SHOW,
  payload: alert,
});
export const alertHidden = (alert) => ({
  type: types.ALERT_HIDDEN,
  payload: alert,
});
