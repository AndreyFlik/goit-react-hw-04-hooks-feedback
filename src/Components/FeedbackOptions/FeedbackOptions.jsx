import React from "react";
import PropTypes from "prop-types";

const stile1 = { textTransform: "uppercase" };

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <ul>
      <li>
        <button style={stile1} name={options} onClick={handleClick}>
          {options}
        </button>
      </li>
      {/* <li>
        <button name="neutral" onClick={handleClick}>
          Нейтральный
        </button>
      </li>
      <li>
        <button name="bad" onClick={handleClick}>
          Плохой
        </button>
      </li> */}
    </ul>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.string,
  handleClick: PropTypes.func,
};

export default FeedbackOptions;
