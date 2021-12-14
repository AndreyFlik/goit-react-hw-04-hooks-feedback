import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

function Time() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const clickFeed = (name) => {
    setState((prevState) => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  const totalFeed = countTotalFeedback();
  const posPer = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title={"Пожалуйста оставьте отзыв"}>
        {["good", "neutral", "bad"].map((key) => (
          <FeedbackOptions key={key} options={key} handleClick={clickFeed} />
        ))}
        {totalFeed === 0 && <Notification message="There is no feedback" />}
        {totalFeed !== 0 && (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeed}
            positivePercentage={posPer}
          />
        )}
      </Section>
    </div>
  );
}

export default Time;
