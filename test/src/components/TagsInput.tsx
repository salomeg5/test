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
return (
    <div className="mb-4">
      {/* Label de las tags */}
    <label className="block text-gray-700 text-sm font-bold mb-2">Tags:</label>
      {/* Mostrar las tags existentes */}
    <div className="mb-2">
        {tags.map((tag, index) => (
        <span key={index} className="bg-gray-200 text-gray-700 py-1 px-2 mr-2 rounded">{tag}</span>
        ))}
    </div>
       {/* Input de las tags y botón para agregar */}
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={tagInput}
        onChange={handleTagInputChange}
    />
    <button
        className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline ml-2 mt-2 mb-2"
        onClick={handleAddTag}
    >
        Add Tag
    </button>
    </div>
);
};
export default TagsInput;
