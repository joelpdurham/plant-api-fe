import React from 'react';
import { useSearchApi } from '../hooks/useSearchApi';

export const Search = () => {
  const { input, handleChangeInput, handleSubmit } = useSearchApi();
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={({ target }) => handleChangeInput(target.value)} />
      <button>Search</button>
    </form>
  );
};
