import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// add an export to test the unconnect version
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // firebase push
        // attach then callback
            // dispatch action
            // redirect
        // is it the best place ? No not in component
        // => we are going to change the actions see actions/expenses.js
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);