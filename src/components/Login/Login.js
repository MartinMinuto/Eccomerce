import React, { useState } from 'react';
import './Login.css'

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
      <form className='FormLogin' onSubmit={handleFormSubmit}>
        <label>
          <h2>Email:</h2>
          <input className='InputLogin' type="text" value={email} onChange={handleEmailChange} />
          <h2>Contraseña:</h2>
          <input className='InputLogin' type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button className='Btn' type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;


