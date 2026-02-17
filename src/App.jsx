import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TimeProvider } from './context/TimeContext';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Session from './pages/Session';

function App() {
  return (
    <TimeProvider>
      <Router>
        <div style={appContainer}>
          {/* شريط التنقل العلوي */}
          <nav style={navStyle}>
            <Link style={linkStyle} to="/wallet">💰 المحفظة</Link>
            <Link style={linkStyle} to="/">🏠 الرئيسية</Link>
          </nav>

          {/* محتوى الصفحات */}
          <main style={{ flex: 1, paddingBottom: '70px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/session" element={<Session />} />
            </Routes>
          </main>
        </div>
      </Router>
    </TimeProvider>
  );
}

// تنسيقات بسيطة تناسب الموبايل
const appContainer = {
  fontFamily: 'Arial, sans-serif',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  direction: 'rtl',
  backgroundColor: '#f5f5f5'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '15px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ddd',
  position: 'sticky',
  top: 0,
  zIndex: 100
};

const linkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#333'
};

export default App;
