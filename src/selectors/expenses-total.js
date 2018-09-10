const selectExpensesTotal = (expenses) => {
    const reducer = (a, b) => a + b
    return expenses
    .map((expense) => expense.amount)
    .reduce(reducer, 0)
}

export default selectExpensesTotal