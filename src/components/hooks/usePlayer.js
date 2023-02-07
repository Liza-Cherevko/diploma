import { useEffect, useState } from "react";
import axios from "axios";

const API = 'https://kinobd.ru/js/player_.js'


export default function usePlayer() { 
    const [player, setPlayer] = useState([]);


    useEffect(() => {
        axios.get(API).then(({ data }) => {
            console.log(data)
            setPlayer(data)
        })
    }, []);

    return player
    
}