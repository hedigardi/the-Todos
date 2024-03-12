import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { fetchTodos } from './services/AppService';
import './App.css';

function App() {
  const storedTodos = localStorage.getItem("todos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const fetchAndSetTodos = async () => {
      try {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos !== null && storedTodos !== '') {
          setTodos(JSON.parse(storedTodos));
        } else {
          const data = await fetchTodos();
          setTodos(data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAndSetTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
    if (updatedTodo.completed) {
      const completedTodo = updatedTodos.find(todo => todo.id === id);
      updatedTodos.splice(updatedTodos.indexOf(completedTodo), 1);
      updatedTodos.push(completedTodo);
    }
    setTodos(updatedTodos);
  };

  const sortTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (a.text < b.text) return -1;
      if (a.text > b.text) return 1;
      return 0;
    });
    setTodos(sortedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <button onClick={sortTodos} className='btn-sort'>Sort A - Z</button>
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
