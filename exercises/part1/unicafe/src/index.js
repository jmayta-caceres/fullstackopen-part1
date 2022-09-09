import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ handleClick, children }) => {
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
};

const Statistic = ({ children, value }) => {
  return (
    <tr>
      <td>{children}</td>
      <td>
        {value} {children == "positive" ? "%" : ""}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const allFeedbacks = () => good + neutral + bad;
  const avgFeedback = () => {
    const avg = (good * 1 + neutral * 0 + bad * -1) / allFeedbacks();
    return isNaN(avg) ? 0 : avg.toFixed(2);
  };
  const positiveFeedbackRate = () => {
    const rate = (100 * good) / allFeedbacks();
    return isNaN(rate) ? 0 : rate.toFixed(2);
  };

  return (
    <>
      <Statistic value={allFeedbacks()}>all</Statistic>
      <Statistic value={avgFeedback()}>average</Statistic>
      <Statistic value={positiveFeedbackRate()}>positive</Statistic>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const feedback = { good: good, neutral: neutral, bad: bad };

  if (!(good || neutral || bad)) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGood}>good</Button>
        <Button handleClick={handleNeutral}>neutral</Button>
        <Button handleClick={handleBad}>bad</Button>

        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>statistics</h2>

      <table>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <Statistics {...feedback} />
      </table>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
