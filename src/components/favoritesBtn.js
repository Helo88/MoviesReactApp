import React from "react";
import { increaseFavCounter } from "../store/actions/favorites";

export default function ChangeLanguage() {
  const language = useSelector((state) => state.langugae.lang);
  const dispatch = useDispatch();

  const toggleFavorites = () => {
    // CALL SET LANGUAGE ACTION
    dispatch(setLanguage(language === "ar" ? "en" : "ar"));
    // alternate syntax
    // dispatch({
    //   type : "SET_LANGUAGE",
    //   payload : language === "ar" ? "en" : "ar"
    // });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => changeLanguage()}>
        {language}
      </button>
    </div>
  );
}