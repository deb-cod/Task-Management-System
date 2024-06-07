import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateEventPage = ({ setTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      due_date: dueDate,
      status: false,
      isDeleted: false
    };

    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(addedTodo => {
        setTodos(prevTodos => [...prevTodos, addedTodo]);
        navigate('/');
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Due Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;
