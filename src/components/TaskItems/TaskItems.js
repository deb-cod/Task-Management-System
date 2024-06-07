import React, { useState } from "react";
import { format, parse } from 'date-fns';

export const TaskItem = ({ todo, onComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };

  // Helper function to parse the date
  const parseDate = (dateString) => {
    if (dateString.includes('-')) {
      return parse(dateString, 'yyyy-MM-dd', new Date());
    } else if (dateString.includes('/')) {
      return parse(dateString, 'dd/MM/yyyy', new Date());
    }
    return new Date(dateString);
  };

  const formattedDueDate = format(parseDate(todo.due_date), 'yyyy-MM-dd');

  return (
    <div className="bg-gray-200 p-6 shadow-md w-full inline-flex">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="text-left">Description</th>
            <th className="text-left">Due Date</th>
            <th className="text-left">Status</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr key={todo.id}>
            <td className="text-left">
              {isEditing ? (
                <input 
                  type="text" 
                  value={editedTodo.title} 
                  onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })} 
                />
              ) : (
                todo.title
              )}
            </td>
            <td className="text-left">
              {isEditing ? (<input type="text" value={editedTodo.description} onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}/> ) : (
                todo.description
              )}
            </td>
            <td className="text-left">
              {isEditing ? (<input type="date" value={editedTodo.due_date} onChange={(e) => setEditedTodo({ ...editedTodo, due_date: e.target.value })} /> ) : (
                formattedDueDate
              )}
            </td>

            <td className="text-left">{todo.status?<>Completed</>:<>In Progress</>}</td>

            <td className="text-left">
              {onComplete && (
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" 
                  onClick={() => onComplete(todo)}>
                  Complete
                </button>
              )}
              {isEditing ? (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleEditClick}>
                  Edit
                </button>
              )}
              {onDelete && (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onDelete(todo)}>
                  Delete
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
