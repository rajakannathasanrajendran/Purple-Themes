import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HelmetProvider } from "react-helmet-async";

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Catering from './pages/Catering/Catering';
import Menu from './pages/Menu/Menu';
import Franchise from './pages/Franchise/Franchise';
import Buffet from './pages/Buffet/Buffet';
import Blog from './pages/Blog/Blog';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/buffet" element={<Buffet />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </HelmetProvider>
      </div>
    </Router>
  )
}

export default App
