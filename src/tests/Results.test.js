import React from 'react'
import ReactDOM from 'react-dom'
import Results from '../components/Results'
import Enzyme, { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

it('should render initial state', () => {
  // Shallow render
  const wrapper = shallow(<Results />);
  
  expect(toJson(wrapper)).toMatchSnapshot();
  // Expect snapshot to match
});

it('should render error state', () => {
  // Shallow render

  // Set error state

  // Expect snapshot to match
});






