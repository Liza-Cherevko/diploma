
import useFilms from '../../hooks/useFilms';
import { CardActionArea, Card, CardContent, CardMedia, Typography  } from '@mui/material';
import Header from '../Header';
import { ClipLoader  } from 'react-spinners'
import { NavLink, Outlet } from 'react-router-dom';
import  '../../../common/style.css'
import useLoading from '../../hooks/useLoading';
import SearchBar from '../components/SearchBar';



function MoviesList () {
  const { films } = useFilms()
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
      <SearchBar style={{mt:'30'}} />
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

        {films && films.length && films.map((item) => (
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
  
  );
}


export default MoviesList 



{/* // component={NavLink} to='/movie-card/:id' */}