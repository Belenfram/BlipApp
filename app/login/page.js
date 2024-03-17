import React from 'react';

const LoginForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Iniciar sesión</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" style={{ width: '100%', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" style={{ width: '100%', padding: '5px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;