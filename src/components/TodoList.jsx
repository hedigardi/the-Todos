import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
