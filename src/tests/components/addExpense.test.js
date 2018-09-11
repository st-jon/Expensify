import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpense'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper
beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('Should render AddExpensePage', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})