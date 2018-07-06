import React from 'react'
import ReactDOM from 'react-dom'
import RepositoryDetail from '../components/RepositoryDetail'
import Enzyme, { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import github from './fixtures/github'


Enzyme.configure({ adapter: new Adapter() });


test('should render RepositoryDetail with a github repo', () => {
  const wrapper = shallow(<RepositoryDetail item={github.items[0]} />)
  expect(wrapper).toMatchSnapshot();

})

test('should render Results with empty message', () => {
  const wrapper = shallow(<RepositoryDetail item={{}} />)
  expect(wrapper).toMatchSnapshot();
  
})





