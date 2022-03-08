import { useState ,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmailInput from "../components/emailInput";
import NameInput from "../components/nameInput";
import PasswordInput from "../components/passwordInput";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';

import {
  upCounter,
  downCounter,
  favMovies,
  remMovies,
  regFormNameErr,
  regFormUserNameErr,
  regFormEmailErr,
  regFormPasswordErr,
  regFormCofirmPasswordErr,
  inputFieldLength,
} from "../actionsTypes/allActions";

function RegisterForm() {
  const { t }=useTranslation();
  const history = useHistory();
  const errObj = useSelector((state) => state.regErrorsReducer);
  const inputValues=useSelector((state)=>state.inputFieldValueReducer);
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(errObj))
    console.log(JSON.stringify(inputValues)) 
    if (inputValues.nameValue.length===0){
      dispatch({
        type: regFormNameErr,
        payload :"this field can't be Empty"
      })
    }
   if (inputValues.userNameValue.length===0){
      dispatch({
        type: regFormUserNameErr,
        payload :"this field can't be Empty"
      })
    }
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
    if (inputValues.confirmPasswordValue.length===0){
      dispatch({
        type:regFormCofirmPasswordErr,
        payload :"this field can't be Empty"
      })
    }

    else if  (errObj.nameErr===null && errObj.emailErr===null && errObj.userNameErr===null
      && errObj.passwordErr===null && errObj.confirmPasswordErr===null
    )
    {
      if(inputValues.passwordValue==inputValues.confirmPasswordValue){
      console.log("no errors")
      // put userName and password in cookie locaolly
      cookies.set(inputValues.emailValue,inputValues.passwordValue, { path: '/' });
      // reducer set user to registered 
      
      // push to home 
      history.push("/login");
      }
      else {
      console.log ("passwords are n't Identiacl")
      alert("Passwords are not identical")
      }
    }
    else {

    }
  };

  

  return (
    <div className="col-12 col-md-5 offset-0 offset-md-1 mx-auto ">
      <h2 className="mt-5 mb-0  text-danger text-center"> {t("Register Form.1")}</h2>
      <form
        onSubmit={(e) => {
          //  console.log(sendMailToParent());
          formSubmit(e);
        }}
        className=" my-4  p-3">
           {/* *************************Name********************************** */}
        <NameInput placeHolder="name"  />
        <div>
          <small className="text-danger">{errObj.nameErr}</small>
        </div>
        {/* ***************************Email******************************** */}
        <EmailInput  />
        <div>
          <small className="text-danger">{errObj.emailErr}</small>
        </div>
         {/* **************************user Name********************************* */}
        <NameInput placeHolder="userName" />
        <div>
          <small className="text-danger">{errObj.userNameErr}</small>
        </div>
         {/* ***************************Password******************************** */}
        <PasswordInput placeHolder="password"  />
        <div>
          <small className="text-danger">{errObj.passwordErr}</small>
        </div>
        {/* ****************************Confirm Password***************************************** */}
        <PasswordInput placeHolder="confirmPassword" />
        <div>
          <small className="text-danger">{errObj.confirmPasswordErr}</small>
        </div>
        {/* **************************Submit Password********************************* */}
        <button type="submit" className="btn btn-danger text-center my-4 mx-auto">
          {t("Submit.1")}
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
