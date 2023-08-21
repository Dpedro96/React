import api from "../../services/api";
import React, { useEffect, useState } from "react";
import "../../css/Receitas.css"
import { Link } from "react-router-dom";
import { useReceitas } from '../../contexts/ReceitaContext';

function Home() {
  const [receitas, setReceitas] = useReceitas([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 1000;
  const pagesToShow = 5; // Number of pages to show in pagination
  const totalPages = Math.ceil(receitas.length / recipesPerPage);
  
  useEffect(() => {
    async function loadReceitas() {
      try {
        const response = await api.get("");
        setReceitas(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadReceitas();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const middlePage = Math.floor(pagesToShow / 2);
    let startPage = currentPage - middlePage;
    if (startPage <= 0) {
      startPage = 1;
    }
    let endPage = startPage + pagesToShow - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - pagesToShow + 1;
      if (startPage <= 0) {
        startPage = 1;
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = receitas.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className="background">
        {receitas.map((receita, index) => (
        <div key={index}>
        </div>
        ))}
                <div>
            {/* ... código existente da sua página Home ... */}
            <Link to="/cadastro">Adicionar Receita</Link>
        </div>
      {currentRecipes.map((receita) => (
        <div className="receita" key={receita._id.$oid} >
          <h2>{receita.nome}</h2>
          <Link to={`/detalhes/${receita._id.$oid}`}>Ver Detalhes</Link>
        </div>
      ))}
      <div className="pagination">
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;