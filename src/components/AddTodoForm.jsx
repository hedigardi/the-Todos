import { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add to the todo list"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default AddTodoForm;
