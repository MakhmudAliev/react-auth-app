import React from "react";
import { Link } from "react-router-dom";
import Username from "./inputs/Username";
import Password from "./inputs/Password";
import Button from "./interface/Button";
import Heading from "./interface/Heading";
import { UserContextConsumer } from "../context/userContext";

function Signin() {
  return (
    <div className={`w-full max-w-sm m-auto mt-20`}>
      <Heading text="Sign In" />
      {/* <UserContextConsumer>
        {(isLogged) => <p>Welcome, {isLogged ? "yes" : "no"}!</p>}
      </UserContextConsumer> */}
      <form className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        <div className="mb-4">
          <Username />
        </div>

        <div className="mb-6">
          <Password labelText="Password" />
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
