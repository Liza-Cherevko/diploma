import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_MOVIE_DETAILS = "https://kinopoiskapiunofficial.tech/api/v2.2/films/"


export default function useDetails(id) {
    const [details, setDetails] = useState([]);


    useEffect(() => {
        axios.get(API_URL_MOVIE_DETAILS+id, {
            headers: {
                "Content-Type": "aplication/json",
                "X-API-KEY": API_KEY,
            }
},).then(({ data }) => {
            console.log(data)
            setDetails(data)
        })
    }, []);

    return details
    
}

