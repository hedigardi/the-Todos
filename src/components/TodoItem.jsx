function TodoItem({ todo, removeTodo, updateTodo }) {
  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleCheckboxChange = () => {
    updateTodo(todo.id, { completed: !todo.completed });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleRemove}>Delete</button>
    </li>
  );
}

export default TodoItem;
