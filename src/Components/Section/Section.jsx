import React from "react";
import PropTypes from "prop-types";
const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};
Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Section;
