import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Results from '../components/Results'
import RepositoryDetail from '../components/RepositoryDetail'
import Enzyme, { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import github from './fixtures/github'
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

test('should render App ', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot();

})
describe('fetches a Github repository by search term', () => {


  it('should fetch the data', () => {

    const wrapper = shallow(<App />);

    // Setup the mock response to be from mock data
    const response = github
    // Mock the axios GET call
    axios.get = jest.fn(() => Promise.resolve(response));
 
    //Set new state to be search term...should be handled by input
    wrapper.setState({ searchTerm: 'react' })

     // Submit form using searchTerm
    wrapper.find('form').simulate('submit', {
      preventDefault: ()=>{
      }
      
    });
    // Check GET called correctly
    expect(axios.get).toBeCalledWith('https://api.github.com/search/repositories?q=react');
  
   });

 });