import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';

import Rockets from './components/pages/Rockets';
import Mission from './components/pages/Mission';
import MyProfile from './components/pages/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/My-Profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
