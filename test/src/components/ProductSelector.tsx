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
export default ProductSelector;