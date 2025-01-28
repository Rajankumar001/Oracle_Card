import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Componenets/Login/Login';
import HomeScreen from './Screens/HomeScreen';
import cardReadingScreen from './Screens/cardReadingScreen/cardReadingScreen';
import oneCard from './Componenets/oneCard/oneCard';
import guidebook from './Componenets/Guidebook/guidebook';
import OneCard from './Componenets/oneCard/oneCard';
import Header from './Componenets/Header/Header';
import Footer from './Componenets/Footer/Footer';
import TwoCard from './Componenets/twoCard/twoCard';
function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
     <Header/>
    <Routes>
     <Route path='/' Component={Login}></Route>
     <Route path='/home' Component={HomeScreen}></Route>
     <Route path='/begin-new-cards' Component={cardReadingScreen}></Route>
     <Route path='/one-card' Component={OneCard}></Route>
     <Route path='/two-card' Component={TwoCard}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter> 
    </div>
  );
}
export default App;
