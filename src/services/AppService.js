const fetchTodos = async () => {
  try {
    const response = await fetch('https://random-todos.azurewebsites.net/todos?apikey=$2a$10$T6Xd4gMJLTrNeo58vWncdOM/EltSOicKlLMyZCzyJXURlicV6fuoy&amount=5&randomdone=false', {
      headers: {
        'Method': 'application/json'
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