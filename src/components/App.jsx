import { useState } from 'react';
import { GobalStyle } from "../GlobalStyle";
import { Layout } from "./Layout/Layout";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
 const updateState = (option) => {
  switch (option) {
    case 'good':
      setGood((prev) => prev + 1);
      break;
    case 'neutral':
      setNeutral((prev) => prev + 1);
      break;
    case 'bad':
      setBad((prev) => prev + 1);
      break;
    default:
      break;
  }
};

   const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (good /
        (good + neutral + bad)) *
        100 || 0 
    );
  };
  
  return (
    <Layout>
      <Section
        title="Please leave feedback">
      </Section>
      <FeedbackOptions
        options={Object.keys({good, neutral, bad})}
        onLeaveFeedback={updateState}
      />
      <Section title="Statistics">
        
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet..."/>
        ) : 
          (<Statistics
        options={Object.keys({good, neutral, bad})}
        statistic={{good, neutral, bad}}
        total={countTotalFeedback()}
        positives={countPositiveFeedbackPercentage}
          />
          )}
        </Section>
       <GobalStyle/>
    </Layout>
)

};