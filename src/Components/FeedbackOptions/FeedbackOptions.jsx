import React from "react";
import PropTypes from "prop-types";

const stile1 = { textTransform: "uppercase" };

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <ul>
      <li>
        <button
          style={stile1}
          name={options}
          onClick={() => handleClick(options)}
        >
          {options}
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.string,
  handleClick: PropTypes.func,
};

export default FeedbackOptions;
