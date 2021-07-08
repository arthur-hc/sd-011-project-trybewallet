import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

function Login(props) {
  const { setLogin } = props;
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  // O use State consultei sua sintaxe aqui: https://reactjs.org/docs/hooks-state.html
  // O useEffect consultei sua sintaxe aqui: https://reactjs.org/docs/hooks-effect.html
  // O useHistory para redirecionar a pagina pelo botão eu consultei a sintaxe aqui: https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
  // Ja o Regex para a validação do email eu usei este link: https://learnetto.com/blog/react-form-validation

  const routeChange = () => {
    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const six = 6;
    const passwordValid = password.length >= six;
    if (emailValid && passwordValid) setDisabled(false);
    else setDisabled(true);
  };

  const redirectPath = () => {
    const path = '/carteira';
    setLogin(email);
    history.push(path);
  };

  useEffect(() => {
    routeChange();
  }, [email, password]);

  return (
    <div>
      <input
        data-testid="email-input"
        type="text"
        value={ email }
        placeholder="Digite seu Email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        data-testid="password-input"
        type="password"
        value={ password }
        placeholder="Digite sua senha"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button type="button" onClick={ redirectPath } disabled={ disabled }>Entrar</button>
    </div>);
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setLogin: PropTypes.string.isRequired,
};
