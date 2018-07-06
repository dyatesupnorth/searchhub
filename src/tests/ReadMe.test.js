import React from 'react'
import ReadMe from '../components/ReadMe'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import readme from './fixtures/readme'


Enzyme.configure({ adapter: new Adapter() });


test('should render Results with results', () => {
  const wrapper = shallow(<ReadMe readme={readme} />)
  expect(wrapper).toMatchSnapshot();

})

test('should render Results with empty message', () => {
  const wrapper = shallow(<ReadMe readme={{ }} />)
  expect(wrapper).toMatchSnapshot();
  
})





