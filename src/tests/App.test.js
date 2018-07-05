import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Enzyme, { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
import github from './fixtures/github'
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('fetches a Github repository by search term', () => {


  it('should fetch the data', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
    const response = github
   // Mock the axios GET call
   axios.get = jest.fn(() => Promise.resolve(response));
 
  //Set new state to be search term...
  wrapper.setState({ searchTerm: 'react' })

  // Submit form using searchTerm

   wrapper.find('form').simulate('submit', {
    preventDefault: ()=>{}
    });

   // Check GET called correctly
   expect(axios.get).toBeCalledWith('https://api.github.com/search/repositories?q=react');
  
   });
   it('should render a list of results', () => {
      // Results component should be rendered with Search results
   });
   it('should render repository information when a repository is selected', () => {
     // RepositoryDetail component should be rendered with project detail when component selected
   });
 
 });