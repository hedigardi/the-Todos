const fetchTodos = async () => {
  try {
    const response = await fetch('https://random-todos.azurewebsites.net/todos?apikey=%242a%2410%24T6Xd4gMJLTrNeo58vWncdOM%2FEltSOicKlLMyZCzyJXURlicV6fuoy&amount=5&randomdone=false', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const data = await response.json();
    return data.todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export { fetchTodos };