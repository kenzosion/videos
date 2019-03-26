import React, { Component } from 'react'

export default class SearchBar extends Component {
  state ={
    term: ''
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui inverted segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label style={{ color : 'white'}}>Video search</label>
            <input type="text" placeholder="Search" value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}
