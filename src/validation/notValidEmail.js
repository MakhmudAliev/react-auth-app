/**
 * Function validates email using regexp
 * @param {string} email
 */
export const notValidEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return !re.test(email);
};
