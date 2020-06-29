import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import TextField from "./ui/TextField";
import Heading from "./ui/Heading";
import { validateInputs } from "../js/validateInputs";

function Signup(props) {
  const warningClassname = classNames("text-red-500  mb-4");
  const buttonClassnames = classNames(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  );

  return (
    <div className={`w-full max-w-sm m-auto mt-20`}>
      <Heading text="Sign Up" />
      <form className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        <div className={warningClassname} id="warning"></div>
        <div className="mb-4">
          <TextField
            label="Username"
            inputId="username"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Password"
            inputId="password"
            type="password"
            placeholder="*****"
          />
        </div>
        <div className="mb-6">
          <TextField
            label="Password again"
            inputId="password-confirmation"
            type="password"
            placeholder="*****"
          />
        </div>

        <div className={`flex items-center justify-between`}>
          {/* <Link to="/dashboard"> */}
          {/* <Button textOnButton="Sign Up" buttonType="submit" validateInputs={validateInputs} /> */}
          {/* </Link> */}
          <button
            className={buttonClassnames}
            onClick={(event) => {
              event.preventDefault();
              validateInputs(() => {
                props.history.push("/");
              });
            }}
          >
            Sign in
          </button>
          <Link
            className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800`}
            to="/"
          >
            Have account? Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
