import React from 'react';

export const SingleTodo = (todo) => {
  console.log(todo);
  return (
    <div className="card">
      <div className="card-data container">
        <div className="row">
          <div className="action-icon row">
            <span class="material-icons">check_box_outline_blank</span>
          </div>
          <div className="card-title">{todo.title}</div>
        </div>

        <div className="card-description">{todo.description}</div>
      </div>
      <div className="card-date">{todo.date}</div>
    </div>
  );
};
