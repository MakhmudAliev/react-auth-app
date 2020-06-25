import React from "react";

const { Provider, Consumer } = React.createContext();

class UserContextProvider extends React.Component {
  state = {
    isLogged: false,
  };

  login = () => {
    this.setState({ isLogged: true });
  };

  logout = () => {
    this.setState({ isLogged: false });
  };

  render() {
    const isLogged = this.state.isLogged;
    return (
      <Provider value={{ isLogged, login: this.login, logout: this.logout }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
