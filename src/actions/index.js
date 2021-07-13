function getEmail(email) {
  return {
    type: 'ADD_EMAIL',
    email,
  };
}

export default getEmail;

export const requestCurrencies = (payload) => ({
  type: 'REQUEST_CURRENCIES',
  payload,
});

export const fetchCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((currencies) => dispatch(requestCurrencies(currencies)));

export const sendWalletInfo = (state) => ({
  type: 'SEND_INFO',
  state,
});

export const deleteExpense = (payload) => ({
  type: 'DELETE_EXPENSE',
  payload,
});
