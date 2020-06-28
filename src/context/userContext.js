import React from "react";

const UserContext = React.createContext();

class UserContextProvider extends React.Component {
  state = {
    isLogged: true,
    userName: "Makhmud",
  };

  login = () => {
    this.setState({ isLogged: true });
  };

  logout = () => {
    this.setState({ isLogged: false });
  };

  setUsername = (newUsername) => {
    this.setState({ userName: newUsername });
  };

  render() {
    const isLogged = this.state.isLogged;
    const userName = this.state.userName;

    return (
      <UserContext.Provider
        value={{ isLogged, userName, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserContextProvider, UserContext };
