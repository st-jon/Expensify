import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { NotFoundPage } from '../../components/NotFound'

test('Should render NotFound ', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})