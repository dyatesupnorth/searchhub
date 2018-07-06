import React, { Component } from 'react';
import Results from './components/Results'
import RepositoryDetail from './components/RepositoryDetail'
import axios from 'axios'
class App extends Component {
   // Set initial state, instead of constructor, reference 'this.props'
   state = {
      result : {
        items:[]
      },
      loading: false,
      error: null,
      searchTerm: ''
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log('in handle submit');
    this.setState({
      loading: true
    });
    axios.get(`https://api.github.com/search/repositories?q=${this.state.searchTerm}`)
      .then(res => {
         // Transform the raw data by extracting the nested posts
         const items = res.data.items.map(obj => {
           return obj
         });

         // Update state to trigger a re-render.
         // Clear any errors, and turn off the loading indiciator.
         this.setState({
           result:{items},
           loading: false,
           error: null
         });
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
      <Results results={this.state.result}/>
      <RepositoryDetail item={{ }}/>
      </div>
    );
  }
}

export default App;
