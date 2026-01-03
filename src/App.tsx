import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import HomeFPage from './pages/HomeFPage';
import AboutPage from './pages/AboutPage';
import KscanPage from './pages/KscanPage';
import SimscanPage from './pages/SimscanPage';
import NimbleTrackPage from './pages/NimbleTrackPage';
import ThreeDeVOKPage from './pages/ThreeDeVOKPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/Page";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Page slug="home" />} />
    <Route path="/:slug" element={<Page />} />
  </Routes>
</BrowserRouter>


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeFPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'kscan':
        return <KscanPage onNavigate={handleNavigate} />;
      case 'simscan':
        return <SimscanPage onNavigate={handleNavigate} />;
      case 'nimbletrack':
        return <NimbleTrackPage onNavigate={handleNavigate} />;
      case '3devok':
        return <ThreeDeVOKPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomeFPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
