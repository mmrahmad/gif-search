import React, { Component } from 'react';

export default class SearchForm extends Component {  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value)
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               ref={(input) => this.query = input}
               name="search" 
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}