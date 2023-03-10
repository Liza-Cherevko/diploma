import { useEffect, useState } from "react";
import axios from "axios";


const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_SERIALS = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=MINI_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1890&yearTo=2023&page=1';
export default function useTVShow() { 
    const [list, setList] = useState([]);


    useEffect(() => {
        axios.get(API_URL_SERIALS, {
            headers: {
        "X-API-KEY": API_KEY,
    },
        }).then(({ data }) => {
            console.log(data)
            setList(data)
        })
    }, []);

    return list
    
}


// {
//     headers: {
//         "X-API-KEY": API_KEY,
//     },