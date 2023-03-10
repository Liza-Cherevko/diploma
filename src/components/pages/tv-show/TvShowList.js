import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { ClipLoader  } from 'react-spinners'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import useLoading from '../../hooks/useLoading'
import Header from '../Header'
import useTVShow from '../../hooks/useTVShow'

function TvShowList() {
  const { items } = useTVShow()
  const isLoading = useLoading()
  
  const override = {
    display: "block",
    margin: "400px auto",
    borderColor: "gray",
  };
  return (
    <>
    <Header />
    
    <Outlet />
    {isLoading ? 
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
     
        <div className='cardWrap'>

      {items && items.length && items.map((item) => (
        <div key={item.filmId}  onClick={() => console.log(item.filmId) }>
        <Card sx={{ width: 350, }} className='hover'  >
            <CardActionArea component={NavLink} to={'/movie-card/'+item.filmId }>
          <CardMedia 
                className={'movie__cover-inner'}
              title={item.nameEn}
              component='img'
              max-width= "100%"
              height="100%"
              image={item.posterUrlPreview}
              alt={item.nameEn}
            />
            <CardMedia  className='movie__cover--darkened' />

    <CardContent sx={{ height: 150, }}>
        <Typography gutterBottom variant="h5" component="div">
        {item.nameEn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
                <ul>
             
                {item.genres.map(
                  (genre) => (
                    <li style={{color:'black', marginLeft:5}}>{genre.genre }</li>
          )
        )}
      </ul>
        </Typography>
      </CardContent>
    </CardActionArea>
        </Card> 

        </div>
    ))} 
  
</div>)
}
</> 
  )
}

export default TvShowList
