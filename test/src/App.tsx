import React from 'react';
import TopicInput from './components/TopicInput';
import TagsInput from './components/TagsInput';
import ProductSelector from './components/ProductSelector';

const App: React.FC = () => {
   // Estados para almacenar la información ingresada por el usuario
  const [topic, setTopic] = React.useState('');
  const [tags, setTags] = React.useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = React.useState('');

  // Manejar cambios en el input de Topic
 const handleTopicChange = (value: string) => {
  setTopic(value);
};

 // Manejar cambios en el input de Tags
 const handleTagsChange = (tags: string[]) => {
  setTags(tags);
};

 // Manejar la selección de un producto
 const handleProductSelect = (product: string) => {
  setSelectedProduct(product);
};
return (
  <div className="max-w-2xl mx-auto p-4"> {/* Contenedor principal con margen y padding */}
    <h1 className="text-3xl font-bold mb-4">Merchant Information Input Page</h1> {/* Título grande y negrita */}

    <div className="mb-4"> {/* Espaciado inferior para los componentes */}
      <TopicInput onChange={handleTopicChange} /> {/* Componente de TopicInput */}
    </div>

    <div className="mb-4"> {/* Espaciado inferior para los componentes */}
      <TagsInput onChange={handleTagsChange} /> {/* Componente de TagsInput */}
    </div>
