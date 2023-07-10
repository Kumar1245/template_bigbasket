import { STATE } from "../../ActionType/State";

export const setState = (payload) => {
  return {
    type: STATE,
    payload,
  };
};
