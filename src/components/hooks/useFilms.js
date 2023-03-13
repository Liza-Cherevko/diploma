import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR ='https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1';

export default function useFilms() { 
    const [list, setList] = useState([]);
  
    useEffect(() => {
        axios.get( API_URL_POPULAR , {
            headers: {
        "X-API-KEY":API_KEY ,
    },
        }).then(({ data }) => {
            console.log(data)
            setList(data)
        })
    }, []);

    console.log(list.films)
    return { list}
    
}


