import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
// import Header from './components/Header';
// import Navbar from './components/Navbar';

import Header from './components/Header';

import Rockets from './components/pages/Rockets';
import Dragon from './components/pages/Dragon';
import Mission from './components/pages/Mission';
import MyProfile from './components/pages/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/dragons" element={<Dragon />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/My-Profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
