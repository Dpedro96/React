import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReceitas } from '../../contexts/ReceitaContext';

function CadastroReceita() {
    const [nome, setNome] = useState('');
    const [secoes, setSecoes] = useState([{ nome: '', conteudo: [''] }]);
    const { receitas, setReceitas } = useReceitas();
    const navigate = useNavigate();

    const handleSalvar = () => {
        // Aqui, suponho que você tem uma função/API para adicionar a receita.
        const novaReceita = {
            nome,
            secao: secoes
        };
    
        // Atualize a lista de receitas no contexto
        setReceitas([novaReceita, ...receitas]);

        // Redirecionar de volta para a página Home
        navigate('/');
    };

    return (
        <div>
            <h2>Cadastrar Nova Receita</h2>
            <label>
                Nome:
                <input value={nome} onChange={e => setNome(e.target.value)} />
            </label>

            {secoes.map((secao, idx) => (
                <div key={idx}>
                    <label>
                        Nome da Seção:
                        <input value={secao.nome} onChange={e => {
                            const newSecoes = [...secoes];
                            newSecoes[idx].nome = e.target.value;
                            setSecoes(newSecoes);
                        }} />
                    </label>
                    {secao.conteudo.map((conteudo, cIdx) => (
                        <label key={cIdx}>
                            Conteúdo:
                            <input value={conteudo} onChange={e => {
                                const newSecoes = [...secoes];
                                newSecoes[idx].conteudo[cIdx] = e.target.value;
                                setSecoes(newSecoes);
                            }} />
                        </label>
                    ))}
                </div>
            ))}

            <button onClick={handleSalvar}>Salvar</button>
        </div>
    );
}

export default CadastroReceita;
