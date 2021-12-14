import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";
export class Time extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickFeed = (evt) => {
    // console.log(evt.target.name);
    this.setState((prevState) => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
  };

  // neutralClickFeed = () => {
  //   this.setState((prevState) => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };
  // badClickFeed = () => {
  //   this.setState((prevState) => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const totalFeed = this.countTotalFeedback();
    const posPer = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title={"Пожалуйста оставьте отзыв"}>
          {Object.keys(this.state).map((key) => (
            <FeedbackOptions
              key={key}
              options={key}
              handleClick={this.clickFeed}
            />
          ))}
          {totalFeed === 0 && <Notification message="There is no feedback" />}
          {totalFeed !== 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeed}
              positivePercentage={posPer}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Time;
