import React from "react";

const UserContext = React.createContext();

class UserContextProvider extends React.Component {
  state = {
    isLogged: false,
    userName: "Makhmud",
  };

  login = (cb) => {
    this.setState({ isLogged: true });
    cb();
  };

  logout = (cb) => {
    this.setState({ isLogged: false });
    cb();
  };

  isAuthorized = () => {
    return this.state.isLogged;
  };

  setUsername = (newUsername) => {
    this.setState({ userName: newUsername });
  };

  render() {
    const isLogged = this.state.isLogged;
    const userName = this.state.userName;

    return (
      <UserContext.Provider
        value={{
          isLogged,
          userName,
          login: this.login,
          logout: this.logout,
          isAuthorized: this.isAuthorized,
          setUsername: this.setUsername,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserContextProvider, UserContext };
