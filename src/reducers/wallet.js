// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case '':
    break;
  default:
    return state;
  }
}
