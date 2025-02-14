import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Login from './Componenets/Login/Login';
import HomeScreen from './Screens/HomeScreen';
import cardReadingScreen from './Screens/cardReadingScreen/cardReadingScreen';
import guidebook from './Componenets/Guidebook/guidebook';
import OneCard from './Componenets/oneCard/oneCard';
import Header from './Componenets/Header/Header';
import TwoCard from './Componenets/twoCard/twoCard';
import DisplayOneCard from './Componenets/DisplayOneCard/DisplayOneCard';
import DisplayTwoCard from './Componenets/DisplayingTwoCard/DisplayingTwoCard';
import ThreeCard from './Componenets/threeCard/threeCard';
import DisplayThreeCard from './Componenets/DisplayingThreeCard/DisplayingThreeCard';
import FiveCard from './Componenets/fiveCard/fiveCard';
import DisplayFiveCard from './Componenets/DisplayingFiveCard/DisplayingFiveCard';
import BrowseCard from './Componenets/BrowseCards/BrowseCard';
import ViewGuideBook from './Componenets/ViewGuideBook/ViewGuideBook';
import GuideBookCard from './Componenets/WorkingWithCards/GuideBookCard';
import About from './Componenets/About/About';
import SavedCards from './Componenets/SavedCards/SavedCards';
import CardSpread from './Componenets/UseOracle/CardSpread';
import UseOracle from './Componenets/UseOracle/UseOracle';
function App() {
  return (
    <div className='app-container'>
     <BrowserRouter>
    <Routes>
     <Route path='/' Component={Login}></Route>
     <Route path='/home' Component={HomeScreen}></Route>
     <Route path='/begin-new-cards' Component={cardReadingScreen}></Route>
     <Route path='/one-card' Component={OneCard}></Route>
     <Route path='/two-card' Component={TwoCard}></Route>
     <Route path='/three-card' Component={ThreeCard}></Route>
     <Route path='/five-card' Component={FiveCard}></Route>
     <Route path='/displaying-oneCard' Component={DisplayOneCard}></Route>
     <Route path='/displaying-twoCard' Component={DisplayTwoCard}></Route>
     <Route path='/displaying-threeCard' Component={DisplayThreeCard}></Route>
     <Route path='/displaying-fiveCard' Component={DisplayFiveCard}></Route>
     <Route path='/browse-cards' Component={BrowseCard}></Route>
     <Route path='/view-guidebook' Component={ViewGuideBook}></Route>
     <Route path='/working-with-cards' Component={GuideBookCard}></Route>
     <Route path='/about' Component={About}></Route>
     <Route path='/load-saved-cards' Component={SavedCards}></Route>
     <Route path='/card-spread' Component={CardSpread}></Route>
     <Route path='/use-oracle' Component={UseOracle}></Route>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;