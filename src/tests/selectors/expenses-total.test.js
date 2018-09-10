import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('Should return 0 if empty array', () => {
    const expense = []
    const total = selectExpensesTotal(expense)
    expect(total).toBe(0)
})

test('Should return a single expense total', () => {
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(200)
})

test('Should return the total expense', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(114200)
})