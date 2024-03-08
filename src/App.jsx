import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://random-todos.azurewebsites.net/api/todos', {
        headers: {
          'x-api-key': '$2a$10$T6Xd4gMJLTrNeo58vWncdOM/EltSOicKlLMyZCzyJXURlicV6fuoy'
        }
      });
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
