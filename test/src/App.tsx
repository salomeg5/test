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
  <div className="bg-slate-800 flex items-center justify-center h-screen ">
    {/* Envuelve todo en un cuadro gris con bordes */}
    <div className="bg-tranparent bg-transparent border border-gray-500 bg-slate-900 p-6 rounded-xl shadow-md max-w-md w-full">
      <h1 className="text-3xl text-white font-roboto mb-4 text-center"> Merchant Information </h1>

      <div className="mb-4">
        <TopicInput onChange={handleTopicChange} />
      </div>

      <div className="mb-4">
        <TagsInput onChange={handleTagsChange} />
      </div>

      <div className="mb-4">
        <ProductSelector onProductSelect={handleProductSelect} />
      </div>

      <div className="bg-gray-100 text-center p-4 rounded">
        <p className="tex-white text-lg font-roboto mb-2">User Input:</p>
        <p><span className="tex-white font-roboto">Topic:</span> {topic}</p>
        <p><span className="tex-white font-roboto">Tags:</span> {tags.join(', ')}</p>
        <p><span className=" tex-white font-bold">Selected Product:</span> {selectedProduct}</p>
      </div>
    </div>
  </div>
);
};

export default App;
