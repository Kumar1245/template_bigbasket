import { USER_DATA } from "../../ActionType/UserData";

export const setUserData = (payload) => {
  return {
    type: USER_DATA,
    payload,
  };
};
