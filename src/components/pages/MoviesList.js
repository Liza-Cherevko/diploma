import React from 'react';
import useFilms from '../hooks/useFilms';
import { CardActionArea, Card, CardContent, CardMedia, Typography, listClasses } from '@mui/material';




function MoviesList () {

  const { items } = useFilms()
  console.log(items);

  return (
      <div className='cardWrap'>

      {items && items.length && items.map((item) => (
        <div key={item.kinopoiskId}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
              component="img"
              height="100%"
              image={item.posterUrl}
          alt={item.nameOriginal}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {/* {item.nameOriginal} */}
        </Typography>
          <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
          </Card> 
          </div>
      ))} 
      
      
       </div>
      
  );
}
// key={item.kinopoiskId}

export default MoviesList 



