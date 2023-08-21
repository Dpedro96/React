// src/contexts/ReceitaContext.js

import { createContext, useState, useContext } from 'react';

export const ReceitaContext = createContext();

export const ReceitaProvider = ({ children }) => {
  const [receitas, setReceitas] = useState([]); // inicialmente, a lista está vazia

  return (
    <ReceitaContext.Provider value={{ receitas, setReceitas }}>
      {children}
    </ReceitaContext.Provider>
  );
};

export const useReceitas = () => useContext(ReceitaContext);
    