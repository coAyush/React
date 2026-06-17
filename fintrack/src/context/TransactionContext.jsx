import React from 'react'
import { useState, useEffect, useContext, createContext } from 'react'

const TransactionContext = createContext()
export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("fintrack-transaction")
        return saved ? JSON.parse(saved) : []
    })
    useEffect(() => {
        localStorage.setItem("fintrack-transaction", JSON.stringify(transactions))
    }, [transactions])

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0)

    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)

    const totalBalance = totalIncome - totalExpense

    // Functions
    const addTransaction = (newTransaction) => {
        setTransactions(prev => [
            { ...newTransaction, id: Date.now() },
            ...prev
        ])
    }

    const deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(t => t.id !== id))
    }
    const value = {
        transactions,
        totalIncome,
        totalExpense,
        totalBalance,
        addTransaction,
        deleteTransaction,
    }
    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    )
}
export const useTransactions = () => useContext(TransactionContext)
