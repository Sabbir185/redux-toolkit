const store = require('./redux/store');
const {counterActions} = require('./redux/features/counter/counterSlice');
const {dynamicCounterActions} = require('./redux/features/dynamicCounter/dynamicCounterSlice');

// initialState
// console.log(`initialState : ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
});


// counter dispatch actions
store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());


// dynamic counter dispatch actions
// store.dispatch(dynamicCounterActions.increment(2));
// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.decrement(2));