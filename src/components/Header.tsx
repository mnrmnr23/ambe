import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-800 font-black text-2xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">AMBEV</h1>
              <p className="text-xs text-blue-200">Distribuidora Oficial</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`font-semibold hover:text-blue-200 transition-colors ${
                currentPage === 'home' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`font-semibold hover:text-blue-200 transition-colors flex items-center gap-2 ${
                currentPage === 'contact' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              Contato
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-600">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className={`text-left py-2 font-semibold hover:text-blue-200 transition-colors ${
                  currentPage === 'home' ? 'text-white' : 'text-blue-100'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className={`text-left py-2 font-semibold hover:text-blue-200 transition-colors flex items-center gap-2 ${
                  currentPage === 'contact' ? 'text-white' : 'text-blue-100'
                }`}
              >
                <Phone className="w-4 h-4" />
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
