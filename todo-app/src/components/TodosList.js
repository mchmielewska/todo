import React from 'react';
import { TodosForDay } from './TodosForDay';

export const TodosList = ({ days }) => {
  const calendar = days.map((day) => {
    return (
      <div className="container">
        <div className="row todo-date">
          <span className="material-icons">date_range</span>
          <h3>{day.date}</h3>
        </div>
        <TodosForDay date={day.date} id={day.id} key={day.date} />
      </div>
    );
  });

  return <>{calendar}</>;
};
