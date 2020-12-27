import React  from 'react';

class Header extends React.Component {
  render() {
    return (<div className = "app-header">
      {this.props.user ? 
      <div className = "header-welcome">Hello {this.props.user}! Welcome to </div> : 
      <div className = "header-welcome"> Hello! Welcome to </div>}
      <h3 className = "header-hello">✨ Emoji hangman ✨</h3>
      </div>
  )}
}

export default Header;