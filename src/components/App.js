import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends Component {

  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  };


  render() {
    return (
      <h1 className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </h1>
    );
  }
}

export default App;
