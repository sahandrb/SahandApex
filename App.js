import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Story } from './components/Story';
import { OfficeSupplies } from './components/OfficeSupplies';
import { PetShop } from './components/PetShop';
import { Philosophy } from './components/Philosophy';
import { Bio } from './components/Bio';
import { Footer } from './components/Footer';
import '@/App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Story />
        <PetShop />
        <OfficeSupplies />
        <Philosophy />
        <Bio />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
