import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text); // API call to add task
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none"
        placeholder="Add new task"
      />
      <button
        type="submit"
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
