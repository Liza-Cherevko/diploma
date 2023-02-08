
import './App.css';

import MoviesList from './components/pages/MoviesList';
import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './landing/Landing';
import Auth from './components/auth/pages/Auth';
import Login from './components/auth/pages/Login';
// import NewList from './components/pages/NewList';
import MoviesCard from './components/pages/MoviesCard';

function App() {
  return (
    <div className="container">
        {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        
        <Route path='/list' element={<MoviesList />}/>
        <Route path='/movie-card/:cardId' element={<MoviesCard />}/>
       

        {/* <Route path='/new-list' element={<NewList/>}/> */}
       
       
          
        <Route path='/auth' element={<Auth />}>
        <Route path="" element={<Navigate replace={true} to="login" />} />
        <Route path='login' element={<Login />} />

        </Route>

     </Routes>
    </div>
  );
}

export default App;
