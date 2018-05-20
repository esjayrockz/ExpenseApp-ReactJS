import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <br/>
    <ExpensesListFilters />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
