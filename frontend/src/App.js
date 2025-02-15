import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import HomeScreen from './Screens/HomeScreen';
import cardReadingScreen from './Screens/cardReadingScreen/cardReadingScreen';
import guidebook from './Components/Guidebook/guidebook';
import OneCard from './Components/oneCard/oneCard';
import Header from './Components/Header/Header';
import TwoCard from './Components/twoCard/twoCard';
import DisplayOneCard from './Components/DisplayOneCard/DisplayOneCard';
import DisplayTwoCard from './Components/DisplayingTwoCard/DisplayingTwoCard';
import ThreeCard from './Components/threeCard/threeCard';
import DisplayThreeCard from './Components/DisplayingThreeCard/DisplayingThreeCard';
import FiveCard from './Components/fiveCard/fiveCard';
import DisplayFiveCard from './Components/DisplayingFiveCard/DisplayingFiveCard';
import BrowseCard from './Components/BrowseCards/BrowseCard';
import ViewGuideBook from './Components/ViewGuideBook/ViewGuideBook';
import GuideBookCard from './Components/WorkingWithCards/GuideBookCard';
import About from './Components/About/About';
import SavedCards from './Components/SavedCards/SavedCards';
import CardSpread from './Components/UseOracle/CardSpread';
import UseOracle from './Components/UseOracle/UseOracle';
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