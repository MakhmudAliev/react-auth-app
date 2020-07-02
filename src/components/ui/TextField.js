import React from "react";
import classNames from "classnames";

function TextField({ label, inputId, type, placeholder, onChange }) {
  const labelClassnames = classNames(
    "block text-gray-700 text-sm font-bold mb-2"
  );
  const inputClassnames = classNames(
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  );

  return (
    <label>
      <div className={labelClassnames}>{label}</div>
      <input
        className={inputClassnames}
        id={inputId}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

export default TextField;
