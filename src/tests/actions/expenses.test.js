import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
     expensesData[id] = { description, note, amount, createdAt };
  })
  database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', ()=>{
  const action = removeExpense('123abc');
  expect(action).toEqual({ //toEqual instead of toBe for Objects/arrays
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startRemoveExpense({id: expenses[2].id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expenses[2].id
    });
    return database.ref(`expenses/${expenses[2].id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });

});

test('should setup edit expense action object', ()=>{
  const action = editExpense('136bcd', {note: 'Rent expense', amount: 13500});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '136bcd',
    updates: {
      note: 'Rent expense',
      amount: 13500
    }
  });
});

test('should edit expense on firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[1].id;
  const updates = {
    amount: 9000
  };
  store.dispatch(startEditExpense(id, updates)).then((done) => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect({id: snapshot.ref.key, ...snapshot.val()}).toEqual({
      //description: expenses[1].description
      ...expenses[1],
      ...updates
    });
    done();
  });
});

test('should setup add expense action object with provided values', ()=>{
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should setup set expenses action object', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});



// test('should setup add expense action object with default values', ()=>{
//
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: ''
//     }
//   });
// });
