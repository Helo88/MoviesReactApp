import { upCounter ,downCounter,favMovies ,remMovies } from "../../actionsTypes/allActions";

const INITIAL_STATE = []



  export function changeFavoritesMovies(state = INITIAL_STATE, action) {
    switch (action.type) {
      case favMovies:
        console.log("add fired")
        // state.lang = action.payload xxxxx
        return [...state,action.payload] 
     case remMovies:
       return state.filter((movie)=>{return movie.id!=action.payload.id})
      default:
        return state;
    }
  }
  