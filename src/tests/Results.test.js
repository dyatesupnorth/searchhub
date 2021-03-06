import React from 'react'
import ReactDOM from 'react-dom'
import Results from '../components/Results'
import Enzyme, { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import github from './fixtures/github'


Enzyme.configure({ adapter: new Adapter() });


test('should render Results with results', () => {
  const wrapper = shallow(<Results results={github} />)
  expect(wrapper).toMatchSnapshot();

})

test('should render Results with empty message', () => {
  const wrapper = shallow(<Results results={{items:[]}} />)
  expect(wrapper).toMatchSnapshot();
  
})





