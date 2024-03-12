import { useState } from 'react';

function TodoItem({ todo, removeTodo, updateTodo }) {
  const [completed, setCompleted] = useState(todo.completed);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleCheckboxChange = () => {
    const updatedCompleted = !completed;
    setCompleted(updatedCompleted);
    updateTodo(todo.id, { completed: updatedCompleted });
  };

  return (
    <li className={completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {todo.task}
      </span>
      <button onClick={handleRemove} className="btn-delete">Delete</button>
    </li>
  );
}

export default TodoItem;
