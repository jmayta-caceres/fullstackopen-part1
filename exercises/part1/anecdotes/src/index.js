import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const getRandomNumber = (max) => {
    return Math.round(Math.random() * max);
  };

  const getRandomAnecdote = () => {
    setSelected(getRandomNumber(anecdotes.length));
  };

  const handleVoteIncrement = (selected) => {
    let newPoints = { ...points };
    newPoints[selected] += 1;

    const incrementVote = () => {
      setPoints(newPoints);
    };
    return incrementVote;
  };

  /**
   *
   * @returns {number} index of most voted anecdote
   */
  const mostVotedAnecdote = () => {
    const votes = Object.values(points);
    const maxVote = Math.max(...votes);
    return votes.indexOf(maxVote);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{props.anecdotes[selected]}</div>
      <p>
        <small>has {points[selected]} votes</small>
      </p>
      <button onClick={handleVoteIncrement(selected)}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[mostVotedAnecdote()]}</p>
      <p>
        <small>has {points[mostVotedAnecdote()]} votes</small>
      </p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
