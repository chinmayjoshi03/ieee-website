import React from 'react';
import './assets/styles/App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <LandingSection />
      <Footer />
    </div>
  );
};

export default App;