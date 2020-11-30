import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';




function Search({hideButtons = false}){

//input hook

    const [{}, dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const history = useHistory();

//input search term
    const search = e => {
        e.preventDefault();
        console.log("You hit search ", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search');
    }
    return (

      
        
       <form className='search'>
           <center><div className='searchInput'>
               <SearchIcon className ='searchInputIcon'/>
               <input value ={input} onChange ={e => setInput(e.target.value)}/>
               <MicIcon/>

           </div></center>

           
           {!hideButtons ? 
            (
                <center>
                <div className='searchBtn'>
                <Button type='submit'  onClick={search} variant="contained"> Search</Button>
                <Button variant="contained"> Customise</Button>
            </div></center>
 
            ):(
                <center>
                <div className='searchBtn'>
                <Button className = 'searchBtnHidden' type='submit'  onClick={search} variant="contained"> Search</Button>
                <Button  className = 'searchBtnHidden' variant="contained"> Customise</Button>
            </div></center>
            )
        }
        
       </form>
);
}

export default Search

