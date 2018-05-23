import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpensesListFilters extends React.Component {

  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(()=> ({calendarFocused}));
  };

  render(){
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange ={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />

        <select
          value={this.props.filters.sortBy}
          onChange={(e)=>{
            e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>


        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start_date"
          endDate={this.props.filters.endDate}
          endDateId="end_date"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={focusedInput => this.setState({ calendarFocused: focusedInput })}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpensesListFilters);
