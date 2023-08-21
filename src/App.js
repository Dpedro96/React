import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importe o componente "Routes" do react-router-dom
import Header from './Header/header';
import Detalhes from './pages/Home/Detalhes';
import Home from './pages/Home/Home';
import CadastroReceita from './pages/Home/CadastroReceita';
import Receitas from "./pages/Home/Receitas"
import { ReceitaProvider } from './contexts/ReceitaContext'

function App() {
  return (
        <BrowserRouter>
    <Header />
    <ReceitaProvider>
    <Routes> {/* Troque o componente "Switch" por "Routes" */}
     {/* <Route path="/" exact element={<Home/>} />
      <Route path="/detalhes/:id" element={<Detalhes/>} />
  <Route path="/cadastro" element={<CadastroReceita/>} />*/}
  <Route path='/' element={<Receitas/>}/>
    </Routes>
    </ReceitaProvider>
</BrowserRouter>)
}

export default App;
