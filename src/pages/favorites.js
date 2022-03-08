import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Movies from "../components/movies";
import Pagination from "../components/pagination";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function FavoritesMovies() {
  const favArr = useSelector((state) => state.myfavMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const history = useHistory();
  const { t } = useTranslation()
  
  function handleClick() {
    history.push("/");
  }

  // pagination section ***************************************************************************//
  const indexOflastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOflastMovie - moviesPerPage;
  const pageMovies = favArr.slice(indexOfFirstMovie, indexOflastMovie);

  function setPaginationPage(pageNum) {
    setCurrentPage(pageNum);
  }
  // ***********************************************************************//
  return (
    <div className="container vh-100">
      <button
        className="btn btn-outline-danger bg-dark text-light my-3"
        onClick={handleClick}
      >
         {t("back to movies.1")}
      </button>

      <div className="row overflow-hidden">
        {<Movies movies={pageMovies} />}
      </div>
      <Pagination
        navigate="/movie"
        allMovies={favArr.length}
        moviesPerPage={moviesPerPage}
        PaginationPage={setPaginationPage}
      />
    </div>
  );
}

export default FavoritesMovies;
