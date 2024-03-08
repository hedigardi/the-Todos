function TodoItem({ todo, removeTodo, updateTodo }) {
  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleCheckboxChange = () => {
    updateTodo(todo.id, { completed: !todo.completed });
  };

  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <button onClick={handleRemove} className="btn-delete">Delete</button>
    </li>
  );
}

export default TodoItem;
