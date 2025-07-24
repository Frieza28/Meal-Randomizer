import { useState } from 'react';
import './Randomizer.css';

function Randomizer() {
  const [modo, setModo] = useState('surpresa'); // modo atual
  const [resultado, setResultado] = useState(null);
  const [lista, setLista] = useState('');
  const [filtros, setFiltros] = useState({
    tipo: '',
    tempo: '',
    categoria: ''
  });

  const fetchSurpresa = async () => {
    const res = await fetch('http://localhost:3001/randomizer/surpresa');
    const data = await res.json();
    setResultado(data);
  };

  const fetchLista = () => {
    const items = lista.split('\n').filter(item => item.trim() !== '');
    if (items.length === 0) return;
    const random = items[Math.floor(Math.random() * items.length)];
    setResultado({ nome: random });
  };

  const fetchEscolha = async () => {
    // Bloquear quando nenhum filtro for selecionado
    if (!filtros.tipo && !filtros.tempo && !filtros.categoria) {
      setResultado({ nome: 'Nenhuma refeição encontrada.' });
      return;
    }
  
    const res = await fetch('http://localhost:3001/randomizer/filtrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filtros)
    });
  
    const data = await res.json();
  
    if (data.length > 0) {
      const random = data[Math.floor(Math.random() * data.length)];
      setResultado(random);
    } else {
      setResultado({ nome: 'Nenhuma refeição encontrada.' });
    }
  };



  return (
    <div className="randomizer-page">
      <h1>Escolhe o Modo</h1>
      <div className="modo-buttons">
        <button onClick={() => { setModo('surpresa'); setResultado(null); }}>Surpresa Total</button>
        <button onClick={() => { setModo('lista'); setResultado(null); }}>Modo Lista</button>
        <button onClick={() => { setModo('escolha'); setResultado(null); }}>Modo Escolha</button>
      </div>

      <div className="modo-container">
        {modo === 'surpresa' && (
          <div>
            <p>Clica para receber uma refeição aleatória:</p>
            <button onClick={fetchSurpresa}>Sortear</button>
          </div>
        )}

        {modo === 'lista' && (
          <div className="modo-lista">
            <p>Insere uma lista (1 item por linha):</p>
            <textarea
              rows="5"
              value={lista}
              onChange={(e) => setLista(e.target.value)}
            />
            <button onClick={fetchLista} className="sortear-btn">Sortear</button>
          </div>
        )}

        {modo === 'escolha' && (
          <div className="filtros">
            <select onChange={(e) => setFiltros({ ...filtros, tipo: e.target.value })}>
              <option value="">Tipo</option>
              <option value="Carne">Carne</option>
              <option value="Peixe">Peixe</option>
              <option value="Vegetariano">Vegetariano</option>
            </select>

            <select onChange={(e) => setFiltros({ ...filtros, tempo: e.target.value })}>
              <option value="">Tempo</option>
              <option value="Rápido">Rápido</option>
              <option value="Normal">Normal</option>
            </select>

            <select onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}>
              <option value="">Categoria</option>
              <option value="Grelhado">Grelhado</option>
              <option value="Frito">Frito</option>
              <option value="Forno">Forno</option>
            </select>

            <button onClick={fetchEscolha}>Filtrar</button>
          </div>
        )}
      </div>

      {resultado && (
        <div className="resultado">
          <h3>Resultado:</h3>
          <p>{resultado.nome}</p>
        </div>
      )}
    </div>
  );
}

export default Randomizer;
