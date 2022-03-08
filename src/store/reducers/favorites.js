import { upCounter ,downCounter } from "../../actionsTypes/allActions";

const INITIAL_STATE = {
    counts:0
  };

//   const upCounter= "INCREASE_COUNTER";
//   const downCounter="DECREASE_COUNTER";

  export function changeFavoritesCounter(state = INITIAL_STATE, action) {
    switch (action.type) {
      case upCounter:
        // state.lang = action.payload xxxxx
        return {
          ...state,
          counts: state.counts+action.payload,
        }; 
        case downCounter :
            return{
                ...state,
                 counts : state.counts > 0 ? state.counts - action.payload : 0
            }
      default:
        return state;
    }
  }
  