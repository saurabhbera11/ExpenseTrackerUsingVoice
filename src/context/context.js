import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer.js';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 4000, "category": "Phone", "type": "Expense", "date": "2021-07-01", "id": "c949bab7-536f-443b-886d-9882e37fc86b" }, { "amount": 1000, "category": "Clothes", "type": "Expense", "date": "2021-07-01", "id": "72dc9f89-ffcf-4bae-a374-c2bbc9192c8f" }, { "amount": 450, "category": "Deposits", "type": "Income", "date": "2021-07-01", "id": "1f3954b6-0977-48ff-bbee-e8eeab3406fb" }, { "amount": 30000, "category": "Investments", "type": "Income", "date": "2021-07-01", "id": "8def14cd-2466-496a-9f60-58ab667d76a6" }, { "amount": 200, "category": "Car", "type": "Expense", "date": "2021-07-01", "id": "6e1f1f48-badf-4801-a1c8-d28671dbe159" }, { "amount": 20000, "category": "Salary", "type": "Income", "date": "2021-07-01", "id": "dc77670d-c3dc-4655-be70-da9a063d6823" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    // Action Creators
    const deleteTransactions = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    const addTransactions = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    const balance = transactions.reduce((acc, current) => {
        return (current.type === 'Expense' ? acc - current.amount : acc + current.amount)
    }, 0);
    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransactions,
            addTransactions,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}