import React, { Component } from 'react';
import Results from './components/Results'
import RepositoryDetail from './components/RepositoryDetail'
import ReadMe from './components/ReadMe'
import {isEmpty} from './helpers'
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
      selectedItem: {},
      readme: {}
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
        this.setState({
          error: err
        });
      });
  }
  getReadme = (repo) => {
    console.log('repo: ', repo);
    axios.get(`https://api.github.com/repos/${repo.full_name}/readme`)
      .then(res => {
        console.log('res: ', res);
        
      })
      .catch(err => {
        console.log('err: ', err);
        this.setState({
          error: err
        });
      });
  }
  
  selectItem = (selectedItem) => {
   
    this.setState({selectedItem})

    /* Tightly coupled here, any time a Repo gets called, it'll fire off a call for the readme. 
     This is ok at the minute because the app is really small but might want to sort out the
     way we call the readme in the future.
     */
    this.getReadme(selectedItem)
  }
  onSearchChange = (e) => {
    const searchTerm = e.target.value;
    this.setState(() => ({searchTerm}));
  }
  render() {
    return (
      <div className="App">
      {/* Add (e) for preventDefault  on form submit*/}
      {!isEmpty(this.state.error) && <p>{this.state.error.response.data.message}</p>}
      <form onSubmit={(e) => this.handleSubmit(e) }>  
        <input type="text" placeholder="Search a repo..." onChange={this.onSearchChange} value={this.state.searchTerm}/>
        <button>Search</button>
      </form>
      <Results results={this.state.result} selectItem={this.selectItem}/>
      {!isEmpty(this.state.selectedItem) && <RepositoryDetail item={this.state.selectedItem}  />}
      {!isEmpty(this.state.readme) && <ReadMe readme={this.state.readme} />}
      </div>
    );
  }
}

export default App;
