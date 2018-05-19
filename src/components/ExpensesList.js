import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import visibleExpenses from '../selectors/expenses';

const ExpensesList = (props) => (
  <div>
    <h1>List of Expenses</h1>

    {props.expenses.map((expense, index)=>(//map will take array of objects and return array of instances of expenseList item
      <ExpenseItem
        key = {expense.id}
        {...expense}
      />
    ))}
  </div>
);

const ConnectedExpensesList = connect((state)=>{
  return {
    expenses: visibleExpenses(state.expenses, state.filters)
  };
})(ExpensesList);

export default ConnectedExpensesList;
