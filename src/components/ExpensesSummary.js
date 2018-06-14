import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummary = (props) => {

  const expenseWord = props.expensesCount === 1 ? 'expense':'expenses';
  const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00');
  return (
    <div>
      {
        <h2>Viewing {props.expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  const expensesTotal = getExpensesTotal(expenses);
  return {
    expensesCount: expenses.length,
    expensesTotal
  };
};

const connectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);

export default connectedExpensesSummary;
