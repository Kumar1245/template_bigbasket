import { STATE } from "../../ActionType/State";

export const state = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case STATE:
      return payload;
    default:
      return state;
  }
};
