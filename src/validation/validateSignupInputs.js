import { notValidEmail } from "./notValidEmail";
import { resetWarnings } from "./resetWarnings";
import { highlightField } from "./highlightField";
/**
 * Function validates Sing Up form inputs: validates email, checks password matching, password should be longer than 6 chars
 * @param {*} callback - redirect to sing in
 */
const validateSignupInputs = (callback) => {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const passwordConfirmationInput = document.querySelector(
    "#password-confirmation"
  );
  const warning = document.querySelector("#warning");

  resetWarnings([
    usernameInput,
    passwordInput,
    passwordConfirmationInput,
    warning,
  ]);

  if (notValidEmail(usernameInput.value)) {
    warning.innerHTML = "Email address is not valid";
    highlightField(usernameInput);
    return;
  }

  if (passwordInput.value !== passwordConfirmationInput.value) {
    warning.innerHTML = "Passwords don't match";
    highlightField(passwordInput);
    highlightField(passwordConfirmationInput);
    return;
  } else if (
    passwordInput.value.length < 6 ||
    passwordConfirmationInput.value.length < 6
  ) {
    warning.innerHTML = "Password should contain more than 6 characters";
    highlightField(passwordInput);
    highlightField(passwordConfirmationInput);
    return;
  }

  callback();
};

export { validateSignupInputs };
