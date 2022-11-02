import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="#">Motivity</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
                 </button>
  
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                 <Link to="/Sample" className="nav-link">sample</Link>
                  </li>
                   <li class="nav-item">
                   <Link to="/Hocks" className="nav-link">Hocks</Link>
                  </li>
     
      
    </ul>
   
  </div>
</nav>
        </div>
    )

}
export default Nav;



