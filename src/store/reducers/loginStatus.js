
import { authenticationStatus } from "../../actionsTypes/allActions";

const INITIAL_STATE = {
    isAuthenticaited:false
  }

  export function changeAuthenticationStatus(state = INITIAL_STATE, action) {
    switch (action.type) {
      case authenticationStatus:
        // state.lang = action.payload xxxxx
        return {
          ...state,
          isAuthenticaited:action.payload,
        }; 
        
      default:
        console.log("default firs",state)
        return state;
    }
  }
  