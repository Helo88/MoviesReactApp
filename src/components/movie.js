import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  upCounter,
  downCounter,
  favMovies,
  remMovies,
} from "../actionsTypes/allActions";
function Movie(props) {
  const history = useHistory();
  const [starState, setStarState] = useState(false);
  const favCounts = useSelector((state) => state.favorites.counts);
  const favArr = useSelector((state) => state.myfavMovies);
  const appLang = useSelector((state) => state.currentLang.lang);
  const isUserAuthenticated=useSelector((state)=>state.authenticationReducer.isAuthenticaited)
  const dispatch = useDispatch();

  // console.log("my pe "+props.isItFav)
  useEffect(() => {
    let foundId;
   // console.log("my id id " + props.movie.id);
    for (let i = 0; i < favArr.length; i++) {
      if (props.movie.id == favArr[i].id) {
        foundId = true;
      }
    }
  //  console.log("my find id " + foundId);
    setStarState(foundId > 0 ? true : false);
  }, [favArr]);

  function handleClick(id) {
    history.push(`/movie/${id}`);
  }
  function handleFav() {
    console.log("favCounts", favArr);
    setStarState(!starState);
    // state isn't fast enough to put this condition on so count on previous on
    dispatch({
      type: starState ? downCounter : upCounter,
      payload: 1,
    });
    dispatch({
      type: starState ? remMovies : favMovies,
      payload: props.movie,
    });
  }

  return (
    <>
      <li
        key={props.index}
        className={`bg-dark text-danger col-12 col-md-4 mb-3 overflow-hidden  card`}
        style={{ height: "400px" }}
      >  
          <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          className="card-img-top"
          style={{ height: "80%", width: "100%" }}
          onClick={() => {
            console.log("clicked");
            handleClick(props.movie.id);
          }}
        />
      <div className="card-body  position-relative d-flex flex-row justify-content-between">
        <h6 className="card-title  d-inline">
        {appLang =="en"?props.movie.original_title:props.movie.title}
    
        </h6>
        <i
          className={`bi bi-star-fill  
          ${
            starState ? "text-warning" : "text-light"
          }
          ${isUserAuthenticated ?"d-inline":"d-none"}
          `}
          onClick={handleFav}
          // style={{marginLeft:"80%",marginBottom:"100px",right:"10px",top:"15px"}}
        ></i>
        </div>
      </li>
    </>
  );
}
export default Movie;
