import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <br/>
    <ExpensesSummary />
    <ExpensesListFilters />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
