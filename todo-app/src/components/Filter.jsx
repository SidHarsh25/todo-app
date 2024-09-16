import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="mt-6">
      <button
        className={`px-4 py-2 mx-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 mx-2 ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`px-4 py-2 mx-2 ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
