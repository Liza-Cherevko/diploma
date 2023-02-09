
import useDetails from '../hooks/useDetails';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Card, CardContent, CardMedia, Typography, Button , CardActions } from '@mui/material';
import useFilms from '../hooks/useFilms';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';





function MoviesCard() {
  let { id } = useParams();
  console.log(id)
  const [cardId, setCardId] = useState(null)
  
  const {filmId} = useFilms(cardId)
  
  const details = useDetails(id)
  console.log(filmId);

  useEffect(() => {
    if (!filmId) return
    setCardId(filmId)
 }, [filmId])

  return (
  
    <>
      {/* <Outlet /> 
       {details && details.length && details.map((item) => (
          <div key={item.filmId}  > */}
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
          
        {/* </div>

        ))} */}
    </>

  )
}

export default MoviesCard



