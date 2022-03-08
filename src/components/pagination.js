import { Link } from "react-router-dom";

function Pagination(props) {
  const numberOfPages = [];
  for (let i = 1; i <= Math.ceil(props.allMovies / props.moviesPerPage); i++) {
    numberOfPages.push(i);
  }
  //console.log("hello from pagination");
  //console.log(JSON.stringify(props)+props.allMovies);

  return (
    <nav className="mx-auto" style={{marginTop:"-20px",width
    :"fit-content"}}>
      <ul className="pagination  text-center" >
        {numberOfPages.map((page, i) => {
          return (
            <li key={i} className="page-item" >
              <Link className="page-link" to={props.navigate} 
              onClick={()=>{props.PaginationPage(page)}}
              style={{color:"red"}}>{page}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
