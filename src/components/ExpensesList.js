import React from 'react';
import {connect} from 'react-redux';

const ExpensesList = (props) => (
  <div>
    <h1>List of Expenses</h1>
    <p>{props.filters.text}</p>
    {props.expenses.length}
  </div>
);

const ConnectedExpensesList = connect((state)=>{
  return {
    expenses: state.expenses,
    filters: state.filters
  };
})(ExpensesList);

export default ConnectedExpensesList;
