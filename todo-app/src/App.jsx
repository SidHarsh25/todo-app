import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';

const todoURL = `https://dummyjson.com/todos`;

function App() {
  // Initialize todos from localStorage, or set to empty array if not present
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState('all');

  // Fetch all tasks from the DummyJSON API, but only if localStorage is empty
  useEffect(() => {
    if (todos.length === 0) {
      fetch(`${todoURL}?limit=30`)
        .then(res => res.json())
        .then(data => {
          setTodos(data.todos);
        })
        .catch(err => console.error(err));
    }
  }, []);

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  // Add a new task (simulated with the API)
  const addTodo = (text) => {
    fetch(`${todoURL}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: text,
        completed: false,
        userId: 1, // Assuming userId 1
      }),
    })
      .then(res => res.json())
      .then(newTodo => setTodos([...todos, newTodo]))
      .catch(err => console.error(err));
  };

  // Toggle task completion (simulated with the API)
  const toggleComplete = (id, completed) => {
    fetch(`${todoURL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    })
      .then(res => res.json())
      .then(updatedTodo => {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
        ));
      })
      .catch(err => console.error(err));
  };

  // Delete a task (simulated with the API)
  const deleteTodo = (id) => {
    fetch(`${todoURL}/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(err => console.error(err));
  };

  // Filter tasks based on the selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
