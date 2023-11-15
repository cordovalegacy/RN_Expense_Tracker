
import { calculate } from "../functions/calculate"

export const income = [
    {
        amount: 3100,
        name: "WM"
    },
    {
        amount: 1270,
        name: "Perdoceo"
    },
    {
        amount: 8650,
        name: "Ramsey"
    }
]

export const expenses = [
    {
        amount: 3500,
        name: "Week 1"
    },
    {
        amount: 770,
        name: "Week 2"
    },
    {
        amount: 1280,
        name: "Week 3"
    },
    {
        amount: 1050,
        name: "Week 4"
    },
]

export const incomeTotal = calculate(income)
export const expenseTotal = calculate(expenses)
export const grandTotal = (incomeTotal - expenseTotal)

export const balance = [
    {
        amount: incomeTotal,
        name: "Income"
    },
    {
        amount: expenseTotal,
        name: "Expenses"
    }
]
