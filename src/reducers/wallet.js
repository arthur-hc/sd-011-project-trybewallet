// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// const response = {
//   USD: {
//     code: 'USD',
//     codein: 'BRL',
//     name: 'Dólar Comercial',
//     high: '5.5765',
//     low: '5.5739',
//     varBid: '0',
//     pctChange: '0',
//     bid: '5.5735',
//     ask: '5.575',
//     timestamp: '1601982529',
//     create_date: '2020-10-06 08:08:50',
//   },
//   USDT: {
//     code: 'USD',
//     codein: 'BRLT',
//     name: 'Dólar Turismo',
//     high: '5.705',
//     low: '5.705',
//     varBid: '0',
//     pctChange: '0',
//     bid: '5.54',
//     ask: '5.87',
//     timestamp: '1601926620',
//     create_date: '2020-10-06 04:56:51',
//   },
//   CAD: {
//     code: 'CAD',
//     codein: 'BRL',
//     name: 'Dólar Canadense',
//     high: '4.2104',
//     low: '4.1992',
//     varBid: '0.0022',
//     pctChange: '0.05',
//     bid: '4.2023',
//     ask: '4.2041',
//     timestamp: '1601982920',
//     create_date: '2020-10-06 08:15:22',
//   },
//   EUR: {
//     code: 'EUR',
//     codein: 'BRL',
//     name: 'Euro',
//     high: '6.5787',
//     low: '6.5591',
//     varBid: '-0.0006',
//     pctChange: '-0.01',
//     bid: '6.5645',
//     ask: '6.5685',
//     timestamp: '1601982922',
//     create_date: '2020-10-06 08:15:23',
//   },
//   GBP: {
//     code: 'GBP',
//     codein: 'BRL',
//     name: 'Libra Esterlina',
//     high: '7.2512',
//     low: '7.2014',
//     varBid: '-0.0266',
//     pctChange: '-0.37',
//     bid: '7.2054',
//     ask: '7.209',
//     timestamp: '1601982921',
//     create_date: '2020-10-06 08:15:22',
//   },
//   ARS: {
//     code: 'ARS',
//     codein: 'BRL',
//     name: 'Peso Argentino',
//     high: '0.0725',
//     low: '0.0724',
//     varBid: '0',
//     pctChange: '0.07',
//     bid: '0.0724',
//     ask: '0.0725',
//     timestamp: '1601982529',
//     create_date: '2020-10-06 08:08:50',
//   },
//   BTC: {
//     code: 'BTC',
//     codein: 'BRL',
//     name: 'Bitcoin',
//     high: '60999.9',
//     low: '60058.1',
//     varBid: '-574.4',
//     pctChange: '-0.94',
//     bid: '60202.2',
//     ask: '60204',
//     timestamp: '1601982915',
//     create_date: '2020-10-06 08:15:15',
//   },
//   LTC: {
//     code: 'LTC',
//     codein: 'BRL',
//     name: 'Litecoin',
//     high: '265',
//     low: '257',
//     varBid: '-4.11',
//     pctChange: '-1.55',
//     bid: '259.43',
//     ask: '260.21',
//     timestamp: '1601982924',
//     create_date: '2020-10-06 08:15:24',
//   },
//   JPY: {
//     code: 'JPY',
//     codein: 'BRL',
//     name: 'Iene Japonês',
//     high: '0.05283',
//     low: '0.0527',
//     varBid: '0',
//     pctChange: '0',
//     bid: '0.05274',
//     ask: '0.05277',
//     timestamp: '1601982926',
//     create_date: '2020-10-06 08:15:26',
//   },
//   CHF: {
//     code: 'CHF',
//     codein: 'BRL',
//     name: 'Franco Suíço',
//     high: '6.1011',
//     low: '6.0853',
//     varBid: '0.006',
//     pctChange: '0.1',
//     bid: '6.0913',
//     ask: '6.0956',
//     timestamp: '1601982921',
//     create_date: '2020-10-06 08:15:23',
//   },
//   AUD: {
//     code: 'AUD',
//     codein: 'BRL',
//     name: 'Dólar Australiano',
//     high: '4.019',
//     low: '3.9832',
//     varBid: '-0.0171',
//     pctChange: '-0.43',
//     bid: '3.9828',
//     ask: '3.9867',
//     timestamp: '1601982919',
//     create_date: '2020-10-06 08:15:21',
//   },
//   CNY: {
//     code: 'CNY',
//     codein: 'BRL',
//     name: 'Yuan Chinês',
//     high: '0.8209',
//     low: '0.8209',
//     varBid: '-0.0161',
//     pctChange: '-1.92',
//     bid: '0.8207',
//     ask: '0.821',
//     timestamp: '1601982904',
//     create_date: '2020-10-06 08:15:04',
//   },
//   ILS: {
//     code: 'ILS',
//     codein: 'BRL',
//     name: 'Novo Shekel Israelense',
//     high: '1.638',
//     low: '1.6322',
//     varBid: '-0.0266',
//     pctChange: '-1.6',
//     bid: '1.6355',
//     ask: '1.636',
//     timestamp: '1601982546',
//     create_date: '2020-10-06 08:09:06',
//   },
//   ETH: {
//     code: 'ETH',
//     codein: 'BRL',
//     name: 'Ethereum',
//     high: '6480',
//     low: '6480',
//     varBid: '0',
//     pctChange: '0',
//     bid: '1886.01',
//     ask: '5184',
//     timestamp: '1601972886',
//     create_date: '2020-10-06 05:28:06',
//   },
//   XRP: {
//     code: 'XRP',
//     codein: 'BRL',
//     name: 'Ripple',
//     high: '1.45',
//     low: '1.37',
//     varBid: '-0.01',
//     pctChange: '-0.65',
//     bid: '1.41',
//     ask: '1.41',
//     timestamp: '1601982925',
//     create_date: '2020-10-06 08:15:26',
//   },
// };
// const mock = {
//   id: 999,
//   value: '20',
//   currency: 'EUR',
//   method: 'Dinheiro',
//   tag: 'Trabalho',
//   description: 'Vinte euros',
//   exchangeRates: response,
// };

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  id: 0,
  editMode: false,
};
const REQUEST_API = 'REQUEST_API';
const GET_CURRENCIES = 'GET_CURRENCIES';
const ADD_EXPENSE = 'ADD_EXPENSE';
const DEL_EXPENSE = 'DEL_EXPENSE';
const EDIT_ON = 'EDIT_ON';
const EDIT_OFF = 'EDIT_OFF';
const SAVE_EDIT = 'SAVE_EDIT';

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, isLoading: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.data, isLoading: false };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense], id: state.id + 1 };
  case DEL_EXPENSE:
    return { ...state,
      expenses: state.expenses
        .filter((expense) => expense.id !== action.id) };
  case EDIT_ON:
    return { ...state, editMode: true };
  case EDIT_OFF:
    return { ...state, editMode: false };
  case SAVE_EDIT:
    return { ...state, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
};

export default wallet;
