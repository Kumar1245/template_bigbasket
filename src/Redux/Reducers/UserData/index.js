import { STATE } from "../../ActionType/State";
import { USER_DATA } from "../../ActionType/UserData";

export const userData = (userData = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DATA:
      return payload;
    default:
      return userData;
  }
};
