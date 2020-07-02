/**
 * Function removes red borders from textfieslds and resets warning message
 * @param {*} elems array of DOM-elements to reset
 */
export const resetWarnings = (elems) => {
  const [warning] = elems;
  warning.innerHTML = "";

  for (let elem of elems) {
    elem.classList.remove("border-red-500");
  }
};
