import React from "react";

export const TaskItem = ({ todo, onComplete }) => {
  return (
    <div className="bg-gray-200 p-6 shadow-md w-full inline-flex">
      <table className="w-full">
        <tbody>
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.due_date}</td>
            <td>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onComplete(todo)}
              >
                Complete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
