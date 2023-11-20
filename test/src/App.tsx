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