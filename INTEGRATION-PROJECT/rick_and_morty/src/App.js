import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './view/About/About';
import Detail from './view/Details/Detail';
import SearchCharacters from './view/SearchCharacters/SearchCharacters';
import Home from './view/Home/Home'
import LogOut from './view/LogOut/LogOut';

import useAccess from './utils/useAccess';



function App() {

   const location = useLocation();

   return (
      <div className='App'>
         { location.pathname !== '/' && <NavBar />}
         
         <Routes>
            <Route path='/' element={<LogOut useAccess={useAccess} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Search' element={<SearchCharacters />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/log-out' element={<LogOut />} />
         </Routes>
      </div>
   );
}

export default App;
