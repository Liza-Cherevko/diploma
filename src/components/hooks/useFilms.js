import { useEffect, useState } from "react";
import axios from "axios";

// const API_KEY = '5f16cf44c94a5cf6b5bc09e6b4c685b6'
// const API = 'https://kinobd.ru/api/films'
const API = 'https://kinobd.ru/api/films'
    // 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'
// const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86'

export default function useFilms() { 
    const [list, setList] = useState([]);


    useEffect(() => {
        axios.get(API).then(({ data }) => {
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