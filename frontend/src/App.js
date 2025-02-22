import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
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
// import CardReading from './Components/CardReading/CardReading';
const ProtectedRoute = ({ children }) => {
  const LoginUser = localStorage.getItem('LoginUser');
  return LoginUser ? children : <Navigate to="/" replace />;
};
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
          <Route path='/begin-new-cards' Component={cardReadingScreen}></Route>
          <Route path="/one-card" element={<ProtectedRoute><OneCard /></ProtectedRoute>} />
          <Route path="/two-card" element={<ProtectedRoute><TwoCard /></ProtectedRoute>} />
          <Route path="/three-card" element={<ProtectedRoute><ThreeCard /></ProtectedRoute>} />
          <Route path="/five-card" element={<ProtectedRoute><FiveCard /></ProtectedRoute>} />
          <Route path="/displaying-oneCard" element={<ProtectedRoute><DisplayOneCard /></ProtectedRoute>} />
          <Route path="/displaying-twoCard" element={<ProtectedRoute><DisplayTwoCard /></ProtectedRoute>} />
          <Route path="/displaying-threeCard" element={<ProtectedRoute><DisplayThreeCard /></ProtectedRoute>} />
          <Route path="/displaying-fiveCard" element={<ProtectedRoute><DisplayFiveCard /></ProtectedRoute>} />
          <Route path="/browse-cards" element={<ProtectedRoute><BrowseCard /></ProtectedRoute>} />
          <Route path="/view-guidebook" element={<ProtectedRoute><ViewGuideBook /></ProtectedRoute>} />
          <Route path="/working-with-cards" element={<ProtectedRoute><GuideBookCard /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/load-saved-cards" element={<ProtectedRoute><SavedCards /></ProtectedRoute>} />
          <Route path="/card-spread" element={<ProtectedRoute><CardSpread /></ProtectedRoute>} />
          <Route path="/use-oracle" element={<ProtectedRoute><UseOracle /></ProtectedRoute>} />
          {/* <Route path="/card-reading" element={<ProtectedRoute><CardReading /></ProtectedRoute>} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
