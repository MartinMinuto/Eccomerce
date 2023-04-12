import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className='ContainerLogin'>
      <form onSubmit={handleFormSubmit}>
        <label>
          <h2>Email:</h2>
          <input type="text" value={email} onChange={handleEmailChange} />
          <h2>Contraseña:</h2>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;


