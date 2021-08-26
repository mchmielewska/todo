import React from "react";

export const SingleTodo = (todo) => {
  console.log(todo)
  return (
    <div className="card">
      <div className="card-data">
        <div className="card-title">{todo.title}</div>
        <div className="card-description">{todo.description}</div>
      </div>
      <div className="card-date">{todo.date}</div>
    </div>
  );
};
