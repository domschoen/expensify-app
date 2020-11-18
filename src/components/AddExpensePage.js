import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

// add an export to test the unconnect version
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
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


const mapDispatchToProps = () => {
    return {
        onSubmit: (expense) => dispatch(addExpense(expense))
    };
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);