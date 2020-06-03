import React from 'react';

class Header extends React.Component {
  state = {
    inputEle: '',
  };

  inputValue = e => {
    this.setState({inputEle: e.target.value})
  };

  searchMovies = e => {
    this.props.searchMovies(this.state.inputEle)
    this.setState({inputEle: ''})
    e.preventDefault();
  };

  render = () => {
    return (
      <header className="header">
        <a href="/"
          ><img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
        /></a>
        <form id="search" className="search" onSubmit={this.searchMovies}>
          <input 
            type="search" 
            placeholder="Search for a title..." 
            value={this.state.inputEle}
            onChange={this.inputValue}
          />
        </form>
      </header>
    )
  }
}

export default Header;