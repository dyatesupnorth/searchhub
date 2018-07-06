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
    axios.get(`https://api.github.com/repos/${repo.full_name}/readme`)
      .then(res => {
        this.setState({
          readme: res.data
        });
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
      <div className="container mx-auto">
        <h1 className="text-center uppercase text-grey my-4">Search...hub</h1>
        {!isEmpty(this.state.error) && <p>{this.state.error.response.data.message}</p>}
        <form onSubmit={(e) => this.handleSubmit(e) } className="w-full mx-auto max-w-md">
          <div className="flex justify-center items-center border-b border-b-2 border-teal py-2">
            <input className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight"
            type="text" 
            placeholder="Search for a Github repo..." 
            onChange={this.onSearchChange} 
            value={this.state.searchTerm}
            />
            <button className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded">Search</button>
            
          </div>
        </form>
        <div className="flex mb-4">
          <div className="w-1/3 h-12">
          {!isEmpty(this.state.result.items) &&  <Results results={this.state.result} selectedItem={this.state.selectedItem} selectItem={this.selectItem}/>}

          </div>
          {!isEmpty(this.state.selectedItem) &&  <div class="w-2/3 rounded bg-grey-lightest my-4">
            <RepositoryDetail item={this.state.selectedItem}  />
            {!isEmpty(this.state.readme) && <ReadMe readme={this.state.readme} />}
          </div>
          }
        </div>
      </div>
    );
  }
}

export default App
