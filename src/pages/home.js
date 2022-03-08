
import {useEffect ,useState} from 'react'
import Movie from "../components/movie";
import Movies from '../components/movies';
import Pagination from '../components/pagination';
import { axiosInstance } from '../network/api';
import {useDispatch,useSelector} from'react-redux';

function Home (){
    const [movies, setMovies] = useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [moviesPerPage,setMoviesPerPage]=useState(6)
    const appLang = useSelector((state) => state.currentLang.lang);
 
	
  useEffect(() => {
    const fetchMovies =  () => {
       axiosInstance
        .get("3/movie/popular", {
          params: {
            
          },
        })
       .then((data)=>{setMovies([...data.data.results])
          return data}
        )
          .then((data)=>{console.log(data)})
        .catch((err) => console.log(err));
    };
    fetchMovies();
  }, [appLang]);
    

    const indexOflastMovie=currentPage*moviesPerPage;
    const indexOfFirstMovie=indexOflastMovie-moviesPerPage;
    const pageMovies=movies.slice(indexOfFirstMovie,indexOflastMovie);

    function setPaginationPage(pageNum){
         setCurrentPage(pageNum)
    }

    return(
     <div className='mt-3 h-100 container'>
      <Movies movies={pageMovies}/>
      {/* navigate which route it is in  */}
      <Pagination navigate="/" allMovies={movies.length} moviesPerPage={moviesPerPage} PaginationPage={setPaginationPage} />
        </div>
    );

}

export default Home