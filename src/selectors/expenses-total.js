
export default (expenses = []) => {
  return expenses.map((expense) => expense.amount).reduce((total, eachExpense) => total + eachExpense , 0);
};
