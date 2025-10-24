import { ShoppingCart, Package } from 'lucide-react';
import { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const getCategoryName = (category: string) => {
    const categories: Record<string, string> = {
      beer: 'Cerveja',
      soft_drink: 'Refrigerante',
      energy_drink: 'Energético',
      juice: 'Suco',
    };
    return categories[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      beer: 'bg-amber-100 text-amber-800',
      soft_drink: 'bg-blue-100 text-blue-800',
      energy_drink: 'bg-red-100 text-red-800',
      juice: 'bg-green-100 text-green-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(product.category)}`}>
            {getCategoryName(product.category)}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-black text-blue-700">
            R$ {product.price.toFixed(2)}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Package className="w-4 h-4" />
            <span>{product.stock} un.</span>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {product.stock === 0 ? 'Sem Estoque' : 'Adicionar ao Carrinho'}
        </button>
      </div>
    </div>
  );
}
