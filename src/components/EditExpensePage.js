import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');//We have access to history props for all components rendered in React Router
  };

  onClick = ()=>{
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense = {this.props.expense}
            onSubmit = {this.onSubmit}
          />
          <button className="button button--remove" onClick = {this.onClick}>Remove Expense</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, props) => ({//We have access to state and props here and then pass on new props above
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  });


const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
