import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Componenets/Login/Login';
import HomeScreen from './Screens/HomeScreen';
import cardReadingScreen from './Screens/cardReadingScreen/cardReadingScreen';
import oneCard from './Componenets/oneCard/oneCard';
import guidebook from './Componenets/Guidebook/guidebook';
import OneCard from './Componenets/oneCard/oneCard';
import CardCarousel from './Componenets/oneCard/Crouselcard';
function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
    <Routes>
     <Route path='/' Component={Login}></Route>
     <Route path='/home' Component={HomeScreen}></Route>
     <Route path='/begin-new-cards' Component={cardReadingScreen}></Route>
     <Route path='/one-card' Component={OneCard}></Route>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;
