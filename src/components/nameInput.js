import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
regFormNameErr,
regFormUserNameErr,
regFormNameValue,
regFormUserNameValue
} from "../actionsTypes/allActions";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function NameInput(props) {
  const { t } = useTranslation()
  let selectInput=props.placeHolder==="userName"?1:0;
  const [ name, setName] = useState("");
  const [ nameErr, setNameErr] = useState(null);
  const dispatch = useDispatch()

  function handleChange(e,selector) {
  
    setName(e.target.value);
    // name errors
      e.target.value.length === 0
      ? setNameErr("This Field is required")
      : e.target.value.length < 4
      ? setNameErr("This Field can't be less than 4 characters")
      : setNameErr(null);
      // username errors
      if(selector===1){
        e.target.value.length === 0
        ? setNameErr("This Field is required")
        : e.target.value.length < 4
        ? setNameErr("This Field can't be less than 4 characters")
        : /\s/g.test(e.target.value)
        ? setNameErr("User Name can't contain white spaces")
        : setNameErr(null);
  
       }
  }

  useEffect(()=>{
    // here errors are  updated 
    dispatch({
      type: selectInput==0 ?regFormNameErr:regFormUserNameErr,
      payload :nameErr
    })
  },[nameErr])
  
  useEffect(()=>{
    // here errors are  updated 
    dispatch({
      type: selectInput==0 ?regFormNameValue:regFormUserNameValue,
      payload :name
    })
  },[name])

  return (
    <div className="nameField my-2  position-relative">
      <input
        type="text"
        className={`form-control col-12 col-md-5 border-1  
            ${ nameErr ? "border-danger" : "border-dark"}
            `}
        placeholder={props.placeHolder==="userName"?`${t("Enter Your UserName.1")}`:`${t("Enter Your Name.1")}`}
        name="name"
        value={name}
        onChange={(e) => {
          handleChange(e,selectInput);
        }}
        id="nameInputEmail1"
        aria-describedby="nameHelp"
      />
        {/* <div>
          <small className="text-danger">{nameErr}</small>
        </div> */}
    </div>
  );
}
export default NameInput;
