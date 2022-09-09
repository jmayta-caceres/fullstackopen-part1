import React, { useState } from "react";
import ReactDOM from "react-dom/client";

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
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allFeedbacks()}</p>
      <p>average {avgFeedback()}</p>
      <p>positive {positiveFeedbackRate()} %</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
