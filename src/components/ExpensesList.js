import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import visibleExpenses from '../selectors/expenses';

export const ExpensesList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>

    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ):
      (
        props.expenses.map((expense, index)=>(//map will take array of objects and return array of instances of expenseList item
          <ExpenseItem
            key = {expense.id}
            {...expense}
          />
        ))
      )
    }

  </div>
);

const mapStateToProps = (state)=>{
  return {
    expenses: visibleExpenses(state.expenses, state.filters)
  };
};

const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList);

export default ConnectedExpensesList;
