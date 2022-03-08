import { useState ,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
import {
  regFormEmailErr,
  regFormPasswordErr,
  authenticationStatus
} from "../actionsTypes/allActions";
function LoginForm() {
  const [loginStatus,setLoginStatus]=useState("")
  const { t } = useTranslation()
  const history = useHistory();
  const errObj = useSelector((state) => state.regErrorsReducer);
  const inputValues=useSelector((state)=>state.inputFieldValueReducer);
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const formSubmit = (e) => {
    e.preventDefault();
  
  if (inputValues.emailValue.length===0){
    dispatch({
      type:regFormEmailErr,
      payload :"this field can't be Empty"
    })
  }
  if (inputValues.passwordValue.length===0){
    dispatch({
      type:regFormPasswordErr,
      payload :"this field can't be Empty"
    })
  }
  //  console.log(cookies.get('myCat')); // Pacman
  
 
  else if  ( errObj.emailErr===null &&  errObj.passwordErr===null )
  {    
    console.log(cookies.get(inputValues.emailValue)); // Pacman
    if(cookies.get(inputValues.emailValue)==inputValues.passwordValue){
      dispatch({
        type:authenticationStatus,
        payload :true
      })
      history.push("/")
    }
    else {
      setLoginStatus("email or password is wrong")
    }
  }
  }
  return (
    <div className="col-12 col-md-5 p-3 mt-5 mx-auto">
      <h2 className="mt-1 mb-1  text-danger text-center"> {t("Login Form.1")}</h2>
      <form
        onSubmit={(e) => {
          //  console.log(sendMailToParent());
          formSubmit(e);
          
        }}
        className=" my-4  p-3">
        <EmailInput  />
        <div>
          <small className="text-danger">{errObj.emailErr}</small>
        </div>
        <PasswordInput placeHolder="password" s />
        <div>
          <small className="text-danger">{errObj.passwordErr}</small>
        </div>
        <p className="text-danger">{loginStatus}</p>
        <button type="submit" className="btn btn-danger text-center my-4 ms-5">
         {t("Login In.1")}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
