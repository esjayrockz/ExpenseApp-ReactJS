import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expenses = [];
  const result = getExpensesTotal(expenses);
  expect(result).toBe(0);
} );

test('should correctly add up a single expense', () => {
  const result = getExpensesTotal([expenses[1]]);
  expect(result).toBe(expenses[1].amount);
});


test('should correctly add up multiple expenses', () => {
  let sum = 0;
  for(let expense of expenses)
    sum = sum + expense.amount;

  const result = getExpensesTotal(expenses);
  expect(result).toBe(sum);
});
