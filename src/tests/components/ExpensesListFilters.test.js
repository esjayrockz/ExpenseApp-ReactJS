import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesListFilters } from '../../components/ExpensesListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpensesListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpensesListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesListFilters with alternate expenses correctly', () => {
  wrapper.setProps({ filters:  altFilters });
  expect(wrapper).toMatchSnapshot();
});
