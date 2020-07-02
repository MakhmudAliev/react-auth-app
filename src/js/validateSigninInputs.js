/**
 * Function validates sing In inputs: fields should not be empty
 */

const validateSigninInputs = (cb) => {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const warning = document.querySelector("#warning");
  warning.innerHTML = "";

  if (notValidEmail(usernameInput.value)) {
    warning.innerHTML = "Email address is not valid";
    usernameInput.classList.add("border-red-500");
    return;
  }

  if (passwordInput.value !== passwordConfirmationInput.value) {
    warning.innerHTML = "Passwords don't match";
    return;
  } else if (
    passwordInput.value.length < 6 ||
    passwordConfirmationInput.value.length < 6
  ) {
    warning.innerHTML = "Password should contain more than 6 characters";
    return;
  }

  cb();
};

export { validateSigninInputs };
