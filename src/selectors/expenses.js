import moment from 'moment';
//Listing expenses (Sorting and filtering expenses)

export default (expenses, { text, sortBy, startDate, endDate }) => {
return expenses.filter((expense)=>{
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;//expense.createdAt >= startDate.valueOf();
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return textMatch && startDateMatch && endDateMatch;
}).sort((a, b)=>{
  if(sortBy === 'date'){
    return a.createdAt<b.createdAt ? 1:-1;
  }
  else
  if(sortBy === 'amount'){
    return a.amount<b.amount? 1:-1;
  }
});
};
