import './App.css';
import Home from './pages/Home/Home';
import Story from './pages/OurStory/Story';
import Location from './pages/Location/Location';
import EB5Program from './pages/EB5Program/EB5Program';
import OurBrands from './pages/OurBrands/ourbrands';
import FranchiseEnquires from './pages/Franchise-enquires/franchise-enquires';
import EventCatering from './pages/Event-catering/event-catering';
import Contact from './pages/ContactUs/contact';
import Careers from './pages/Careers/Careers';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/location" element={<Location />} />
        <Route path="/eb5-program" element={<EB5Program />} />
        <Route path="/our-brands" element={<OurBrands />} />
        <Route path="/franchise-enquires" element={<FranchiseEnquires />} />
        <Route path="/event-catering" element={<EventCatering />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
