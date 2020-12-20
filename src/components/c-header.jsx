function Header(props) {
    return <div>
      <h1 className = "header-hello">Hello, {props.name}! </h1>
      <p className = "header-welcome"> Welcome to your hangman game</p>
      </div>
  }

export default Header;