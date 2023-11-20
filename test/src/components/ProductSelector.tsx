import React, { useState, useEffect } from 'react';

interface ProductSelectorProps {
    onProductSelect: (product: string) => void;
}
const ProductSelector: React.FC<ProductSelectorProps> = ({ onProductSelect }) => {
    // Estado para almacenar la lista de productos
    const [products, setProducts] = useState<string[]>([]);
    useEffect(() => {
        // Llamada a la API para obtener la lista de productos
    }, []);
    const handleProductSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedProduct = e.target.value;
        onProductSelect(selectedProduct);
      };
      return (
        <div className="mb-4">
          {/* Label del selector de productos */}
          <label className="block text-gray-700 text-sm font-bold mb-2">Products:</label>
          {/* Selector de productos */}
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleProductSelect}
          >
            <option value="" disabled>Select a product</option>
            {/* Opciones de productos obtenidas de la API */}
            {products.map((product, index) => (
            <option key={index} value={product}>{product}</option>
            ))}
        </select>
        </div>
    );
    };
export default ProductSelector;