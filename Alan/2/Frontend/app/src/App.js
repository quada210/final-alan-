import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Sign } from './components/Sign';

import { Userh } from './components/Userh';
import { Feedback } from './components/Feedback';
import ContactUs from './components/ContactUs';
import Dash from './components/Dash';
import { Mrng } from './components/Mrng';
import {Lunch} from './components/Lunch'
import { Dinner } from './components/Dinner';
import Home2 from './components/Home2';
import { Cart } from './components/Cart';


function App() {
  const location = useLocation();

  // List of routes where you want to hide the nav
  const hideNavRoutes = ['/user'];

  // Check if the current route is in the list of routes to hide the nav
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!hideNav && <Nav />}
      <Userh />
      
      <Routes>

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/log' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/rev' element={<Feedback />} />
        <Route path='/user' element={<Navigate to="/h2"/>}/>
        <Route path='/h2' element={<Home2/>}/>
        <Route path='/dash' element={<Dash />} />
        <Route path='/mrng' element={<Mrng/>}/>
        <Route path='/lunch' element={<Lunch/>}/>
        <Route path='/dinner' element={<Dinner/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </div>
  );
}

export default App;
