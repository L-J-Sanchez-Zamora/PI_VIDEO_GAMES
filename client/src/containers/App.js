import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage';
import HomePage from '../components/HomePage/HomePage';
import AddVideogame from '../components/AddVideogame/AddVideogame';
import VideoGameDetails from '../components/VideoGameDetails/VideoGameDetails';

function App() {

  return (
      <div className='App'><br/><br/>
    <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/videogame' element={<AddVideogame />} />
    <Route path='/videogame/:id' element={<VideoGameDetails />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='*' element={<LandingPage />} />
    </Routes>
    </div>
  )
}

export default App;

