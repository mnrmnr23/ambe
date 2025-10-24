import { useState } from 'react';
import { ArrowLeft, CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import { supabase, CartItem } from '../lib/supabase';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onBack: () => void;
  onOrderComplete: () => void;
}

export default function CheckoutPage({ cartItems, onBack, onOrderComplete }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          customer_address: formData.address,
          total_amount: total,
          status: 'pending',
        })
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = cartItems.map((item) => ({
        order_id: orderData.id,
        product_id: item.id,
        quantity: item.cartQuantity,
        unit_price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      setSuccess(true);
      setTimeout(() => {
        onOrderComplete();
      }, 3000);
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Erro ao criar pedido. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Pedido Confirmado!</h2>
          <p className="text-gray-600 mb-2">
            Obrigado pela sua compra, {formData.name}!
          </p>
          <p className="text-sm text-gray-500">
            Enviaremos os detalhes do pedido para {formData.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar ao Carrinho
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-6">Finalizar Pedido</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nome Completo
                  </div>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefone
                  </div>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Endereço de Entrega
                  </div>
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rua, número, bairro, cidade - CEP"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processando...' : 'Confirmar Pedido'}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resumo do Pedido</h2>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start py-2 border-b border-gray-100">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.cartQuantity}x R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-bold text-blue-700">
                      R$ {(item.price * item.cartQuantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Frete:</span>
                  <span className="font-semibold text-green-600">Grátis</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-3xl font-black text-blue-700">
                    R$ {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
