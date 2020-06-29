import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogged) {
          return <Component {...props} />
        } else {
          return <Redirect to={{pathname: "/", state: {from: props.location}}} />
        }
      }}
    />
  );
};
