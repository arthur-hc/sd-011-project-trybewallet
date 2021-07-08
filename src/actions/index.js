// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

const fetchCurrenciesStart = () => ({
  type: REQUEST_CURRENCIES,
});

const fetchCurrenciesSuccess = (data) => ({
  type: RECEIVE_CURRENCIES,
  currencies: Object.keys(data).filter((currency) => currency !== 'USDT'),
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(fetchCurrenciesStart());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(fetchCurrenciesSuccess(json)));
  };
}

export default saveEmail;
