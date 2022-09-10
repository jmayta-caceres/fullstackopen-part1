import React from "react";
import Part from "./Part";

export default function Content({ parts }) {
  const total = parts.reduce((acumulator, { exercises }) => {
    return acumulator + exercises;
  }, 0);

  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
}
