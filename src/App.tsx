import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
