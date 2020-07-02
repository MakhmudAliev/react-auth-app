/**
 * Function validates Sing Up form inputs: validates email, checks password matching, password should be longer than 6 chars
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

/**
 * Function validates email using regexp
 * @param {string} email
 */
const notValidEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return !re.test(email);
};

/**
 * Function removes red borders from textfieslds and resets warning message
 * @param {*} elems array of DOM-elements to reset
 */
const resetWarnings = (elems) => {
  const [warning] = elems;
  warning.innerHTML = "";

  for (let elem of elems) {
    elem.classList.remove("border-red-500");
  }
};

/**
 * Function adds red border on textfield
 * @param {*} element element to highlight
 */
const highlightField = (element) => {
  element.classList.add("border-red-500");
};

export { validateSignupInputs };
