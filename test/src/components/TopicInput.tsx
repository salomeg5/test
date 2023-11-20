import React, { useState } from 'react';

interface TopicInputProps {
  onChange: (value: string) => void;
}

const TopicInput: React.FC<TopicInputProps> = ({ onChange }) => {
  // Estado para almacenar el valor del input
  const [topic, setTopic] = useState('');

  // Manejar cambios en el input y llamar a la función onChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      {/* Label del input */}
      <label className="block text-gray-700 text-sm font-bold mb-2">Topic:</label>
      {/* Input del Topic */}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={topic}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TopicInput;
