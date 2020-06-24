import React from "react";

function Username() {
  return (
    <label>
      <div className={`block text-gray-700 text-sm font-bold mb-2`}>
        Username
      </div>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="username"
        type="text"
        placeholder="Username"
      />
    </label>
  );
}

export default Username;
