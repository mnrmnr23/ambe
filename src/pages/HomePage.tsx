import { MessageCircle, ShoppingBag, Users, Truck, Award, Clock } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5571996289081?text=ola';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-blue-800 font-black text-6xl">A</span>
            </div>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              AMBEV
            </h1>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Distribuidora oficial das melhores marcas de bebidas do Brasil
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com Atendente
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ShoppingBag className="w-6 h-6" />
                Faça seu Pedido
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Por que escolher a Ambev?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marcas Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Skol, Brahma, Antarctica, Budweiser, Stella Artois, Corona e muito mais
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrega Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Entregamos seus pedidos com agilidade e segurança em toda a região
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipe especializada pronta para atender suas necessidades
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Horários Flexíveis</h3>
              <p className="text-gray-600 leading-relaxed">
                Atendimento de segunda a sábado para melhor te atender
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Variedade de Produtos</h3>
              <p className="text-gray-600 leading-relaxed">
                Cervejas, refrigerantes, energéticos, sucos e muito mais
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Preços Competitivos</h3>
              <p className="text-gray-600 leading-relaxed">
                Melhores condições para você e seu negócio
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">
              Pronto para fazer seu pedido?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Entre em contato agora mesmo pelo WhatsApp e garanta as melhores bebidas para você ou seu estabelecimento
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-7 h-7" />
                Falar com Atendente
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ShoppingBag className="w-7 h-7" />
                Faça seu Pedido
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center text-gray-900 mb-12">
              Nossos Produtos
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Cervejas</h3>
                <p className="text-sm text-gray-600">Skol, Brahma, Antarctica, Budweiser, Stella, Corona</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Refrigerantes</h3>
                <p className="text-sm text-gray-600">Guaraná Antarctica, Pepsi, H2OH!</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Energéticos</h3>
                <p className="text-sm text-gray-600">Gatorade, Fusion</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Sucos</h3>
                <p className="text-sm text-gray-600">Do Bem Natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
