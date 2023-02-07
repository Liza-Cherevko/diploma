import React from 'react';
import useFilms from '../hooks/useFilms';
import { CardActionArea, Card, CardContent, CardMedia, Typography, listClasses } from '@mui/material';
import Header from './Header';
import { NavLink } from 'react-router-dom';



function MoviesList () {

  const { data } = useFilms()
  console.log(data);

  return (
    <>
        <Header />
      <div className='cardWrap'>

      {data && data.length && data.map((item) => (
        <div key={item.kinopoisk_id}>
        <Card sx={{ width: 350, height:400 }}>
      <CardActionArea component={NavLink} to='/movie-card' >
        <CardMedia
              component="img"
              height="100%"
              image={item.small_poster}
          alt={item.name_original}
              />
              
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
           {item.nameOriginal}
        </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            
       </Typography> */}
              </CardContent>
              
      </CardActionArea>
          </Card> 
          </div>
      ))} 
      
      
       </div>
      
  </>
  );
}
// key={item.kinopoiskId}

export default MoviesList 



