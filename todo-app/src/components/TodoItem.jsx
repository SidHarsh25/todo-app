
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-3">
      <span
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => toggleComplete(todo.id, todo.completed)}
      >
        {todo.todo} {/* Access todo text using API field */}
      </span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
