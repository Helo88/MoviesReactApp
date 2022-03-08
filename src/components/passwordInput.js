import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


import {
regFormPasswordErr,
regFormCofirmPasswordErr,
regFormPasswordValue,
regFormCofirmPasswordValue
} from "../actionsTypes/allActions";

// import "../style/password.css"
function PasswordInput(props) {
  const { t } = useTranslation()
  let selectInput=props.placeHolder==="password"?0:1;
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(null);
  const [hiddenPass, setHiddenPass] = useState("true");
  const currentLang=useSelector((state)=>state.currentLang.lang);
  const dispatch = useDispatch()

  function handleChange(e) {
    setPassword(e.target.value);
    e.target.value.length === 0
      ? setPasswordErr("This Field is required")
      : e.target.value.length < 8
      ? setPasswordErr("password can't be less than 8")
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(e.target.value)
      ? setPasswordErr(
          "password must start by a letter and only letters, numbers and those @$!%*?& are allowed"
        )
      : setPasswordErr(null);
  }
  useEffect(()=>{
    // here alsp updated 
    dispatch({
      type: selectInput==0 ?regFormPasswordErr:regFormCofirmPasswordErr,
      payload :passwordErr
    })
  },[passwordErr])

  useEffect(()=>{
    // here alsp updated 
    dispatch({
      type: selectInput==0 ?regFormPasswordValue:regFormCofirmPasswordValue,
      payload :password
    })
  },[password])
  
  return (
    <>
    <div className="passwordField my-2  d-flex flex-row">
      <input
        type={hiddenPass?"password":"text"}
        className={`form-control col-12 col-md-5 border-1  
            ${passwordErr ? "border-danger" : "border-dark"}
            `}
        placeholder={props.placeHolder=="password"?`${t("Enter Your Password.1")}`:`${t("Confirm Password.1")}`}
        name="password"
        value={password}
        onChange={(e) => {  
          handleChange(e);
        }}
        id="passwordInputEmail1"
        aria-describedby="passwordHelp"
      />
    
        <i className="bi bi-eye-slash  my-3 "
            onClick={() => {
                setHiddenPass((value) => !value);
                console.log("hidee  " + hiddenPass);
              }}
               style={{marginLeft:currentLang=="en"?"-50px":"0px",
               marginRight:currentLang=="en"?"0px":"-50px",
              }}
        ></i>
      
    </div>
    {/* <div>
      <small className="text-danger">{passwordErr}</small>
      </div> */}
    </>
  );
}
export default PasswordInput;
