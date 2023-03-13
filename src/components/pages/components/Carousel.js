import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'bootstrap/dist/css/bootstrap.min.css';
import useFilms from '../../hooks/useFilms';
import { CardActionArea, Card, CardContent, CardMedia, Typography  } from '@mui/material';
import { NavLink } from 'react-router-dom';


function Carousel() {
    const { films } = useFilms()



  return (
      <div className='container py-4 px-4 justify-content-center'>
          <Swiper
              freeMode={true}
              grubCursor={true}
              modules={[FreeMode]}
              className='mySwiper'
              slidesPerView={5}
              spaceBetween={40}
          >
        
           
              {films && films.length && films.map((item) => (
                  <div key={item.filmId} onClick={() => console.log(item.filmId)}>
                  <SwiperSlide style={{ marginRight: '20' }}>
                          <Card  className='hover' >
              <CardActionArea component={NavLink} to={'/movie-card/'+item.filmId } >
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
      </CardActionArea>
          </Card> 
          </SwiperSlide>
          </div>
              ))} 
           

                      



          </Swiper>
      </div>
  )
}

export default Carousel