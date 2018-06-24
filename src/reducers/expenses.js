const expensesReducerDefaultState = []; // Create variable to store default values

export default (state = expensesReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
    return [...state, action.expense]; //using spread operator or concat instead of push to avoid changing original state
    //returning an array with updated expenses as the expenses state is an array and not an object

    case 'REMOVE_EXPENSE':
    return state.filter(({id}) => id !== action.id);

    case 'EDIT_EXPENSE':
    return state.map((expense)=>{
      if(expense.id === action.id){
        return {
          ...expense,
          ...action.updates
        };
      }
        else
        return expense;
      }
    );

    case 'SET_EXPENSES':
    return action.expenses;

    default:
    return state;
  }
};
