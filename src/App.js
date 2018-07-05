import React, { Component } from 'react';
import Results from './components/Results'
import RepositoryDetail from './components/RepositoryDetail'
import axios from 'axios'
class App extends Component {
   // Set initial state, instead of constructor, reference 'this.props'
   state = {
      results : [],
      loading: false,
      error: null,
      searchTerm: ''
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log('in handle submit');
    axios.get(`https://api.github.com/search/repositories?q=${this.state.searchTerm}`)
      .then(res => {
        console.log('res: ', res);
        
      })
      .catch(err => {
        console.log('err: ', err);
       
      });
  }
  onSearchChange = (e) => {
    const searchTerm = e.target.value;
    this.setState(() => ({searchTerm}));
  }
  render() {
    return (
      <div className="App">
      {/* Add (e) for preventDefault  on form submit*/}
      <form onSubmit={((e) => this.handleSubmit(e) )}>  
        <input type="text" placeholder="Search a repo..." onChange={this.onSearchChange} value={this.state.searchTerm}/>
        <button>Search</button>
      </form>
      <Results results={this.props.results}/>
      <RepositoryDetail />
      </div>
    );
  }
}

export default App;
