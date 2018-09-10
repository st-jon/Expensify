import { addExpense, removeExpense, editExpense} from '../../actions/expenses'

test ('Should add an Expense', () => {
    const expenseData = {
        description: 'coffee',
        amount: 300,
        note: 'something',
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
test ('Should add an Expense with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
})

test ('Should remove an Expense', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test ('Should edit an Expense', () => {
    const action = editExpense('123abc', {description:'coffee', amount:300})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'coffee',
            amount: 300
        }
    })
})