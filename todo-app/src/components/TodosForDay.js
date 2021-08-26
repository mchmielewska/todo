import React, { useState, useEffect } from "react";
import { SingleTodo } from "./SingleTodo";

export const TodosForDay = ({ date }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const API_URL = "http://localhost:4000/api/days/" + date;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <SingleTodo {...todo} key={todo.id} />
      ))}
    </>
  );
};
