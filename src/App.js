
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
 
<Header/>
   <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<WatchHistory/>}/>

   </Routes>
 <Footer/>
    </div>
  );
}

export default App;
