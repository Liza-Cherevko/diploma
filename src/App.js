
import './App.css';


import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './landing/Landing';
import Auth from './components/auth/pages/Auth';
import Login from './components/auth/pages/Login';
import MoviesList from './components/pages/movie/MoviesList';
import MoviesCard from './components/pages/movie/MoviesCard';
import SerialList from './components/pages/serials/SerialList';
import TvShowList from './components/pages/tv-show/TvShowList';
import Main from './components/pages/main/Main';


function App() {
  return (
    <div className="container">
        {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/main' element={<Main/>}/>
        <Route path='/movies-list' element={<MoviesList />}/>
        <Route path='/movie-card/:id' element={<MoviesCard />}/>
        <Route path='/serials-list' element={<SerialList/> } />
        <Route path='/tvshow-list' element={<TvShowList/> } />
      
       
       
          
        <Route path='/auth' element={<Auth />}>
        <Route path="" element={<Navigate replace={true} to="login" />} />
        <Route path='login' element={<Login />} />

        </Route>

     </Routes>
    </div>
  );
}

export default App;
