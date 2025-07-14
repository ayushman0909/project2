import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Item from './components/Item';
import Profile from './profile';
import SearchBox from './components/SearchBox';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="mainBody">
      {isHomePage && <SearchBox />}
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
