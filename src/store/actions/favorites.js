import { downCounter, upCounter } from "../../actionsTypes/favorites";

export const increaseFavCounter = (payload) => {
    return {
      type: upCounter,
      payload ,
    };
  };

  export const decreaseFavCounter = (payload) => {
    return {
      type: downCounter,
      payload ,
    };
  };