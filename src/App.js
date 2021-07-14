import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import Loading from './Components/Loading'
import axios from 'axios'

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      isLoading: true
    }
  }
      // qf4dbJ2gUFnvNbdc1aKY1VSQ2KKxF22d API Key for giphy
  componentDidMount() {
    this.performSearch()
  }

  performSearch = (query = "cats") => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=qf4dbJ2gUFnvNbdc1aKY1VSQ2KKxF22d&limit=30&q=${query}`)
    .then( response => {
        this.setState({
          gifs: response.data.data,
          isLoading: false
        })
    })
    .catch(err => console.log(err))
  }
  render() { 
    const gifs = this.state.gifs;
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.isLoading)
            ? <Loading />
            : <GifList gifs={gifs} />
          }
        </div>
      </div>
    );
  }
}
