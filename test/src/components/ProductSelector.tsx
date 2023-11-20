import React, { useState, useEffect } from 'react';

interface ProductSelectorProps {
    onProductSelect: (product: string) => void;
}
const ProductSelector: React.FC<ProductSelectorProps> = ({ onProductSelect }) => {
    // Estado para almacenar la lista de productos
    const [products, setProducts] = useState<string[]>([]);

export default ProductSelector;