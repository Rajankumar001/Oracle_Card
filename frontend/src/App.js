import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Componenets/Login/Login';
import HomeScreen from './Screens/HomeScreen';
import CardReadingScreen from './Screens/cardReadingScreen/cardReadingScreen';
import OneCard from './Componenets/oneCard/oneCard';
import Guidebook from './Componenets/Guidebook/guidebook';
import Header from './Componenets/Header/Header';
import Footer from './Componenets/Footer/Footer';
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

// ✅ Improved Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('LoginUser'));
  return user ? children : <Navigate to="/" replace />;
};

// ✅ Function to wrap protected routes (avoids repetition)
const protectedRoutes = [
  { path: "/home", element: <HomeScreen /> },
  { path: "/begin-new-cards", element: <CardReadingScreen /> },
  { path: "/one-card", element: <OneCard /> },
  { path: "/two-card", element: <TwoCard /> },
  { path: "/three-card", element: <ThreeCard /> },
  { path: "/five-card", element: <FiveCard /> },
  { path: "/displaying-oneCard", element: <DisplayOneCard /> },
  { path: "/displaying-twoCard", element: <DisplayTwoCard /> },
  { path: "/displaying-threeCard", element: <DisplayThreeCard /> },
  { path: "/displaying-fiveCard", element: <DisplayFiveCard /> },
  { path: "/browse-cards", element: <BrowseCard /> },
  { path: "/view-guidebook", element: <ViewGuideBook /> },
  { path: "/working-with-cards", element: <GuideBookCard /> },
  { path: "/about", element: <About /> },
];

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          {protectedRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={<ProtectedRoute>{element}</ProtectedRoute>} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;