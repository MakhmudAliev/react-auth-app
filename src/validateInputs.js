const validateInputs = () => {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const passwordConfirmationInput = document.querySelector(
    "#password-confirmation"
  );
  const warning = document.querySelector("#warning");
  warning.innerHTML = "";

  if (notValidEmail(usernameInput.value)) {
    warning.innerHTML = "Email address is not valid";
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

  console.log("everything is fine");
};

const notValidEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return !re.test(email);
};

export { validateInputs };
