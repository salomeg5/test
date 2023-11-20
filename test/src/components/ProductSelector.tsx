import React, { useState, useEffect } from 'react';

interface ProductSelectorProps {
    onProductSelect: (product: string) => void;
}
const ProductSelector: React.FC<ProductSelectorProps> = ({ onProductSelect }) => {
    // Estado para almacenar la lista de productos
    const [products, setProducts] = useState<string[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://api.wizybot.com/products/demo-product-list');
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
      
            const data = await response.json();
      
            // Asegúrate de que 'data.products' es un array de strings
            if (Array.isArray(data.products)) {
              setProducts(data.products);
            } else {
              console.error('Invalid data format:', data);
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
      
        fetchProducts();
      }, []);CO

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