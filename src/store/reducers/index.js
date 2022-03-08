import { combineReducers } from "redux";
import { changeFavoritesMovies } from "./favMovies";
import { changeFavoritesCounter } from "./favorites";
import { setRegFormInputValue } from "./regFormInputFieldValues";
import { changeLang } from "./language";
import { changeRegErrors } from "./regForm";
import { changeAuthenticationStatus } from "./loginStatus";


export default combineReducers({
  
      favorites:changeFavoritesCounter,
      myfavMovies:changeFavoritesMovies,
      currentLang:changeLang,
      regErrorsReducer:changeRegErrors,
      inputFieldValueReducer:setRegFormInputValue,
      authenticationReducer:changeAuthenticationStatus
})