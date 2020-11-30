import {useState, useEffect} from 'react'
import API_KEY from "../keys"

const CONTEXT_KEY = "352d5ca5a53eff762";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                // `https://www.googleapis.com/customsearch/v1?key=AIzaSyDYz9vHQU5UeiGk6HEhUlGAfP0blagI-3g&cx=352d5ca5a53eff762&q=SSD`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();
    }, [term])
    
    return { data }
};

export default useGoogleSearch;
