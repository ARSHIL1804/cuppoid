import { useState } from 'react';
import './App.css';
import Login from './Login';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Profile from './components/Profile';
import Restaurant from './components/Restaurant';
import RestaurantInfo from './components/RestaurantInfo';

function App() {
  const [loginStatus,setLoginStatus]=useState(true);
  function loginSuccesfull(data){
       setLoginStatus(true)
  }
  return (
    <div className="App">
          {   loginStatus === false ? 
              <Login data={{loginSuccesfull}} ></Login>:
          <BrowserRouter>
              <Routes>
                     <Route path='/' element={<Home/>}></Route>
                     <Route path='/restaurant' element={<Restaurant/>}></Route>
                     <Route path='/profile' element={<Profile/>}></Route>
                     <Route path='/restaurantinfo' element={<RestaurantInfo/>}></Route>
              </Routes>
          </BrowserRouter>
          }
    </div>
  );
}

export default App;
