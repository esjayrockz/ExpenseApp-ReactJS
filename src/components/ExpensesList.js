import React from 'react';
import {connect} from 'react-redux';

const ExpensesList = (props) => (
  <div>
    <h1>List of Expenses</h1>
    {props.expenses.length}
  </div>
);

const ConnectedExpensesList = connect((state)=>{
  return {
    expenses: state.expenses
  };
})(ExpensesList);

export default ConnectedExpensesList;
