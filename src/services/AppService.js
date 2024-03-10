const fetchTodos = async () => {
  try {
    const response = await fetch('https://random-todos.azurewebsites.net/api/todos', {
      headers: {
        'x-api-key': '$2a$10$T6Xd4gMJLTrNeo58vWncdOM/EltSOicKlLMyZCzyJXURlicV6fuoy'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export { fetchTodos };
