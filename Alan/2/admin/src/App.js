import { Route,  Routes ,Navigate} from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Sign } from './components/Sign';
import { Feedback } from './components/Feedback';
import { Addmrng } from './components/Addmrng';
import { Mrng } from './components/Mrng';

import { AddLunch } from './components/AddLunch';
import { Lunch } from './components/Lunch';
import {Adddinner} from './components/Adddinner'
import { Dinner } from './components/Dinner';
import Order from './components/Order';
import { Contact } from './components/Contact';
import { User} from './components/User';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Navigate to="sign"/>}/>
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/feed' element={<Feedback/>}/>
        <Route path='/break' element={<Addmrng/>}/>
        <Route path='/mrng' element={<Mrng/>}/>
        <Route path='/alunch' element={<AddLunch/>}/>
        <Route path='/lunch' element={<Lunch/>}/>
        <Route path='/adinner' element={<Adddinner/>}/>
        <Route path='/dinner' element={<Dinner/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user' element={<User/>}/>
        </Routes>
    </div>
  );
}

export default App;
