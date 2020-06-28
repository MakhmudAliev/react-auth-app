import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import classNames from "classnames";
import TextField from "./ui/TextField";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

function Signin() {
  const { isLogged, userName } = useContext(UserContext);
  const wrapperClassnames = classNames("w-full max-w-sm m-auto mt-20");
  return (
    <div className={wrapperClassnames}>
      <Heading text="Sign In" />

      {isLogged ? `Hello, ${userName}` : "you're not logged in"}

      <form className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        <div className="mb-4">
          <TextField
            label="Username"
            inputId="username"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <TextField
            label="Password"
            inputId="password"
            type="password"
            placeholder="*****"
          />
        </div>

        <div className={`flex items-center justify-between`}>
          <Link to="/dashboard">
            <Button textOnButton="Sign In" />
          </Link>
          <Link
            className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800`}
            to="/signup"
          >
            No account? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
