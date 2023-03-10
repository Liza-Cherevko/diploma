
import useDetails from '../../hooks/useDetails';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Card, CardContent, CardMedia, Typography, Button , CardActions } from '@mui/material';
import useFilms from '../../hooks/useFilms';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useLoading from '../../hooks/useLoading';
import { ClipLoader  } from 'react-spinners'
import Header from '../Header';




function MoviesCard() {
  let { id } = useParams();
  console.log(id)
  const [cardId, setCardId] = useState(null)
  
  const { filmId } = useFilms(cardId)
  const isLoading = useLoading()
  const details = useDetails(id)
  console.log(filmId);

  useEffect(() => {
    if (!filmId) return
    setCardId(filmId)
  }, [filmId])

  const override = {
    display: "block",
    margin: "400px auto",
    borderColor: "gray",
  };
  
  
  
  return (
  

    <>
       {
      isLoading?
      (<ClipLoader
          color={'#0053b1'}
          loading={isLoading}
          size={150}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader" 
      />)
      :

  (

    <>
    <Header />
      <Card sx={{ maxWidth: 345 }} style={{ margin: '150px auto' }} >
        <CardMedia
        
          component='img'
          max-width="100%"
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
   </>
  )
}

export default MoviesCard



