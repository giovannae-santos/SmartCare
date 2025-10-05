import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import users from './users';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [erro, setErro] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setErro('E-mail inválido.');
      return;
    }

    if (senha.length < 8) {
      setErro('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    const usuarioValido = users.find(
      (user) => user.email === email && user.senha === senha
    );

    if (!usuarioValido) {
      setErro('Usuário ou senha incorretos.');
      return;
    }

    setErro('');
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-container">
          <h1>SmartCare</h1>
          <div className="form-container">
            <h3>Faça login na sua conta</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
              {erro && <p className="erro">{erro}</p>}
              <button type="submit" className="submit-button">Entrar</button>
            </form>
          </div>
        </div>
        <div className="right-container">
          <h1>Seja bem-vindo ao SmartCare!</h1>
          <p>Cuidar da sua saúde nunca foi tão simples! Crie sua conta e comece a monitorar seus dados com o apoio do seu médico.</p>
          <button onClick={handleLogin}>Criar nova conta</button>
        </div>
      </div>
    </div>
  );
}

export default Login;