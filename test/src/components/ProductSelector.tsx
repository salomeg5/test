import React, { useState, useEffect } from 'react';

interface ProductSelectorProps {
    onProductSelect: (product: string) => void;
}

export default ProductSelector;