import React, { useContext } from "react";
import ClassNames from "classnames";

import Heading from "./ui/Heading";
import { UserContext } from "../context/userContext";

function Dashboard(props) {
  const { isLogged, userName, logout, setUsername } = useContext(UserContext);
  const buttonClassnames = ClassNames(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  );

  return (
    <div className={`w-full max-w-sm m-auto mt-20`}>
      <Heading text="Dashboard" />

      <div className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        {isLogged ? `Welcome, ${userName}` : "You're not logged in!"}

        <div className={`mt-6`}>
          <button
            className={buttonClassnames}
            onClick={() => {
              logout(() => {
                props.history.push("/");
              });
            }}
          >
            Log Out
          </button>
          {/* <Link
            to="/"
            className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800`}
          >
            <Button
              textOnButton="Log out"
              buttonType="button"
              onClick={() => {
                logout(() => {
                  props.history.push("/");
                });
              }}
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
