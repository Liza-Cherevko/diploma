import React from 'react'
import Header from '../Header';
import { ClipLoader  } from 'react-spinners'
import {  Outlet } from 'react-router-dom';
import  '../../../common/style.css'
import useLoading from '../../hooks/useLoading';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import useFilms from '../../hooks/useFilms';




function MoviesList() {
  

  const list = useFilms()

  console.log(list);
  



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

        {list.list.films && list.list.films.length && list.list.films.map((item) => (
          <div key={item.filmId} onClick={() => console.log(item.filmId)}>
            <Cards item={item} />
          </div>
      ))} 
    
  </div>)
        }

</> 
  
  );
}


export default MoviesList 



