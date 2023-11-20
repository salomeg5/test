import React, { useState } from 'react';

interface TagsInputProps {
onChange: (tags: string[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ onChange }) => {
  // Estado para almacenar las tags
const [tags, setTags] = useState<string[]>([]);
  // Estado para almacenar el valor del input de tags
const [tagInput, setTagInput] = useState('');
   // Manejar cambios en el input de tags
const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
};
 // Agregar una nueva tag al array y llamar a la función onChange
 const handleAddTag = () => {
    if (tagInput.trim() !== '') {
      setTags([...tags, tagInput]);
      setTagInput('');
      onChange([...tags, tagInput]);
    }
  };

export default TagsInput;