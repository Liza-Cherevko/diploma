import * as React from 'react';

import usePlayer from '../hooks/usePlayer';
import { Card, CardActionArea, CardMedia } from '@mui/material';


 function MoviesCard() {
    const { data } = usePlayer()
    console.log(data);
    return (
        <div className='cardWrap'>

        {data && data.length && data.map((item) => (
          <div key={item.kinopoisk_id}>
          <Card sx={{ width: 350, height:400 }}>
        <CardActionArea  >
          <CardMedia
                component="img"
                height="100%"
                image={item.small_poster}
            alt={item.name_original}
                />
                
                
        </CardActionArea>
            </Card> 
            </div>
        ))} 
        
        
         </div>
   
    )
}

export default  MoviesCard()