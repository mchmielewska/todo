import React from "react";
import { TodosForDay } from "./TodosForDay";

export const TodosList = ({ days }) => {
  const calendar = days.map((day) => {
    return (
    <div className="container">
      <h3>{day.date}</h3>
      <TodosForDay date = {day.date} id={day.id} key={day.date} />
    </div>
    );
  });

  return <>{calendar}</>;
};
