import {createStore} from 'redux';


const incrementCount = ({incrementBy} = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const set = ({count}) => ({
  type: 'SET',
  count
});

const reset = () => ({
  type: 'RESET'
});

const countReducer = (state = {count : 0}, action)=>{

  switch(action.type){
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    };
    case 'SET':
    return {
      count: action.count
    };
    case 'RESET':
    return {
      count: 0
    };
    default:
    return state;
  }
};

const store = createStore(countReducer);

store.subscribe(()=>{
  console.log(store.getState());
});


// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
//
// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(incrementCount({ incrementBy: 5})); //preferring action generators instead of inline action objects

store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(set({ count: 101 }));
