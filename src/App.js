import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/pages/MyProfile';
import Rockets from './components/pages/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
