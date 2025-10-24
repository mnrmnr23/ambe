import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../lib/supabase';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Seu Carrinho</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-blue-800 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8">
            <ShoppingBag className="w-20 h-20 mb-4 opacity-30" />
            <p className="text-lg font-semibold">Carrinho vazio</p>
            <p className="text-sm mt-2">Adicione produtos para continuar</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 flex gap-4 border border-gray-200"
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-blue-700 font-bold mb-3">
                      R$ {item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.cartQuantity - 1)}
                        className="bg-white border border-gray-300 p-1 rounded hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.cartQuantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.cartQuantity + 1)}
                        disabled={item.cartQuantity >= item.stock}
                        className="bg-white border border-gray-300 p-1 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-700">Total:</span>
                <span className="text-3xl font-black text-blue-700">
                  R$ {total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                Finalizar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
