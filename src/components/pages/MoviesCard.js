import React from 'react'
import useDetails from '../hooks/useDetails';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Card, CardContent, CardMedia, Typography, Button , CardActions } from '@mui/material';





function MoviesCard() {
 
  const details = useDetails(328)
  console.log(details);

  return (
    <>
    
      <Card sx={{ maxWidth: 345 }} style={{margin: '150px auto'}} >
      <CardMedia
        
          component='img'
          max-width= "100%"
          height="100%"
        image={details.posterUrlPreview}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {details.nameOriginal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {details.description}
            
        </Typography>
      </CardContent>
      <CardActions>
 
      </CardActions>
      </Card> 
      
      <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
        <source src={details.webUrl} type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
  
     
</>
  )
}

export default MoviesCard




// {kinopoiskId && kinopoiskId.length &&kinopoiskId.map((item) => (
//   <div key={kinopoiskId.filmId}  onClick={() => console.log(item.kinopoiskId) }>
//   <Card sx={{ width: 350, }} className='hover'  >
// <CardActionArea>
//     <CardMedia 
//           className={'movie__cover-inner'}
//         title={item.nameOriginal}
//         component='img'
//         max-width= "100%"
//         height="100%"
//         image={item.posterUrl}
//         alt={item.nameOriginal}
//       />
//       <CardMedia  className='movie__cover--darkened' />

// <CardContent sx={{ height: 150, }}>
//   <Typography gutterBottom variant="h5" component="div">
//   {item.description}
//   </Typography>
//   <Typography variant="body2" color="text.secondary">
//           <ul>
       
//           {item.genres.map(
//             (genre) => (
//               <li style={{color:'black', marginLeft:5}}>{genre.genre }</li>
//     )
//   )}
// </ul>
//   </Typography>
// </CardContent>
// </CardActionArea>
//   </Card> 

//   </div>
// ))} 