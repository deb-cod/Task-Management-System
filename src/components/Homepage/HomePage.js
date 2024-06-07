import React from "react";
import { TaskItem } from "../TaskItems/TaskItems";

const HomePage = ({ todos, setTodos }) => {
  const onComplete = (todo) => {
    fetch(`http://localhost:8000/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...todo, status: true })
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const updatedTodos = todos.map(t => 
          t.id === updatedTodo.id ? updatedTodo : t
        );
        setTodos(updatedTodos);
      });
  };

  return (
    <div>
      <table className="w-full">
        <tbody>
          {todos.filter((todo) => !todo.status).map((todo) => (
            <tr key={todo.id}>
              <td><TaskItem todo={todo} onComplete={onComplete} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
