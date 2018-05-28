import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default test values', ()=>{
  const state = filtersReducer(undefined, { type:'@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should setup sortBy to amount', () =>{
  const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () =>{
  const currentState = { text:'', startDate: undefined, endDate: undefined, sortBy: 'amount' };
  const action = { type:'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  });
});

test('should setup text filter', () =>{
  const text = 'rent';
  const state = filtersReducer(undefined, { type:'SET_TEXT_FILTER', text } );
  expect(state.text).toBe(text);
});

test('should setup startDate filter', () =>{
  const startDate = moment();
  const state = filtersReducer(undefined, { type:'SET_START_DATE', startDate  } );
  expect(state.startDate).toEqual(startDate);
});

test('should setup endDate filter', () =>{
  const endDate = moment();
  const state = filtersReducer(undefined, { type:'SET_END_DATE', endDate } );
  expect(state.endDate).toEqual(endDate);
});
