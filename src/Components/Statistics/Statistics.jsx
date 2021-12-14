import React from "react";
import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Статистика</h2>
      <ul>
        <li>Хороший:{good}</li>
        <li>Нейтральный:{neutral}</li>
        <li>Плохой:{bad}</li>
        <li>Total:{total}</li>
        {good !== 0 && (
          <li>
            Goods:
            {positivePercentage}%
          </li>
        )}
      </ul>
    </>
  );
};
Statistics.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
