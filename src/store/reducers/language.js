import { switchLang } from "../../actionsTypes/allActions";

const INITIAL_STATE = {
    lang:"en"
  }

  export function changeLang(state = INITIAL_STATE, action) {
    switch (action.type) {
      case switchLang:
        // state.lang = action.payload xxxxx
        return {
          ...state,
          lang:action.payload,
        }; 
        
      default:
        console.log("default firs",state)
        return state;
    }
  }
  