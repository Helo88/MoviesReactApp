import { 
  regFormNameValue,
  regFormUserNameValue,
  regFormEmailValue,
  regFormPasswordValue,
  regFormCofirmPasswordValue
} from "../../actionsTypes/allActions";

const INITIAL_STATE = {
  nameValue: "",
  emailValue: "",
  userNameValue: "",
  passwordValue: "",
  confirmPasswordValue: "",
  }

  export function setRegFormInputValue(state = INITIAL_STATE, action) {
    switch (action.type) {
      case regFormNameValue:
        // state.lang = action.payload xxxxx
        return {
          ...state,
          nameValue:action.payload,
        }; 
        case regFormUserNameValue:
          // state.lang = action.payload xxxxx
          return {
            ...state,
            userNameValue:action.payload,
          };
        case regFormEmailValue:
        // state.lang = action.payload xxxxx
        return {
          ...state,
          emailValue:action.payload,
        }; 
        case  regFormPasswordValue:
        // state.lang = action.payload xxxxx
        return {
          ...state,
          passwordValue:action.payload,
        }; 
        case  regFormCofirmPasswordValue:
          // state.lang = action.payload xxxxx
          return {
            ...state,
            confirmPasswordValue:action.payload,
          }
        
      default:
        return state;
    }
  }