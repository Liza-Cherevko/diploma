
import './App.css';
import Header from './components/pages/Header';
import MoviesList from './components/pages/MoviesList';
import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './landing/Landing';
import Auth from './components/auth/pages/Auth';
import Login from './components/auth/pages/Login';

function App() {
  return (
    <div className="container">
        {/* <Header /> */}
      <Routes>
        <Route  exact path='/' element={<Landing />} />
        <Route path='/list' element={<MoviesList />} />

        <Route path='/auth' element={<Auth />}>
        <Route path="" element={<Navigate replace={true} to="login" />} />
        <Route path='login' element={<Login />} />

        </Route>

     </Routes>
    </div>
  );
}

export default App;
