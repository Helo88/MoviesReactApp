import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams ,useHistory } from "react-router-dom";
import  {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import NavItem from "./navItem";
import { switchLang, authenticationStatus } from "../actionsTypes/allActions";

function NavBar() {
  // what is wriiten in search to reflecct
  const [searchMo, setSearchMo] = useState("");
  const [lang, setLang] = useState("en");
  const history=useHistory()
  // navBar Items
  const navItems=[
              {title:"Register",link:"/register"},
              {title:"Login",link:"/login"},
              {title:"Favourites",link:"/fav"}];
  //  fav Counter
  const favCounts = useSelector((state) => state.favorites.counts);
  const currentLang=useSelector((state)=>state.currentLang.lang);
  const isUserAuthenticated=useSelector((state)=>state.authenticationReducer.isAuthenticaited)
  console.log("intial store lang ", currentLang ,"state lang ",lang)
  const dispatch=useDispatch()  
  //translation
  const { t } = useTranslation()
  // ////////////////////////
  const [activeState ,setActiveState]=useState(false);

  const handleClick=()=>{
    setActiveState((activeState)=>!activeState)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {t('Movies.1')}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
              {/* {navItems.map((item,i)=>{
                return (
                     <NavItem key={item.title} title={t(`${item.title}.1`)} link={item.link}/>
                )
              })} */}


       <li  className="nav-item">
         <Link className={`nav-link
          ${activeState?"active":""}
          ${isUserAuthenticated ?"d-none":"d-block"}
          `}
         to='./register'
         onClick={handleClick}
         onBlur={()=>{setActiveState(false)}}
         >
         {t("Register.1")}
         </Link>
        </li>

        <li  className="nav-item">
         <Link className={`nav-link 
         ${activeState?"active":""}
         ${isUserAuthenticated ?"d-none":"d-block"}
         `}
         to="./login"
         onClick={handleClick}
         onBlur={()=>{setActiveState(false)}}
         >
         {t("Login.1")}
         </Link>
        </li>

        <li  className="nav-item">
         <Link className={`nav-link 
         ${activeState?"active":""}
         ${isUserAuthenticated ?"d-block":"d-none"}
         `}
         to="/"
         onClick={ ()=>{
          dispatch({
              type:authenticationStatus,
              payload:false
          })
          //  history.push("/register")

         }}
         onBlur={()=>{setActiveState(false)}}
         >
         {t("Logout.1")}
         </Link>
        </li>

        <li  className="nav-item">
         <Link className={`nav-link 
         ${activeState?"active":""}
         ${isUserAuthenticated ?"d-block":"d-none"}
         `}
         to="./fav"
         onClick={handleClick}
         onBlur={()=>{setActiveState(false)}}
         >
         {t("Favourites.1")}
         </Link>
        </li>

              
            </ul>
            <form className="d-flex me-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder={t("Search.1")}
                aria-label="Search"
                value={searchMo}
                onChange={(e) => {
                  setSearchMo(e.target.value);
                }}
              />
              <Link
                className="nav-link text-danger"
                to={`/movie?name=${searchMo}`}
              >
               {t('Search.1')}
              </Link>
            </form>
            <div className="me-4">
            <i className={`bi bi-star-fill text-warning me-2
             ${isUserAuthenticated ?"d-inline":"d-none"}
            `}></i>
            <sub>{isUserAuthenticated ? favCounts : ""}</sub>
            </div>
            <button className="btn btn-outline-danger"
            
            onClick={()=>{
              setLang(lang=="en"?"ar":"en")
              dispatch({
                type: switchLang,
                payload:lang=="en"?"ar":"en"

              });
              i18next.changeLanguage(lang=="en"?"ar":"en")
               console.log("lang is ",lang ,"store lang ",currentLang)
            }}
            >{lang=="en"?"english":`${t('arabic.1')}`}</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
