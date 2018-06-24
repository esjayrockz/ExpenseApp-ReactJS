import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    amount: 1500,
    description: 'Food',
    note: '',
    createdAt: 15000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
  const expense = {
    id: '2',
    updates: {
      amount:1800,
      description: 'Food items'
  }
};
  const action = {
    type: 'EDIT_EXPENSE',
    id: expense.id,
    updates: expense.updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], {...expenses[1], ...expense.updates}, expenses[2]]);
});

test('should not edit expenses if id not found', () => {
  const expense = {
    id: '-4',
    updates: {
      amount:1800,
      description: 'Food items'
  }
};
  const action = {
    type: 'EDIT_EXPENSE',
    id: expense.id,
    updates: expense.updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const expense = {
    id: '4',
    amount: 1500,
    description: 'Food',
    note: '',
    createdAt: 15000
  };
  const action = {
    type: 'SET_EXPENSES',
    expenses
  };
  const state = expensesReducer([...expense], action);
  expect(state).toEqual(expenses);
});
