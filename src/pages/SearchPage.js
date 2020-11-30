import React from 'react';
import { useStateValue } from '../StateProvider';
import './SearchPage.css';
import { Link } from "react-router-dom";
import useGoogleSearch from './useGoogleSearch';

import Search from './Search';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();

    //Live API call
    const { data } = useGoogleSearch(term);

    //const data = Response;

    

    return (
        <div className = "searchPage">
            <div className = "searchHeader">
                <Link to="/">
                <img classname = "search_results_logo" src='/easy.png' alt="duckie image" height={100} width={160}/>
                </Link>
             {/* <h1>{ term }</h1> */}
            <div className= "searchHeaderBody">
            <Search hideButtons/>
            </div>
            </div>
          {/*parameters imported from API response*/}     
        { term && (
            <div className = "searchPageResults">
                <p className= "searchResCt">
                    About {data?.searchInformation.formattedTotalResults} results (in {data?.searchInformation.formattedSearchTime} seconds) for {term} .
                </p>

        { data?.items.map(item =>(
            <div
                className= "searchPageItem">
                    <a href={item.link}>{item.displayLink} 
                    <h2 className = "searchTitle">{item.title}</h2>
                    
                    </a>
                    <p className = "searchSnippet">{item.snippet}</p>
                 
            </div>
        ))}

                </div>
        )}
        </div>
    )
}

export default SearchPage
