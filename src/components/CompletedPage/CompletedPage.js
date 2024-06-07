import React from "react";
import { TaskItem } from "../TaskItems/TaskItems";

const CompletedPage = ({ todos }) => {
  return (
    <div>
      <table className="w-full">
        <tbody>
          {todos && todos.filter((todo) => todo.status && !todo.isDeleted).map((todo) => (
            <tr key={todo.id}>
              <td><TaskItem todo={todo} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedPage;
