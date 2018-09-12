import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import LoadingPage from '../../components/LoadingPage'

test('Should render the loadingPage', () => {
    const wrapper = shallow(<LoadingPage/>)
    expect(wrapper).toMatchSnapshot()
})