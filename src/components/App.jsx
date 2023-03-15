import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { useState } from 'react';


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const incrementValue = (e) => {

    switch (e) {
      case 'good' : setGood(prevState => prevState + 1);
      break;
      case 'neutral' : setNeutral(prevState => prevState + 1);
      break;
      case 'bad' : setBad(prevState => prevState + 1);
      break;
      default:
      break;
    }  
  }
    
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };


  const countPositiveFeedbackPercentage = total => {
    if (!total) return;
    return Math.floor((good / total) * 100);
  };

    return (
      
      <Section title="Please leave your feedback:">
      <Feedback
        options = {{good, neutral, bad}}
        onLeaveFeedback={incrementValue}/>
      
      {countTotalFeedback() 
        ?  ( <Statistic 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())}/>
            ) : (
              <Notification message="There is no feedback...  :((" />
              )
            }

      </Section>
    )
  }