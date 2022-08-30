import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/pages/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
