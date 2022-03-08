import {
  regFormNameErr,
  regFormUserNameErr,
  regFormEmailErr,
  regFormPasswordErr,
  regFormCofirmPasswordErr,
} from "../../actionsTypes/allActions";

const INITIAL_STATE = {

};

export function changeRegErrors(state = INITIAL_STATE, action) {
  switch (action.type) {
    case regFormNameErr:
      // state.lang = action.payload xxxxx
      return {
        ...state,
        nameErr:  action.payload,
      };
    case regFormUserNameErr:
      return {
        ...state,
        userNameErr: action.payload,
      };
    case regFormEmailErr:
      return {
        ...state,
        emailErr:action.payload,
      };
    case regFormPasswordErr:
      return {
        ...state,
        passwordErr: action.payload
      };
    case regFormCofirmPasswordErr:
      return {
        ...state,
        confirmPasswordErr:action.payload
      };

    default:
      return state;
  }
}
