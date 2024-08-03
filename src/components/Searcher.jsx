import { Input } from 'antd';
import { useState } from 'react';

const Searcher = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Llama a la función de búsqueda en el componente padre
  };

  return (
    <Input.Search
      placeholder='Buscar...'
      style={{ marginBottom: 10 }}
      value={query}
      onChange={handleChange}
    />
  );
};

export default Searcher;
