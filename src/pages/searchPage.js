import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch,useSelector} from'react-redux';
import { axiosInstance } from "../network/api";
import { useParams, useHistory, useLocation } from "react-router-dom";
import Movie from "../components/movie";
import Movies from "../components/movies";
import Pagination from "../components/pagination";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function SearchPage() {
  const { t } = useTranslation()
  const [moviesRes, setMoviesRes] = useState([]);
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get("name");
  const appLang = useSelector((state) => state.currentLang.lang);
  const [currentPage,setCurrentPage]=useState(1);
  const [moviesPerPage,setMoviesPerPage]=useState(6)

   
  function handleClick() {
    history.goBack();
  }

  useEffect(() => {
    const searchMovies= ()=>
{       axiosInstance
       .get("3/search/movie", {
         params: {
           api_key:"21ddddf500f95cd948a2fcf4e257d8",
          //  language:contextLang,
           query: name,
         },
       })
       .then((data)=>{setMoviesRes([...data.data.results]);
         return data.results
     })
       .then((data)=>{console.log(data.data.results)})
       .catch((err) => console.log(err));
    }
    searchMovies()
 }, [name,appLang]);

  // pagination section ***************************************************************************//
  const indexOflastMovie=currentPage*moviesPerPage;
  const indexOfFirstMovie=indexOflastMovie-moviesPerPage;
  const pageMovies=moviesRes.slice(indexOfFirstMovie,indexOflastMovie);

  function setPaginationPage(pageNum){
       setCurrentPage(pageNum)
  }
  // ***********************************************************************//
  return (
    <div className="container">
      <button
        className="btn btn-outline-danger bg-dark text-light my-3"
        onClick={handleClick}
      >
       {t("back to movies.1")}
      </button>

      <ul className="row overflow-hidden">
     
        {
          <Movies movies={pageMovies} />
        }
          </ul>
         <Pagination navigate="/movie"  allMovies={moviesRes.length} moviesPerPage={moviesPerPage} PaginationPage={setPaginationPage}/>
    </div>
  );
}

export default SearchPage;
