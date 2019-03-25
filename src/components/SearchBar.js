import React, { Component } from 'react'

export default class SearchBar extends Component {
  state ={
    term: ''
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  

  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui form">
          <div className="field">
            <label style={{ color : 'white'}}>Video search</label>
            <input type="text" placeholder="Search" value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </div>
      </div>
    )
  }
}
