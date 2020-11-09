import { createStore } from 'redux';

const add = ({a, b }) => {
    return a + b;
};

console.log(add({a: 1, b: 2}));

const incrementCount = ({ incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
    }
);

const decrementCount = ({ decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
    }
);
const setCount = ({ count }) => ({
        type: 'SET',
        count
    }
);
const resetCount = () => ({
        type: 'RESET'
    }
);

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action (we use them and return a new state)

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                    count: state.count + action.incrementBy
                    }
        case 'DECREMENT':
            return {
                    count: state.count - action.decrementBy
                    }
        case 'RESET':
            return {
                    count: 0
                    }
        case 'SET':
            return {
                    count: action.count
                    }
        default:
            return state;
    }
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));

