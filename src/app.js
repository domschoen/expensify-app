import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promises';

const store = configureStore();

// addExpense -> Water bill
//store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
// addExpense -> Gas Bill
//store.dispatch(addExpense({ description: 'Gas bill', createdAt:1000}));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
// setTextFilter -> bill (2 items) -> water (1 item)
//store.dispatch(setTextFilter('water'));
// getVisibleExpenses -> print visibles ones to screen

/*setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000)*/

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
//console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'));
