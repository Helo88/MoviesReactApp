import { useHistory } from "react-router-dom";
import Movie from "./movie";
import Pagination from "./pagination";
import { useSelector, useDispatch } from "react-redux";



function Movies(props) {
const favArr = useSelector((state) => state.myfavMovies);
const dispatch = useDispatch();
const history = useHistory();

  return (
    <>   
          <ul className="row me-4 ">
             
              {props.movies.map((movie ,index)=>{
                  return(
           
                    <Movie key={movie.id} index={index} movie={movie}  />
                  )
              })
            }
            
          </ul>
    </>
  );
}
export default Movies;
