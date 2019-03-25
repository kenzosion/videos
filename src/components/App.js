import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <h1 className="ui container" style={{marginTop: '20px'}}>
        <SearchBar />
      </h1>
    );
  }
}

export default App;
