import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Accueil from './pages/1_accueil/Accueil';
import Services from './pages/2_services/Services';
import Portfolio from './pages/3_portfolio/Portfolio';
import Contact from './pages/4_contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Accueil/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
