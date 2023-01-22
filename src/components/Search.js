import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className='row mt-5'>
    <form onSubmit={handleSubmit}>
      <label>
        Buscar:
        <input className='form-control' type="text" value={searchTerm} onChange={handleChange} />
      </label>
      <input className='btn btn-primary' type="submit" value="Enviar" />
    </form>
    </div>
  );
}

export default Search;


