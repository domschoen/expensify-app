// Timestamps in milliseconds
// January 1st 1970 (unix epoch)
// 34000, 10 , -235

import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDataMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;

        // figure out if expense.description as the text variable string inside of it
        // use includes
        // convert both string to lower case
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDataMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
        // bigger first
            return a.amount < b.amount ? 1 : -1;
        }
    });
};