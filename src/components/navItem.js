import {useState} from 'react';
import { Link } from 'react-router-dom';
function NavItem (props){

 const [activeState ,setActiveState]=useState(false);

   const handleClick=()=>{
     setActiveState((activeState)=>!activeState)
   }
    return (
        <li  key={props.title} className="nav-item">
         <Link className={`nav-link ${activeState?"active":""}`}
         to={props.link}
         onClick={handleClick}
         onBlur={()=>{setActiveState(false)}}
         >
         {props.title}
         </Link>
        </li>
    );
}
export  default NavItem;

{/* <li className="nav-item">
<Link
  className="nav-link active"
  aria-current="page"
  to="/login"
>
  Favourites
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" aria-current="page" to="/login">
  Login
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/register">
  Register
</Link>
</li> */}