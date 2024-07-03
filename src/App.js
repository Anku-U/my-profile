// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { SocialHeader } from './components/SocialHeader';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router> 
      <div>
        <SocialHeader />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>

    </Router>
    
  );
}

export default App;
