import React from "react";
import ClassNames from "classnames";
//import { validateInputs } from "../../js/validateInputs";

//{ props, textOnButton, validateInputs, buttonType }

function Button({ textOnButton, validateInputs, buttonType }) {
  const buttonClassnames = ClassNames(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  );
  return (
    <button
      className={buttonClassnames}
      type={buttonType}
      onClick={validateInputs}
    >
      {textOnButton}
    </button>
  );
}

export default Button;
