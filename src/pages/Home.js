import React from 'react';
import './Home.css';
import Search from './Search';
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import FaceIcon from '@material-ui/icons/Face';



function Home(){
    return (
       <div className = 'home'>
         {/*the header links*/}
         <div className = 'homeHeader'>
            <div className = 'headerLeft'> 
            <Link to= "about"> About </Link>
            <Link to= "store"> Store </Link>

             {/* store */}
             {/* about */}
             </div> 
             <div className = 'headerRight'>           

             <Link to= "gmail"> Gmail </Link>
             <Link to= "gmail"> Images </Link>
             <Link to= "icons">  </Link>
             <AppsIcon />
             <Link to= "avatar">  </Link>
             <FaceIcon/>
            
             {/* icons */}
             {/* gmail */}
             {/* avatar */}
             </div> 
         </div>

         <div className = 'homeBody'>
        
        
         <center><img src='/easy.png' alt="searchie" height={180} width={300}/></center>
         </div>

         <div className="search_input_container">
           {/*hiding the searh and customise butons using specified hidebuttons
            class so that we ca ue the search class anywhere both design 
            and funnctionality*/}
             <Search />
         </div>
       </div> 
);
}

export default Home