import { resetWarnings } from "./resetWarnings";
import { highlightField } from "./highlightField";
/**
 * Function checks the login textfields not to be empty
 * @param {*} callback - redirect to dashboard 
 */
const validateSigninInputs = (callback) => {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const warning = document.querySelector("#warning");

  resetWarnings([usernameInput, passwordInput, warning]);

  if (usernameInput.value === "") {
    warning.innerHTML = "Email address should not be empty";
    highlightField(usernameInput);
    return;
  }

  if (passwordInput.value === "") {
    warning.innerHTML = "Password should not be empty";
    highlightField(passwordInput);
    return;
  }

  callback();
};

export { validateSigninInputs };
