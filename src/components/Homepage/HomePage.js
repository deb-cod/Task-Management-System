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

  const onDelete = (todo) => {
    alert(`${todo.title} will be Deleted`)
    fetch(`http://localhost:8000/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...todo, isDeleted: true })
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const updatedTodos = todos.map(t => 
          t.id === updatedTodo.id ? updatedTodo : t
        );
        setTodos(updatedTodos);
      });
  };


  const onEdit = (updatedTodo) => {
    fetch(`http://localhost:8000/todos/${updatedTodo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })
    .then(res => res.json())
    .then(data => {
      setTodos(prevTodos => prevTodos.map(todo => (todo.id === data.id ? data : todo)));
    });
  };

  return (
    <div>
      <table className="w-full">
        <tbody>
          {todos.filter((todo) => !todo.status && !todo.isDeleted).map((todo) => (
            <tr key={todo.id}>
              <td><TaskItem todo={todo} onComplete={onComplete} onDelete={onDelete} onEdit={onEdit} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
