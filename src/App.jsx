// Correct App.jsx with a single BrowserRouter
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Main Components
import './App.css';
import Footer from './Components/Footer/Footer';
import AboutHome from './Components/HOME/AboutHome/aboutHome';
import ConnectWithUs from './Components/HOME/ConnectWithUs/homeConnectWithUs';
import Header from './Components/HOME/HeaderSection/header';
import HeroSection from './Components/HOME/HeroSection/HeroSection';

// Pages
import About from './Components/AboutPages/About';
import ContactPage from './Components/ContactPage/ContactPage';
import Investmentopportunities from './Components/investment-opportunities/investment-opportunities';
import InvestorPrivileges from './Components/investorPrivileges/investorPrivileges';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
             <HeroSection />
             <AboutHome /> 
             <ConnectWithUs />
             <Footer /> 
             </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/investment-opportunities" element={<Investmentopportunities />} />
        <Route path="/investor-privileges" element={<InvestorPrivileges />} />

      </Routes>
    </>
  );
}

export default App;
