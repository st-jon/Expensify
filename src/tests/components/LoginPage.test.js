import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { LoginPage } from '../../components/LoginPage'

test('Should render Login page', () => {
    const wrapper = shallow(<LoginPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should call startLogin on button click', () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})