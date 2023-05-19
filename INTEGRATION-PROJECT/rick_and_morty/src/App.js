import { Routes, Route } from 'react-router-dom';
// import './custon'

import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './view/About/About';
import Detail from './view/Details/Detail';
import SearchCharacters from './view/SearchCharacters/SearchCharacters';
import Home from './view/Home/Home'



function App() {


   return (
      <div className='App'>
         <NavBar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Search' element={<SearchCharacters />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
