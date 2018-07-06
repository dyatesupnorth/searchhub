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
      searchTerm: '',
      selectedItem: {}
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log('in handle submit');
    this.setState({
      loading: true
    });
    axios.get(`https://api.github.com/search/repositories?q=${this.state.searchTerm}`)
      .then(res => {
         // Transform the raw data by extracting the nested items
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
  selectItem = (selectedItem) => {
    console.log('select item : ', selectedItem);
    this.setState({selectedItem})
  }
  onSearchChange = (e) => {
    const searchTerm = e.target.value;
    this.setState(() => ({searchTerm}));
  }
  render() {
    return (
      <div className="App">
      {/* Add (e) for preventDefault  on form submit*/}
      <form onSubmit={(e) => this.handleSubmit(e) }>  
        <input type="text" placeholder="Search a repo..." onChange={this.onSearchChange} value={this.state.searchTerm}/>
        <button>Search</button>
      </form>
      <Results results={this.state.result} selectItem={this.selectItem}/>
      <RepositoryDetail item={this.state.selectedItem}  />
      </div>
    );
  }
}

export default App;
