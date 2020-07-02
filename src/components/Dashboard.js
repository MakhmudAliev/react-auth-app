import React, { useContext, useState } from "react";
import ClassNames from "classnames";

import Heading from "./ui/Heading";
import { UserContext } from "../context/userContext";
import TextField from "./ui/TextField";

function Dashboard(props) {
  const { isLogged, userName, logout, setUsername } = useContext(UserContext);
  const [newUsername, setNewusername] = useState(userName);
  const buttonClassnames = ClassNames(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  );
  const setButtonClassnames = ClassNames(
    "ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  );
  const handleInput = (event) => {
    setNewusername(event.target.value);
  };

  return (
    <div className={`w-full max-w-sm m-auto mt-20`}>
      <Heading text="Dashboard" />

      <div className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        <div className="mb-4">
          {isLogged ? `Welcome, ${userName}` : "You're not logged in!"}
        </div>
        <div className={`flex items-end mb-4`}>
          <TextField
            label="Set new username"
            inputId="username"
            type="text"
            placeholder={newUsername}
            onChange={handleInput}
          />
          <button
            className={setButtonClassnames}
            onClick={() => {
              setUsername(newUsername);
            }}
          >
            Set
          </button>
        </div>

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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
