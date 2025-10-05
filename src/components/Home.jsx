import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [dados, setDados] = useState([]);

  const [peso, setPeso] = useState('');
  const [oxigenacao, setOxigenacao] = useState('');
  const [glicose, setGlicose] = useState('');
  const [batimentos, setBatimentos] = useState('');
  const [sintomas, setSintomas] = useState('');

  const adicionarRegistro = (e) => {
    e.preventDefault();
    const novoRegistro = {
      id: Date.now(),
      peso,
      oxigenacao,
      glicose,
      batimentos,
      sintomas,
    };
    setDados([...dados, novoRegistro]);
    setPeso('');
    setOxigenacao('');
    setGlicose('');
    setBatimentos('');
    setSintomas('');
  };

  const removerRegistro = (id) => {
    const novaLista = dados.filter((item) => item.id !== id);
    setDados(novaLista);
  };

  return (
    <div className="home-page">
      <header className="top-header">
        <div className="header-content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5405/5405432.png"
            alt="Ícone de saúde"
            className="header-icon"
          />
          <span className="header-title">SmartCare</span>
        </div>
      </header>

      <div className="home-page">
        <h1>Monitoramento de Saúde</h1>
        {/* Formulário de entrada */}
      </div>
      <form onSubmit={adicionarRegistro} className="form-saude">
        <h3>Adicionar Parâmetros Médicos</h3>
        <input
          type="text"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Oxigenação (%)"
          value={oxigenacao}
          onChange={(e) => setOxigenacao(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Glicose (mg/dL)"
          value={glicose}
          onChange={(e) => setGlicose(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Batimentos (bpm)"
          value={batimentos}
          onChange={(e) => setBatimentos(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Sintomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <table className="tabela-saude">
        <thead>
          <tr>
            <th>Código</th>
            <th>Peso</th>
            <th>Oxigenação</th>
            <th>Glicose</th>
            <th>Batimentos</th>
            <th>Sintomas</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.peso}</td>
              <td>{item.oxigenacao}</td>
              <td>{item.glicose}</td>
              <td>{item.batimentos}</td>
              <td>{item.sintomas}</td>
              <td>
                <button onClick={() => removerRegistro(item.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;