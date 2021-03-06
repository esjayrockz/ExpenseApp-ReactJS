import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {

  const expenseWord = props.expensesCount === 1 ? 'expense':'expenses';
  const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
          <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
          <div className="page-header__actions">
            <Link to="/create" className="button button--form">Create Expense</Link>
          </div>
      </div>
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
