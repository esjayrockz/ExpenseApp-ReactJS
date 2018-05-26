import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', ()=>{
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ //toEqual instead of toBe for Objects/arrays
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', ()=>{
  const action = editExpense('136bcd', {note: 'Rent expense', amount: 13500});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '136bcd',
    updates: {
      note: 'Rent expensee',
      amount: 13500
    }
  });
});
