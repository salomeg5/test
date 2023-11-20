import React, { useState } from 'react';

interface TopicInputProps {
  onChange: (value: string) => void;
}

onst TopicInput: React.FC<TopicInputProps> = ({ onChange }) => {
    // Estado para almacenar el valor del input
    const [topic, setTopic] = useState('');
  
    // Manejar cambios en el input y llamar a la función onChange
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTopic(e.target.value);
      onChange(e.target.value);
      
