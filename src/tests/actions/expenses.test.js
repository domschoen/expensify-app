import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New note value'}
    });
});


test('should setup add expense action object with provided values', () => {
//    const expenseData = {
//        description: 'Rent',
//        amount: 109500,
//        createdAt: 1000,
//        note: 'This was last mounths rent'
//   };
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData))
});

test('should add expense with defaults to database and store', () => {
});
//test('should setup add expense action object with default values', () => {
//    const action = addExpense();
//    expect(action).toEqual({
//        type: 'ADD_EXPENSE',
//        expense: {
//            id: expect.any(String),
//            description : '',
//            note : '',
//            amount : 0,
//            createdAt : 0
//        }
//    });
//});