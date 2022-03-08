import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../network/api";
import {useDispatch,useSelector} from'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function MovieDetails({ }) {
  const { t } = useTranslation()
  const [moviesD, setMoviesD] = useState([]);
  const appLang = useSelector((state) => state.currentLang.lang);
  // get id directly from url
  let { id } = useParams();
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  useEffect(() => {
    axiosInstance
      .get(`3/movie/${id}`, {
        params: {
          // api_key: "21ddddf500f95cd948a2fcf4e257d88d",
        },
      })
      .then((res) => setMoviesD(res.data))
      .catch((err) => console.log(err));
  }, [appLang]);

  return (
    <div className="container ">
     
     <div className="card img-fluid bg-dark text-danger ">
     <img className="card-img-top mx-auto" 
     src={`https://image.tmdb.org/t/p/w500/${moviesD.poster_path}`} 
     style={{width:"45%",height:"350px"}}
     />
      <div className="card-header">{t("Movie Name.1")} : {appLang =="en"? moviesD.original_title:moviesD.title}</div>
      <div className="card-header">{t("Release Date.1")} : {appLang =="en"? moviesD.release_date:t("none.1")}</div>
    <div className="card-body"> {t("Overview.1")} : {moviesD.overview}</div> 
    <div className="card-footer">{t("Vote Average.1")} : {appLang =="en"?moviesD.vote_average:t("none.1")}</div>



     </div>
      
    </div>
  );
}

export default MovieDetails;
