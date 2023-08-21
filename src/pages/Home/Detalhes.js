import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from 'react-router-dom';

function Detalhes() {
  const [receita, setReceita] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    async function loadReceita() {
      try {
        console.log("Buscando receita com ID:", id);
        const response = await api.get(`/${id}`);
        console.log("Resposta da API:", response.data);
        setReceita(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    loadReceita();
  }, [id]);
  

  if (!receita) {
    return <div>Loading...</div>;
  }

  return (
    <div className="background">
      <div className="receita">
        <h2>{receita.nome}</h2>
        {receita.secao.map((secao) => (
          <div key={secao.nome}>
            <h3>{secao.nome}:</h3>
            <ul>
              {secao.conteudo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detalhes;
