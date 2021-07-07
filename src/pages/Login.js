import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
          />
        </label>
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Login;
