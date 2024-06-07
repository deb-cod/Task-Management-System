import React from "react";
import { Link } from 'react-router-dom';

export const Header = ({ todos }) => {
  const tasksToDo = todos.filter(todo => !todo.status && !todo.isDeleted).length;
  const tasksCompleted = todos.filter(todo => todo.status && !todo.isDeleted).length;
  const tasksDeleted = todos.filter(todo => todo.isDeleted).length;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white">Task Management</div>
          <div className="text-white">
            <Link to="/" className="mr-4">To Do: {tasksToDo}</Link>
            <Link to="/completed" className="mr-4">Completed: {tasksCompleted}</Link>
            {/* <span>Deleted: {tasksDeleted}</span> */}
            <Link to="/deleted" className="mr-4">Deleted: {tasksDeleted}</Link>
            <Link to="/create" className="mr-4">Create Event</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
