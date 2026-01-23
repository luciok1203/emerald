import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
// 컴포넌트 임포트
import Header from './components/Header';
import History from './pages/History';
import Home from './pages/Home';
import Interview from './pages/Interview';
import Members from './pages/Members';
import Oz from './pages/Oz';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/members" element={<Members />} />
            <Route path="/oz" element={<Oz />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
