import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <h3 className="text-xl font-black text-white">AMBEV</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Líder no mercado de bebidas brasileiro, oferecendo as melhores marcas para você e seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <p>Email: vendas@ambev.com.br</p>
              <p>Telefone: (11) 3555-1000</p>
              <p>WhatsApp: (11) 99999-0000</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Ambev. Todos os direitos reservados. Beba com moderação.</p>
        </div>
      </div>
    </footer>
  );
}
