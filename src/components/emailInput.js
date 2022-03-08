import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {regFormEmailErr,regFormEmailValue} from "../actionsTypes/allActions";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


function EmailInput (props){
const { t } = useTranslation()
const [email,setEmail]=useState("")
const [emailErr,setEmailErr]=useState(null)
const dispatch = useDispatch();
 
function handleChange(e){
    setEmail(e.target.value);   
}

function viewError(e){
  e.target.value.length === 0
  ? setEmailErr("This Field is required")
  :/^[a-zA-Z]+(([0-9]*)|([_.-]*[a-zA-Z0-9]*))*@{1}[a-zA-Z]+([.]*[a-zA-Z]*)*[._-](com|edu|net)$/gm.test(e.target.value) 
  ? setEmailErr(null)
  : setEmailErr("wrong format") 
  // state outside will be updated
  console.log("emailErr  "+emailErr +"----text "+e.target.value)
}
// here updated
console.log("email outside  "+emailErr +"----")

useEffect(()=>{
  // here also updated 
  dispatch({
    type: regFormEmailErr,
    payload: emailErr
  })
},[emailErr])

useEffect(()=>{
  // here also updated 
  dispatch({
    type: regFormEmailValue,
    payload: email
  })
},[email])




    return (
        <>
        <input
            type="email"
            
            className={`form-control col-12 col-md-5 my-2 border-1
            ${emailErr ? "border-danger" : "border-dark"}
            `}
            placeholder={`${t("Enter Your Email.1")}`}
            name="username"
            value={email}
            onChange={(e) => {handleChange(e);
              viewError(e)
              }}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          
          />
      
        {/* <div>
          <small className="text-danger">{emailErr}</small>
        </div> */}
        </>
        
    )
}
export default EmailInput;