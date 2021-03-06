import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {

  //In order to use props in setting default state, we need to use this constructor method
  constructor(props){
    super(props);
    this.state = {
      description : props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(), //moment will set the initial date for react-date date picker
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
    {
      this.setState(()=>({amount}));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){  //This condition is to make sure that the user cant select and delete the date
      this.setState(()=>({createdAt}));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(()=>({calendarFocused: focused}));
  };

  onSubmit = (e) => {
    e.preventDefault(); //prevents full page refresh after submitting form
    if(!this.state.description || !this.state.amount){
      this.setState(()=>({error: 'Please provide description and amount.'}));
    }
    else {
      this.setState(()=>({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render(){

    return (
        <form className="form" onSubmit = {this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            className="text-input"
            autoFocus
            value = {this.state.description}
            onChange = {this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value = {this.state.amount}
            onChange = {this.onAmountChange}
          />
          <SingleDatePicker
            date = {this.state.createdAt}
            onDateChange = {this.onDateChange}
            focused = {this.state.calendarFocused}
            onFocusChange = {this.onFocusChange}
            id = "createdAt"
            numberOfMonths = {1}
            isOutsideRange = {() => false}
           />
          <textarea
            placeholder="Add a note for your expense (optional)"
            className="textarea"
            value = {this.state.note}
            onChange = {this.onNoteChange}
            >
          </textarea>
          <div>
            <button className="button button--form">{this.props.expense ? 'Update Expense' : 'Add Expense'}</button>
          </div>
        </form>
    )
  }
}
