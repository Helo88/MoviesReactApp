import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/loginForm";
import SearchPage from "./pages/searchPage";
import FavoritesMovies from "./pages/favorites";
import {useDispatch,useSelector} from'react-redux';

function App() {
   const appLang = useSelector((state) => state.currentLang.lang)

  return (
    <div className="App container-fluid h-100 bg-dark 
    " style={{direction:appLang=="en"?"ltr":"rtl"}}>
     <Router>
          <NavBar/>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/register"} exact component={RegisterForm} />
            <Route path={"/login"} exact component={LoginForm} />
            <Route path={"/movie/:id"} exact component={MovieDetails} />
            <Route path={"/movie"} exact component={SearchPage} />
            <Route path={"/fav"} exact component={FavoritesMovies} />
            {/* <Route path={"/user/list"} exact component={}/> */}
          </Switch>
          {/* <Footer /> */}
        </Router>
    </div>
  );
  
}

export default App;
