import React from "react";

function Button({ textOnButton, validateInputs }) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type="button"
      onClick={validateInputs}
    >
      {textOnButton}
    </button>
  );
}

export default Button;
