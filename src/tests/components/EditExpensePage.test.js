import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, expense, history, wrapper;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  expense = expenses[1];
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      expense={expense}
      history={history}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').prop('onClick')();
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
