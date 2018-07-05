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
        // Transform the raw data by extracting the nested posts
        // const posts = res.data.data.children.map(obj => obj.data);

        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        // this.setState({
        //   posts,
        //   loading: false,
        //   error: null
        // });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        // this.setState({
        //   loading: false,
        //   error: err
        // });
      });
  }
  render() {
    return (
      <div className="App">
      {/* Add (e) for preventDefault  on form submit*/}
      <form onSubmit={((e) => this.handleSubmit(e) )}>  
        <input type="text" placeholder="Search a repo..." value={this.props.searchTerm}/>
        <button>Search</button>
      </form>
      <Results results={this.props.results}/>
      <RepositoryDetail />
      </div>
    );
  }
}

export default App;
