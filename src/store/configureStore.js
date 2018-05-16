import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//Creating store
export default () => {
  const store = createStore(combineReducers({ //Combine multiple reducers
    expenses: expensesReducer,
    filters: filtersReducer
  })
  );
  return store;
};
