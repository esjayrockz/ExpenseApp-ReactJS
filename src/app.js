import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);

});

store.dispatch(addExpense({description:'Water bill', amount: 5000, createdAt: 5000}));
store.dispatch(addExpense({description:'Gas bill', amount: 3000, createdAt: 10000}));
store.dispatch(addExpense({description:'Rent', amount: 109500, createdAt: 50000}));
//store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
